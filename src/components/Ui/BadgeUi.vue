<template>
    <span :class="style" class="inline-block border py-0 px-2 rounded cursor-default">
        <IconUi v-if="iconName" :icon-name="iconName" />
        <span :class="{'ml-1': iconName}">{{ text }}</span>
    </span>
</template>

<script>

import IconUi from './IconUi.vue';

const colors = {
    default: "bg-gray-200 border-gray-300 text-gray-600",
    success: "bg-green-800 border-green-900 text-gray-300",
    danger: "bg-red-800 border-red-900 text-gray-300",
    warning: "bg-warning-800 border-warning-900 text-gray-300",
    info: "bg-blue-800 border-blue-900 text-gray-300",
};

export default {
    name: "BadgeUi",
    components: { IconUi },

    props: {
        variant: { type: String, default: 'default' },
        size: { type: String, default: null },
        iconName: { type: String, default: null },
        text: { type: String, default: 'Badge text' },
    },

    computed: {
        style() {
            let colorStyle = colors[this.variant];
            let size = this.size ? `text-${this.size}` : "";

            return `${colorStyle} ${size}`;
        }
    }
}

</script>