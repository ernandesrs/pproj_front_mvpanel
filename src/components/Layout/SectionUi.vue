<template>
    <section class="mb-5">
        <div v-if="title" class="border-b-1 mb-3">
            <h1 class="flex items-center text-2xl font-semibold">
                <IconElementUi v-if="iconName" :icon-name="iconName" />
                <span :class="{'ml-3': iconName}">
                    {{ title }}
                </span>
            </h1>
        </div>

        <div class="">
            <slot />
        </div>
    </section>
</template>

<script>
import IconElementUi from '../Ui/IconElementUi.vue';
export default {
    name: "SectionUi",
    props: {
        iconName: { type: String, default: null },
        title: { type: String, default: null },
    },
    components: { IconElementUi }
};
</script>