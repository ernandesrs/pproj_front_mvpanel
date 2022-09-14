<template>
    <RowUi class="mb-2">
        <ColumnUi basis="basis-full sm:basis-3/4">
            <div class="flex items-center">
                <img v-if="imageThumb" class="hidden sm:block w-12 h-12 rounded-full"
                    :src="imageThumb" :alt="imageName">
                <div class="ml-2">
                    <slot name="content" />
                </div>
            </div>
        </ColumnUi>
        <ColumnUi basis="basis-full sm:basis-1/4">
            <div class="h-full flex items-center justify-center sm:justify-end">
                <slot name="actions" />
            </div>
        </ColumnUi>
    </RowUi>
</template>

<script>

import RowUi from './Grid/RowUi.vue';
import ColumnUi from './Grid/ColumnUi.vue';

export default {
    name: "ListItem",
    components: { RowUi, ColumnUi },

    props: {
        imageThumb: { type: String, default: null },
        imageName: { type: String, default: null }
    }
};
</script>