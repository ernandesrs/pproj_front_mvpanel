<template>
    <div class="flex flex-wrap py-1" :class="basis">
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
