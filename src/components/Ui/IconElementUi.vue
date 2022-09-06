<template>
    <span class="text-gray-200" :class="iconClass"></span>
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