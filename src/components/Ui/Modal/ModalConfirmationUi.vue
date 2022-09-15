<template>
    <ModalUi @closeModal="modalClose" :show="visible" :showFooterButtonClose="true">
        <template v-slot:content>
            <div :class="modalStyle">
                <slot name="content" />
            </div>
        </template>
        <template v-slot:footer>
            <ButtonUi @click="confirmAction" :variant="variant" icon="checkLg" text="Confirmar"
                rounded />
        </template>
    </ModalUi>
</template>

<script>

const colorsPresets = {
    default: 'text-gray-900',
    success: 'text-green-900',
    danger: 'text-red-900',
    warning: 'text-yellow-900',
    info: 'text-blue-900',
};

import ModalUi from './ModalUi.vue';
import ButtonUi from '../ButtonUi.vue';

export default {
    name: 'ModalConfirmationUi',
    components: { ModalUi, ButtonUi },

    data() {
        return {
            visible: false,
        };
    },

    props: {
        show: { type: Boolean, default: false },
        variant: { type: String, default: 'default' },
    },

    watch: {
        show: {
            immediate: true,
            handler(nv) {
                this.visible = nv;
            },
            deep: true
        }
    },

    methods: {
        modalClose() {
            this.visible = false;
            this.$emit("closeModal");
        },

        confirmAction() {
            this.visible = false;
            this.$emit("confirmAction");
        }
    },

    computed: {
        modalStyle() {
            let colors = colorsPresets[this.variant] ?? colorsPresets['default'];
            return `${colors}`;
        }
    }
};

</script>