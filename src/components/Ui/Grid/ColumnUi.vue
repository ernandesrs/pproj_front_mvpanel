<template>
    <div :class="[basisClass, 'p-2']">
        <slot />
    </div>
</template>

<script>

export default {
    name: 'ColumnUi',

    props: {
        basis: { type: String, default: null },
    },

    computed: {
        basisClass() {
            if (this.basis)
                return this.basis;

            return this.$parent.$props.basis;
        },
    },
}

</script>
