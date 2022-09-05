<template>
    <div :class="basisClass">
        <div class="py-4 px-6 mx-4 my-2 shadow-lg rounded bg-white">
            <slot name="cardContent" />
        </div>
    </div>
</template>

<script>

export default {
    name: 'CardItemUi',

    computed: {
        basisClass() {
            return this.$parent.$props.basis;
        }
    },
};

</script>