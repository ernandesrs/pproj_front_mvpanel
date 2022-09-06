<template>
    <div class="flex flex-wrap justify-center border p-4">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'CardGroupUi',

    props: {
        basis: {
            type: String,
            default: ''
        },
    }
};
</script>