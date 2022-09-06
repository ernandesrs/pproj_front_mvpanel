<template>
    <div :class="basisClass" class="cursor-default pt-3">
        <div class="py-4 px-6 mx-4 my-2 shadow-lg rounded bg-white">
            <!-- card header -->
            <div v-if="iconName && title" class="flex items-center -mt-7">
                <div
                    class=" w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 text-gray-200 flex justify-center items-center rounded-sm">
                    <IconElementUi :icon-name="iconName" size="1.6" />
                </div>
                <div class="ml-4 text-2xl font-semibold text-gray-500">
                    {{ title }}
                </div>
            </div>
            <!-- /card header -->

            <slot />
        </div>
    </div>
</template>

<script>

import IconElementUi from '../IconElementUi.vue';

export default {
    name: "CardItemUi",
    props: {
        iconName: {
            type: String,
            default: null,
        },
        title: {
            type: String,
            default: 'Card title'
        },
    },
    computed: {
        basisClass() {
            return this.$parent.$props.basis;
        },
    },
    components: { IconElementUi }
};

</script>