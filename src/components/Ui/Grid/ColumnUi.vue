<template>
    <div :class="basisClass">
        <div class="px-4 py-2 m-2">
            <slot />
        </div>
    </div>
</template>

<script>

export default {
    name: 'ColumnUi',

    computed: {
        basisClass() {
            return this.$parent.$props.basis;
        },
    },
}

</script>
