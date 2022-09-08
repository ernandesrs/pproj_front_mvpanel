<template>
    <h1 class="pb-2 font-bold text-2xl">ALERTAS</h1>
    <div class="py-4">
        <RowUi basis="basis-full md:basis-1/2">
            <ColumnUi>
                <AlertUi v-show="showAlert" type="success"
                    text="This is a success message for some user action." />
                
                <div class="pt-3 text-center">
                    <ButtonUi @click="showAlertF" text="Mostrar mensagem" button-style="info" />
                </div>
            </ColumnUi>
        </RowUi>
    </div>

</template>

<script>

import RowUi from '@/components/Ui/Grid/RowUi.vue';
import ColumnUi from '@/components/Ui/Grid/ColumnUi.vue';
import AlertUi from '@/components/Ui/AlertUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';

export default {
    name: "AlertsView",
    components: { RowUi, ColumnUi, AlertUi, ButtonUi },

    data() {
        return {
            showAlert: false
        };
    },

    methods: {
        method() {
            alert("O botão foi clicado!");
        },

        showAlertF() {
            this.showAlert = !this.showAlert;
        }
    },
};

</script>