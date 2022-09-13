<template>
    <RowUi>
        <ColumnUi basis="basis-full md:basis-3/4">
            <div class="flex items-center">
                <img v-if="imageThumb" class="hidden md:block w-12 h-12 rounded-full"
                    :src="imageThumb" :alt="imageName">
                <div class="ml-2">
                    <slot name="content" />
                </div>
            </div>
        </ColumnUi>
        <ColumnUi basis="basis-full md:basis-1/4">
            <div class="text-right">
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