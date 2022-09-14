<template>

    <h1 class="pb-2 font-bold text-2xl">ALERTAS</h1>
    <div class="py-4">
        <RowUi basis="basis-full md:basis-1/2">
            <ColumnUi>
                <AlertUi v-if="alert.fixedAlert" :type="alert.colorStyle"
                    :message="alert.message" @alertShow="alertShowed"
                    @alertClose="alertClosed" fixed notimer />

                <AlertUi v-else :type="alert.colorStyle" :message="alert.message"
                    @alertShow="alertShowed" @alertClose="alertClosed" />
            </ColumnUi>
        </RowUi>

        <div class="py-5">
            <RowUi>
                <ColumnUi basis="basis-full sm:basis-1/2 lg:basis-1/4 mb-4 px-10 py-5">
                    <SelectUi @selectChange="optionChanged" :options="[
                        {value: 'default', text: 'Padrão'},
                        {value: 'success', text: 'Sucesso'},
                        {value: 'danger', text: 'Perigo'},
                        {value: 'warning', text: 'Alerta'},
                        {value: 'info', text: 'Informativo'},
                    ]" value="default" name="colorStyle" />
                </ColumnUi>

                <ColumnUi basis="basis-full sm:basis-1/2 lg:basis-1/4 mb-4 px-10 py-5">
                    <SelectUi @selectChange="optionChanged" :options="[
                        {value: 'float', text: 'Flutuante'},
                        {value: 'fixed', text: 'Fixo'},
                    ]" value="float" name="positionStyle" />
                </ColumnUi>

                <ColumnUi basis="basis-full text-center">
                    <ButtonUi @click="exampleDispatchAlert"
                        text="Disparar o alerta de teste" :variant="alert.colorStyle"
                        id="default" />
                </ColumnUi>
            </RowUi>
        </div>
    </div>

</template>

<script>

import RowUi from '@/components/Layout/Grid/RowUi.vue';
import ColumnUi from '@/components/Layout/Grid/ColumnUi.vue';
import AlertUi from '@/components/Ui/AlertUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';
import SelectUi from '@/components/Ui/Form/SelectUi.vue';

export default {
    name: "AlertsView",
    components: { RowUi, ColumnUi, AlertUi, ButtonUi, SelectUi },

    data() {
        return {
            alert: {
                message: null,
                colorStyle: 'default',
                msg: 'This is a message example for some user action on panel.',
                fixedAlert: false,
            },
        };
    },

    methods: {
        // show alert
        exampleDispatchAlert() {
            if (this.alert.message) return;
            this.alert.message = this.alert.msg;
        },

        // alert configuration
        optionChanged(data) {
            if (data.input_name == 'positionStyle') {
                this.alert.fixedAlert = data.input_value === 'fixed' ? true : false;
            }
            if (data.input_name == 'colorStyle') {
                this.alert.colorStyle = data.input_value;
            }
        },

        // get alert show event
        alertShowed() {
            console.log("alert has emit 'alertShow' event");
        },

        // get alert close event
        alertClosed() {
            this.alert.message = null;
            console.log("alert has emit 'alertClose' event");
        },
    },
};

</script>