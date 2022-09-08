<template>
    <RowUi basis="basis-full sm:basis-1/2">
        <ColumnUi basis="basis-full">
            <AlertUi @alertClose="alert.message = null" class="mb-5"
                :message="alert.message" :type="alert.color" fixed notimer />
        </ColumnUi>
        <ColumnUi>
            <InputUi @inputChange="setChanges" label="Nome:" name="first_name" type="text"
                :value="first_name" />
        </ColumnUi>

        <ColumnUi>
            <InputUi @inputChange="setChanges" label="Sobrenome:" name="last_name"
                type="text" :value="last_name" />
        </ColumnUi>

        <ColumnUi>
            <InputUi @inputChange="setChanges" label="Usuário:" name="username"
                type="text" :value="username" />
        </ColumnUi>

        <ColumnUi>
            <SelectUi @selectChange="setChanges" label="Gênero:" name="gender" :value="0"
                :options="[
                {value:0, text:'Selecione'},
                {value:1, text:'Masculino'},
                {value:2, text:'Feminino'}
                ]" />
        </ColumnUi>

        <ColumnUi basis="basis-full">
            <InputUi @inputChange="setChanges" label="Email:" name="email" type="email"
                :value="email" />
        </ColumnUi>

        <ColumnUi>
            <InputUi @inputChange="setChanges" label="Senha:" name="password"
                type="password" :value="password" />
        </ColumnUi>

        <ColumnUi>
            <InputUi @inputChange="setChanges" label="Confirmar senha:"
                name="password_confirmation" type="password"
                :value="password_confirmation" />
        </ColumnUi>

        <ColumnUi basis="basis-full">
            <div class="flex justify-center pt-2">
                <ButtonUi @click="submit" text="Cadastrar" icon-name="checkLg"
                    button-style="dark" rounded />
            </div>
        </ColumnUi>
    </RowUi>
</template>

<script>

import InputUi from '@/components/Ui/Form/InputUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';
import RowUi from '@/components/Ui/Grid/RowUi.vue';
import ColumnUi from '@/components/Ui/Grid/ColumnUi.vue';
import SelectUi from '@/components/Ui/Form/SelectUi.vue';
import AlertUi from '@/components/Ui/AlertUi.vue';

export default {
    name: "RegisterView",
    components: { InputUi, ButtonUi, RowUi, ColumnUi, SelectUi, AlertUi },

    data() {
        return {
            first_name: null,
            last_name: null,
            username: null,
            gender: null,
            email: null,
            password: null,
            password_confirmation: null,
            alert: {
                message: null,
                color: null,
            }
        };
    },

    methods: {
        setChanges(data) {
            if (data.input_name !== '')
                this[data.input_name] = data.input_value;
        },

        submit() {
            let data = {
                first_name: this.first_name,
                last_name: this.last_name,
                username: this.username,
                gender: this.gender,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            };

            this.alert.message = "Submissão do formulário de cadastro ainda não foi implementado!";
            this.alert.color = 'warning';

            console.log(data);
        }
    },
};

</script>