<template>
    <div class="row flex flex-wrap justify-center py-1">
        <slot />
    </div>
</template>

<script>

export default {
    name: 'RowUi',

    props: {
        basis: { type: String, default: null }
    }
}

</script>
