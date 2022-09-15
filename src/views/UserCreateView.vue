<template>
    <div class="flex items-center">
        <TitleUi title="Novo usuário" icon="userPlus" tag="h2" size="h3" />
        <div class="ml-2">
            <ButtonUi :to="{name: 'panel.users.index'}" text="Voltar" icon="arrowLeft"
                variant="info" rounded />
        </div>
    </div>
    <div class="border my-5 py-4 px-5">
        <RowUi>
            <ColumnUi basis="basis-full sm:basis-2/3">
                <UserForm :url-action="urlAction" :success-message="successMessage"
                    :user-data="user" />
            </ColumnUi>
        </RowUi>
    </div>
</template>

<script>

import ButtonUi from '@/components/Ui/ButtonUi.vue';
import RowUi from '@/components/Layout/Grid/RowUi.vue';
import ColumnUi from '@/components/Layout/Grid/ColumnUi.vue';
import UserForm from '@/components/UserForm.vue';
import TitleUi from '@/components/Ui/TitleUi.vue';

export default {
    name: "UserCreateView",
    components: { ButtonUi, RowUi, ColumnUi, UserForm, TitleUi },

    methods: {
    },

    computed: {
        urlAction() {
            return `/admin/user/store`;
        },

        successMessage() {
            return `Um novo usuário foi criado com sucesso! Um email de verificação foi enviado para o email informado.`;
        },
    },
};

</script>