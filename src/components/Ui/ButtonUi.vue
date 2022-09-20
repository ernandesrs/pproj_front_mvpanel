<template>

    <Component :is="buttonTag" :type="buttonType"
        :class="[buttonStyle, {'animate-pulse': loading}]" :href="href" :to="to"
        :title="title" :target="target" :id="id" :disabled="disabled">
        <IconUi v-if="icon" :icon-name="icon" />
        <span v-if="text" :class="{ 'ml-1': icon }">
            {{ text }}
        </span>
    </Component>

</template>

<script>

const colorPresets = {
    default: "bg-gray-100 border border-gray-100 text-gray-500 hover:bg-gray-50",
    success: "bg-green-600 border border-green-600 text-gray-100 hover:bg-green-500 hover:border-green-500",
    danger: "bg-red-600 border border-red-600 text-gray-100 hover:bg-red-500 hover:border-red-500",
    warning: "bg-yellow-600 border border-yellow-600 text-gray-100 hover:bg-yellow-500 hover:border-yellow-500",
    info: "bg-blue-600 border border-blue-600 text-gray-100 hover:bg-blue-500 hover:border-blue-500",
    dark: "bg-gray-700 border border-gray-700 text-gray-100 hover:bg-gray-600 hover:border-gray-600",

    outlined_default: "border border-gray-100 text-gray-500 hover:bg-gray-100",
    outlined_success: "border border-green-600 text-green-600 hover:bg-green-600 hover:text-gray-100",
    outlined_danger: "border border-red-600 text-red-600 hover:bg-red-600 hover:text-gray-100",
    outlined_warning: "border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-gray-100",
    outlined_info: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-gray-100",
    outlined_dark: "border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-100",
};

const sizesPresets = {
    default: "text-base",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
};

import IconUi from "./IconUi.vue";

export default {
    name: "ButtonUi",
    components: { IconUi },

    data() {
        return {
        };
    },
    props: {
        type: { type: String, default: "button" },
        variant: { type: String, default: "default" },
        rounded: { type: Boolean, default: false },
        block: { type: Boolean, default: false },
        outlined: { type: Boolean, default: false },
        size: { type: String, default: null },
        link: { type: Boolean, default: false },

        loading: { type: Boolean, default: false },
        icon: { type: String, default: null },
        text: { type: String, default: null },
        to: { type: Object, default: null },
        href: { type: String, default: null },
        target: { type: String, default: null },
        title: { type: String, default: null },
        id: { type: String, default: null },
        disabled: { type: Boolean, default: false },
    },
    watch: {
    },
    computed: {
        buttonTag() {
            if (this.to) {
                return "RouterLink";
            } else if (this.href) {
                return "a";
            }
            return "button";
        },
        buttonType() {
            if (this.buttonTag !== "button")
                return null;
            return this.type;
        },
        buttonStyle() {
            let block = this.block ? "block w-full" : "inline-block";
            let round = this.rounded ? "rounded-md" : "";
            let padding = this.text ? (this.size == "sm" ? "px-3 py-1" : "px-5 py-2") : "py-2 px-4";

            return `${block} ${colorPresets[(this.outlined ? "outlined_" + this.variant : this.variant)]} ${sizesPresets[this.size]} ${round} ${padding} ${this.link ? "hover:underline" : ""} transition duration-300 cursor-pointer`;
        }
    },
};

</script>