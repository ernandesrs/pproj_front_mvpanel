<template>
    <nav class="flex flex-col">
        <NavItemUi v-for="item in items" v-bind:key="item.text" :item="item" />
    </nav>
</template>

<script>
import NavItemUi from './NavItemUi.vue';
    
export default{
    name: "NavUi",
    components: { NavItemUi },

    props: {
        items: {
            type: Array,
            default: null
        }
    },
};

</script>