<template>
    <h1 class="pb-2 font-bold text-2xl">ALERTAS</h1>
    <div class="py-4">
        <RowUi basis="basis-full md:basis-1/2">
            <ColumnUi>
            </ColumnUi>
        </RowUi>
    </div>

</template>

<script>

import RowUi from '@/components/Ui/Grid/RowUi.vue';
import ColumnUi from '@/components/Ui/Grid/ColumnUi.vue';

export default {
    name: "AlertsView",
    components: { RowUi, ColumnUi },

    methods: {
        method() {
            alert("O botão foi clicado!");
        },
    },
};

</script>