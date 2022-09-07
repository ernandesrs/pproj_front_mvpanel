<template>
    <span :class="iconClass"></span>
</template>

<script>

import icon from './../../utils/icons';

export default {
    name: 'IconUi',

    props: {
        iconName: {
            type: String,
            default: 'app',
        }
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