<template>

    <Component @click.stop.prevent="subnavToggler" :is="tag" :to="item.to" :href="item.href"
        :title="item.title" :target="item.target"
        :class="['sidebar-nav-item', subitems && subnavVisible ? 'sidebar-nav-item-active' : null]">
        <div class="flex items-center">
            <IconUi v-if="item.icon" :iconName="item.icon" />

            <svg v-else class="sidebar-nav-default-icon" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

            <span class="pl-2">{{ item.text }}</span>
        </div>
    </Component>

    <nav v-if="subitems" v-show="subnavVisible" class="sidebar-subnav">
        <NavItemUi v-for="sitem in subitems" v-bind:key="sitem.id" :item="sitem" />
    </nav>

</template>

<script>

import IconUi from '@/components/Ui/IconUi.vue';

export default {
    name: "NavItemUi",
    components: { IconUi },

    data() {
        return {
            subnavVisible: false,
        };
    },

    created() {
        if (this.item.activeIn && this.item.activeIn.includes(this.$route.name))
            this.subnavVisible = true;
    },

    props: {
        item: {
            type: Object,
            default: null
        },
    },

    computed: {
        tag() {
            if (typeof this.item.to != "undefined")
                return "RouterLink";
            if (typeof this.item.href != "undefined")
                return "a";
            return "div";
        },

        subitems() {
            if (this.item.subnav)
                return this.item.subnav;

            return null;
        },
    },

    methods: {
        subnavToggler() {
            this.subnavVisible = !this.subnavVisible;
        },
    },
};

</script>

<style>
.sidebar-subnav {
    @apply flex flex-col bg-gray-800 border-l-2 border-gray-700 pl-4 mb-1;
}

.sidebar-nav-default-icon {
    @apply w-3 h-3;
}

.sidebar-nav-item {
    @apply w-full text-gray-400 px-2 py-2 duration-300 mb-1 cursor-pointer;
}

.sidebar-nav-item:hover,
.sidebar-nav-item-active,
.sidebar-nav-item.router-link-exact-active {
    @apply bg-gray-800 text-gray-200 pl-4;
}
</style>