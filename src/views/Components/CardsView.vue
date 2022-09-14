<template>
    <h1 class="pb-2 font-bold text-2xl">CARDS</h1>
    <div class="py-4">
        <h2 class="pb-2 font-semibold">Cards simples</h2>
        <RowUi basis="basis-full sm:basis-1/2 lg:basis-1/3">
            <ColumnUi>
                <CardUi>
                    <p>OPA 1</p>
                </CardUi>
            </ColumnUi>

            <ColumnUi>
                <CardUi>
                    <p>OPA <span class="text-red-500">2</span></p>
                </CardUi>
            </ColumnUi>

            <ColumnUi>
                <CardUi>
                    <p>OPA <span class="text-green-500 font-bold">3</span></p>
                </CardUi>
            </ColumnUi>
        </RowUi>
    </div>

    <div class="py-4">
        <h2 class="pb-2 font-semibold">Cards com ícone e título</h2>
        <RowUi basis="basis-full sm:basis-1/2 lg:basis-1/3">
            <ColumnUi>
                <CardUi icon-name="pieChart" title="Título #1">
                    <div class="flex flex-wrap pt-3">
                        <ButtonUi variant="dark" text="Botão #1" icon="app" size="sm"
                            rounded />
                        <span class="mx-2"></span>
                        <ButtonUi variant="danger" text="Botão #2" icon="app" size="sm"
                            outlined rounded />
                    </div>
                </CardUi>
            </ColumnUi>

            <ColumnUi>
                <CardUi icon-name="layoutWtf" title="Título #2">
                    <div class="flex flex-wrap pt-3">
                        <a class="mr-2" href="#">Lorem ipsum</a>
                        <a class="mr-2" href="#">Dolor lorem</a>
                    </div>
                </CardUi>
            </ColumnUi>

            <ColumnUi>
                <CardUi icon-name="app" title="Título #3">
                    <div class="flex flex-wrap pt-3">
                        <a class="mr-2" href="#">Lorem ipsum</a>
                        <a class="mr-2" href="#">Dolor lorem</a>
                    </div>
                </CardUi>
            </ColumnUi>

        </RowUi>
    </div>
</template>

<script>

import RowUi from '@/components/Layout/Grid/RowUi.vue';
import ColumnUi from '@/components/Layout/Grid/ColumnUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';
import CardUi from '@/components/Ui/CardUi.vue';

export default {
    name: "CardsView",
    components: { RowUi, ColumnUi, ButtonUi, CardUi }
};

</script>