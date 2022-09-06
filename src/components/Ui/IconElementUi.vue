<template>
    <span :class="iconClass" :style="[`font-size: ${size}rem`]"></span>
</template>

<script>

import icon from './../../utils/icons';

export default {
    name: 'IconElementUi',

    props: {
        iconName: {
            type: String,
            default: 'app',
        },
        size: {
            type: String,
            default: '1.1'
        },
    },

    data() {
        return {
            icon: icon
        };
    },

    computed: {
        iconClass() {
            let icon = this.icon.getClass(this.iconName) ?? this.icon.getClass('app');
            return `icon ${icon}`;
        },
    },
};

</script>