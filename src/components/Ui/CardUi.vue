<template>

    <div class="px-5 py-4 shadow-md hover:shadow-lg duration-200 rounded-md"
        :class="{'mt-5':(iconName || title)}">
        <div v-if="(iconName || title)" class="-mt-9 flex items-center">
            <div v-if="iconName"
                class="flex justify-center items-center w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded text-gray-200 text-xl">
                <IconUi :icon-name="iconName" />
            </div>
            <div class="font-semibold text-lg text-gray-500 ml-2">
                {{title}}
            </div>
        </div>

        <div :class="{'pt-3': title}">
            <slot />
        </div>
    </div>

</template>

<script>

import IconUi from './IconUi.vue';

export default {
    name: "CardUi",
    components: { IconUi },

    data() {
        return {};
    },

    props: {
        iconName: { type: String, default: null },
        title: { type: String, default: null },
    },
};

</script>