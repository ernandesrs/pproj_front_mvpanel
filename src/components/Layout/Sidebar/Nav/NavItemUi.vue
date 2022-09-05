<template>

    <template v-if="!subitems">
        <Component :is="tag" :to="item.to" :href="item.href" :title="item.title"
            :target="item.target" :class="navItemClass">
            <div class="flex items-center">
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

                <span class="pl-2">{{ item.text }}</span>
            </div>
        </Component>
    </template>

    <template v-else>
        <Component @click.stop.prevent="toggler" :is="tag" :title="item.title"
            :class="[navItemClass, visible ? navItemActive : null]">
            <div class="flex items-center">
                <svg v-if="!visible" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

                <svg v-else class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

                <span class="pl-2">{{ item.text }}</span>
            </div>
        </Component>

        <nav v-show="visible"
            class="flex flex-col bg-gray-800 border-l-2 border-gray-700 pl-4 mb-1">
            <NavItemUi v-for="it in subitems" v-bind:key="it.id" :item="it" />
        </nav>
    </template>

</template>

<script>

export default{
    name: "NavItemUi",
    components: {},

    props: {
        item: {
            type: Object,
            default: null
        },
    },

    data() {
        return {
            visible: false,
            navItemClass: 'w-full hover:bg-gray-800 text-gray-400 px-2 py-2 hover:pl-4 duration-300 mb-1 cursor-pointer',
            navItemActive: 'bg-gray-800 pl-4',
        };
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
            if(this.item.subnav)
                return this.item.subnav;

            return null;
        },
    },

    methods: {
        toggler() {
            this.visible = !this.visible;
        },
    },
};

</script>