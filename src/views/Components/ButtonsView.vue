<template>
    <h1 class="pb-2 font-bold text-2xl">BOTÕES</h1>
    <div class="py-4">
        <CardGroupUi basis="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <CardItemUi>
                <h2 class="mb-2 pb-2 border-b">Padrão</h2>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="With icon" icon-name="pieChart" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Without icon" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Border" border />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Outlined" outlined />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Rounded" rounded />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Display block" block />
                </div>
            </CardItemUi>

            <CardItemUi>
                <h2 class="mb-2 pb-2 border-b">Sucesso</h2>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="With icon" button-style="success"
                        icon-name="pieChart" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Without icon" button-style="success" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Border" button-style="success" border
                        rounded />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Outlined" button-style="success"
                        outlined />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Rounded" button-style="success"
                        rounded />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Display block" button-style="success"
                        block />
                </div>
            </CardItemUi>

            <CardItemUi>
                <h2 class="mb-2 pb-2 border-b">Perigo</h2>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="With icon" button-style="danger"
                        icon-name="pieChart" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Without icon" button-style="danger" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Border" button-style="danger" border
                        rounded />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Outlined" button-style="danger"
                        outlined />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Rounded" button-style="danger"
                        rounded />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Display block" button-style="danger"
                        block />
                </div>
            </CardItemUi>

            <CardItemUi>
                <h2 class="mb-2 pb-2 border-b">Alerta</h2>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="With icon" button-style="warning"
                        icon-name="pieChart" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Without icon" button-style="warning" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Border" button-style="warning" border
                        rounded />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Outlined" button-style="warning"
                        outlined />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Rounded" button-style="warning"
                        rounded />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Display block" button-style="warning"
                        block />
                </div>
            </CardItemUi>

            <CardItemUi>
                <h2 class="mb-2 pb-2 border-b">Informação</h2>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="With icon" button-style="info"
                        icon-name="pieChart" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Without icon" button-style="info" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Border" button-style="info" border
                        rounded />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Outlined" button-style="info"
                        outlined />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Rounded" button-style="info" rounded />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Display block" button-style="info"
                        block />
                </div>
            </CardItemUi>

            <CardItemUi>
                <h2 class="mb-2 pb-2 border-b">Escuro</h2>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="With icon" button-style="dark"
                        icon-name="pieChart" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Without icon" button-style="dark" />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Border" button-style="dark" border
                        rounded />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Outlined" button-style="dark"
                        outlined />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Rounded" button-style="dark" rounded />
                </div>
                <div class="text-center py-2">
                    <ButtonUi type="button" text="Display block" button-style="dark"
                        block />
                </div>
            </CardItemUi>

            <CardItemUi>
                <h2 class="mb-2 pb-2 border-b">Evento</h2>
                <div class="text-center py-2">
                    <ButtonUi @buttonClicked="method" type="button" text="Click event"
                        button-style="dark" icon-name="app" />
                </div>
            </CardItemUi>
        </CardGroupUi>
    </div>

</template>

<script>

import CardGroupUi from '@/components/Ui/Card/CardGroupUi.vue';
import CardItemUi from '@/components/Ui/Card/CardItemUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';

export default {
    name: "ButtonsView",
    components: { CardGroupUi, CardItemUi, ButtonUi },

    methods: {
        method() {
            alert("O botão foi clicado!");
        },
    },
};

</script>