<template>
    <div class="column" :class="basisClass">
        <div class="my-2 mr-1 ml-1">
            <slot />
        </div>
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
