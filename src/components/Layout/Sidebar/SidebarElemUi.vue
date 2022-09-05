<template>
    <div class="pb-4">
        <h3 v-if="title" class="text-gray-400 font-semibold py-2">{{ title }}</h3>
        <div class="py-4">
            <NavUi :items="navItems" />
        </div>
    </div>
</template>

<script>
import NavUi from './Nav/NavUi.vue';

export default {
    name: "SidebarElemUi",

    components: { NavUi },

    props: {
        title: {
            type: String,
            default: null
        },

        navItems: {
            type: Array,
            default: null
        },
    },
}

</script>