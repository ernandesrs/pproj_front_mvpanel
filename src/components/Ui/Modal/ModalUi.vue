<template>
    <div v-show="visible" :class="modalContainerStyle">
        <BackdropUi v-show="visible" @click="closeModal" />

        <div :class="modalStyle">
            <CardUi class="w-full bg-gray-50">
                <!-- header -->
                <div v-if="showHeaderButtonClose || $slots.header"
                    class="flex flex-col items-center">
                    <div class="flex items-center w-full">

                        <slot name="header" />

                        <button @click="closeModal" v-if="showHeaderButtonClose"
                            class="w-8 h-8 border border-gray-600 rounded-full ml-auto">
                            <IconUi icon-name="x" />
                        </button>
                    </div>
                </div>
                <!-- /header -->
                <div class="py-4">
                    <slot name="content" />
                </div>

                <!-- footer -->
                <div v-if="showFooterButtonClose || $slots.footer"
                    class="flex items-center">

                    <slot name="footer" />

                    <div v-if="showFooterButtonClose" class="ml-auto">
                        <ButtonUi @click="closeModal" variant="dark" text="Fechar" rounded
                            icon="x" />
                    </div>
                </div>
                <!-- qfooter -->
            </CardUi>
        </div>
    </div>
</template>

<script>

import CardUi from './../CardUi.vue';
import IconUi from '../IconUi.vue';
import ButtonUi from '../ButtonUi.vue';
import BackdropUi from '../BackdropUi.vue';

const sizesPresets = {
    default: "sm:w-4/5 md:w-3/5 lg:w-2/5",
    md: "sm:w-5/5 md:w-4/5 lg:w-3/5",
    lg: "sm:w-5/5 md:w-4/5 lg:w-4/5",
    full: "w-full",
};

export default {
    name: "ModalUi",
    components: { CardUi, IconUi, ButtonUi, BackdropUi },

    data() {
        return {
            visible: false,
        };
    },

    props: {
        showHeaderButtonClose: { type: Boolean, default: false },
        showFooterButtonClose: { type: Boolean, default: false },
        show: { type: Boolean, default: false },
        size: { type: String, default: "default" },
        alignment: { type: String, default: "center" },
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
        closeModal() {
            this.visible = false;
            this.$emit("closeModal");
        }
    },

    computed: {
        modalContainerStyle() {
            let alignment = { center: 'center', top: 'start' }[this.alignment] ?? 'center';
            return `flex items-${alignment} justify-center w-full h-full fixed top-0 left-0 z-50`;
        },
        modalStyle() {
            let size = sizesPresets[this.size] ?? sizesPresets["default"];
            return `w-full h-min ${size} p-2 md:p-3 lg:p-5 relative z-50`;
        }
    }
}
</script>