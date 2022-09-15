<template>
    <section class="mb-5">
        <div v-if="title" class="border-b-1 mb-3">
            <TitleUi :icon="iconName" title="Uma seção muito top" size="h2" />
        </div>

        <div class="">
            <slot />
        </div>
    </section>
</template>

<script>

import TitleUi from '../Ui/TitleUi.vue';

export default {
    name: "SectionUi",
    components: { TitleUi },

    props: {
        iconName: { type: String, default: null },
        title: { type: String, default: null },
    },
};
</script>