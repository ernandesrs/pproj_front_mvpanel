<template>
    <Component :is="titleTag" :class="titleStyle">
        <IconUi v-if="icon" :icon-name="icon" />
        <span :class="{'ml-2':icon}">{{ title }}</span>
    </Component>
</template>

<script>

const sizesPresets = {
    h1: 'text-2xl md:text-3xl lg:text-4xl',
    h2: 'text-xl md:text-2xl lg:text-3xl',
    h3: 'text-lg md:text-xl lg:text-2xl',
    h4: 'text-md md:text-lg lg:text-xl',
    h5: 'text-base md:text-md lg:text-lg',
};

import IconUi from './IconUi.vue';

export default {
    name: "TitleUi",
    components: { IconUi },

    props: {
        title: { type: String, default: null },
        icon: { type: String, default: null },
        tag: { type: String, default: 'h1' },
        size: { type: String, default: 'h1' },
    },

    computed: {
        titleTag() {
            return this.tag;
        },

        titleStyle() {
            return `${sizesPresets[this.size]} font-bold lg:font-semibold cursor-default`;
        }
    }
};

</script>