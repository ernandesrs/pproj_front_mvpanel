<template>
    <h1 class="pb-2 font-bold text-2xl">CARDS</h1>
    <div class="py-4">
        <h2 class="pb-2 font-semibold">Cards simples</h2>
        <CardGroupUi basis="basis-full sm:basis-1/2 lg:basis-1/3">
            <CardItemUi>
                <p>OPA 1</p>
            </CardItemUi>

            <CardItemUi>
                <p>OPA <span class="text-red-500">2</span></p>
            </CardItemUi>

            <CardItemUi>
                <p>OPA <span class="text-green-500 font-bold">3</span></p>
            </CardItemUi>
        </CardGroupUi>
    </div>

    <div class="py-4">
        <h2 class="pb-2 font-semibold">Cards com ícone e título</h2>
        <CardGroupUi basis="basis-full sm:basis-1/2 lg:basis-1/3">
            <CardItemUi iconName="pieChart" title="Título #1">
                <div class="flex flex-wrap pt-3">
                    <ButtonUi button-style="dark" text="Botão #1" icon-name="app" size="sm" rounded />
                    <span class="mx-2"></span>
                    <ButtonUi button-style="danger" text="Botão #2" icon-name="app" size="sm" outlined rounded />
                </div>
            </CardItemUi>

            <CardItemUi iconName="layoutWtf" title="Título #2">
                <div class="flex flex-wrap pt-3">
                    <a class="mr-2" href="#">Lorem ipsum</a>
                    <a class="mr-2" href="#">Dolor lorem</a>
                </div>
            </CardItemUi>

            <CardItemUi iconName="app" title="Título #3">
                <div class="flex flex-wrap pt-3">
                    <a class="mr-2" href="#">Lorem ipsum</a>
                    <a class="mr-2" href="#">Dolor lorem</a>
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
    name: "CardsView",
    components: { CardGroupUi, CardItemUi, ButtonUi }
};

</script>