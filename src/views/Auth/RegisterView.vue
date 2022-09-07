<template>
    <RowUi basis="basis-full sm:basis-1/2">
        <ColumnUi>
            <InputUi label="Nome:" name="fist_name" type="text" :value="first_name" />
        </ColumnUi>

        <ColumnUi>
            <InputUi label="Sobrenome:" name="last_name" type="text" :value="last_name" />
        </ColumnUi>

        <ColumnUi>
            <InputUi label="Usuário:" name="username" type="text" :value="username" />
        </ColumnUi>

        <ColumnUi>
            <InputUi label="Gênero:" name="gender" type="text" :value="gender" />
        </ColumnUi>

        <ColumnUi basis="basis-full">
            <InputUi label="Email:" name="email" type="text" :value="email" />
        </ColumnUi>

        <ColumnUi>
            <InputUi label="Senha:" name="password" type="text" :value="password" />
        </ColumnUi>

        <ColumnUi>
            <InputUi label="Confirmar senha:" name="password_confirmation" type="text" :value="password_confirmation" />
        </ColumnUi>

        <ColumnUi basis="basis-full">
            <div class="flex justify-center pt-2">
                <ButtonUi text="Cadastrar" icon-name="checkLg" button-style="dark" rounded />
            </div>
        </ColumnUi>
    </RowUi>
</template>

<script>
import InputUi from '@/components/Ui/Form/InputUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';
import RowUi from '@/components/Ui/Grid/RowUi.vue';
import ColumnUi from '@/components/Ui/Grid/ColumnUi.vue';

export default {
    name: "RegisterView",
    components: { InputUi, ButtonUi, RowUi, ColumnUi },

    data() {
        return {
            first_name: null,
            last_name: null,
            username: null,
            gender: null,
            email: null,
            password: null,
            password_confirmation: null,
        };
    },
};

</script>