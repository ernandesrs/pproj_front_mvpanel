<template>

    <Component @click="buttonClicked" :is="tag" :type="buttonType" :class="styleClass"
        :href="href" :to="to" :title="title" :target="target" :id="id" :disabled="disabled">
        <IconUi v-if="iconName" :icon-name="iconName" />
        <span v-if="text" :class="{ 'ml-2': iconName }">
            {{ text }}
        </span>
    </Component>

</template>

<script>

import IconUi from './IconUi.vue';

export default {
    name: "ButtonUi",
    components: { IconUi },

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
            default: null
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
        },
        size: {
            type: String,
            default: null
        },
        to: {
            type: Object,
            default: null
        },
        href: {
            type: String,
            default: null
        },
        target: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null
        },
        id: { type: String, default: null },
        disabled: { type: Boolean, default: false }
    },
    methods: {
        buttonClicked(event) {
            this.$emit("buttonClicked", event);
        },
    },
    computed: {
        tag() {
            if (this.to) {
                return "RouterLink";
            } else if (this.href) {
                return "a";
            }
            return "button";
        },
        buttonType() {
            if (this.tag !== "button")
                return null;
            return this.type;
        },
        styleClass() {
            let block = this.block ? 'block w-full' : 'inline-block';
            let size = this.size ? 'button-' + this.size : 'button';
            let style = this.outlined ? this.buttonStyle + '-outline' : ((this.border ? this.buttonStyle + '-border ' : '') + this.buttonStyle);
            let round = this.rounded ? 'rounded-lg' : '';

            return `${block} ${size} ${style} ${round} opacity-100 hover:opacity-70 transition duration-300 cursor-pointer`;
        }
    },
};

</script>