<template>
    <h1 class="pb-2 font-bold text-2xl">BOTÕES</h1>
    <div class="py-4">
        <RowUi basis="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <ColumnUi basis="basis-full">
                <div class="flex justify-center">
                    <SelectUi @selectChange="variantChange"
                        :options="[{value: 'default', text: 'Padrão'}, {value: 'success', text: 'Sucesso'}, {value: 'danger', text: 'Perigo'}, {value: 'warning', text: 'Alerta'}, {value: 'info', text: 'Informativo'}]"
                        value="default" />
                </div>
            </ColumnUi>
            <ColumnUi>
                <div class="text-center py-2">
                    <ButtonUi type="button" icon="pieChart" :variant="buttonVariant" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="With icon" icon="pieChart"
                        :variant="buttonVariant" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Without icon"
                        :variant="buttonVariant" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Outlined" :variant="buttonVariant"
                        outlined />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Rounded" :variant="buttonVariant"
                        rounded />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Display block" :variant="buttonVariant"
                        block />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Large button" :variant="buttonVariant"
                        size="lg" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Small button" :variant="buttonVariant"
                        size="sm" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Router Link" :variant="buttonVariant"
                        :to="{name: 'panel.components.buttons'}" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Html Link" :variant="buttonVariant"
                        href="https://www.google.com" target="_blank" title="HTML Link width title" outlined link />
                </div>
            </ColumnUi>
        </RowUi>
    </div>

</template>

<script>

import RowUi from '@/components/Layout/Grid/RowUi.vue';
import ColumnUi from '@/components/Layout/Grid/ColumnUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';
import SelectUi from '@/components/Ui/Form/SelectUi.vue';

export default {
    name: "ButtonsView",
    components: { RowUi, ColumnUi, ButtonUi, SelectUi },

    data() {
        return {
            buttonVariant: 'default'
        };
    },

    methods: {
        method() {
            alert("O botão foi clicado!");
        },
        variantChange(ev) {
            this.buttonVariant = ev.input_value;
        }
    },
};

</script>