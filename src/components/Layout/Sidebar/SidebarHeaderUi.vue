<template>
    <!-- sidebar header -->
    <header class="flex justify-center items-center py-3">
        <div v-if="!$slots.header">
            <img class="w-16 h-16" src="./../../../assets/logo.png" alt="">
        </div>
        <slot v-else name="header" />
    </header>
    <!-- /sidebar header -->
</template>

<script>

export default {
    name: 'SidebarHeaderUi'
};

</script>