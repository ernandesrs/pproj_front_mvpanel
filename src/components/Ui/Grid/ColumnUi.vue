<template>
    <div class="column" :class="basisClass">
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
            console.log(this.$parent.$props.basis);
            return this.$parent.$props.basis;
        },
    },
}

</script>
