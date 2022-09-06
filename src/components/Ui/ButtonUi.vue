<template>
    <button @click="buttonClicked" :type="type" :class="styleClass">
        <IconElementUi v-if="iconName" :icon-name="iconName" />
        <span :class="{ 'ml-2': iconName }">
            {{ text }}
        </span>
    </button>
</template>

<script>

import IconElementUi from './IconElementUi.vue';

export default {
    name: "ButtonUi",
    components: { IconElementUi },

    data() {
        return {
        };
    },
    props: {
        type: {
            type: String,
            default: "button"
        },
        text: {
            type: String,
            default: "Button text"
        },
        iconName: {
            type: String,
            default: null
        },
        buttonStyle: {
            type: String,
            default: 'default',
        },
        border: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false
        },
        block: {
            type: Boolean,
            default: false
        },
        outlined: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        buttonClicked(event) {
            this.$emit("buttonClicked", event);
        },
    },
    computed: {
        styleClass() {
            let block = this.block ? 'block w-full' : '';
            let style = this.outlined ? this.buttonStyle + '-outline' : ((this.border ? this.buttonStyle + '-border ' : '') + this.buttonStyle);
            let round = this.rounded ? 'rounded-lg' : '';

            return `${block} px-4 py-2 ${style} ${round} opacity-100 hover:opacity-70 transition duration-400`;
        }
    },
};

</script>