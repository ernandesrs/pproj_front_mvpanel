<template>
    <div class="row flex flex-wrap justify-center">
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
