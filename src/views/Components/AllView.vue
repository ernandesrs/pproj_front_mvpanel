<template>
    <TitleUi tag="h2" size="h2" title="Modal(Popup)" />
    <ModalUi @closeModal="showModal=false" :show="showModal" :size="modalSize"
        :alignment="alignment" :showFooterButtonClose="true">
        <template v-slot:header>
            <TitleUi title="Um título do modal" icon="user" size="h2" />
        </template>

        <template v-slot:content>
            <p>Um conteúdo qualquer para o modal, pode ser um lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dicta, similique fuga accusamus autem
                molestiae illum ea consequatur odio nemo dolorum dolorem. Ab corporis
                aperiam in alias a laborum aliquam officia.</p>
        </template>
    </ModalUi>

    <div class="py-4">
        <RowUi>
            <ColumnUi basis="basis-full">
                <div class="flex justify-center">
                    <SelectUi @selectChange="updateAlignment" label="Posição do modal"
                        :options="[{value: 'top', text: 'Topo'}, {value: 'center', text: 'Centro'}]"
                        value="center" />
                </div>
            </ColumnUi>
            <ColumnUi basis="basis-full md:basis-1/2">
                <div class="text-center">
                    <ButtonUi class="m-1" @click="openModal" variant="info"
                        text="Modal normal" />
                    <ButtonUi class="m-1" @click="openModal" variant="info"
                        text="Modal medio" name="md" />
                    <ButtonUi class="m-1" @click="openModal" variant="info"
                        text="Modal grande" name="lg" />
                    <ButtonUi class="m-1" @click="openModal" variant="info"
                        text="Modal completo" name="full" />
                </div>
            </ColumnUi>
        </RowUi>
    </div>
</template>

<script>

import RowUi from '@/components/Layout/Grid/RowUi.vue';
import ColumnUi from '@/components/Layout/Grid/ColumnUi.vue';
import TitleUi from '@/components/Ui/TitleUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';
import ModalUi from '@/components/Ui/Modal/ModalUi.vue';
import SelectUi from '@/components/Ui/Form/SelectUi.vue';

export default {
    name: 'AllView',
    components: { RowUi, ColumnUi, TitleUi, ButtonUi, ModalUi, SelectUi },

    data() {
        return {
            showModal: false,
            modalSize: null,
            alignment: 'center',
        };
    },

    methods: {
        openModal(e) {
            this.showModal = true;
            this.modalSize = e.target?.name ?? null;
        },
        updateAlignment(event) {
            this.alignment = event.input_value;
        }
    },
};

</script>