<template>
    <div
        class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-200 opacity-10 absolute z-50 left-0 top-0">
        <span class="animate-spin">
            <IconUi icon-name="spinner" />
        </span>
    </div>
</template>

<script>

import IconUi from './IconUi.vue';
export default {
    name: "LoadingUi",
    components: { IconUi }
};

</script>