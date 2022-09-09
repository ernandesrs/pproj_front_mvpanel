<template>
    <RowUi basis="basis-full">
        <ColumnUi class="p-0">
            <AlertUi @alertClose="alert.message = null" class="mb-5"
                :message="alert.message" :type="alert.color" fixed notimer />
        </ColumnUi>

        <ColumnUi>
            <InputUi @inputChange="setChanges" label="Email" type="email" name="email"
                :value="email" />
        </ColumnUi>

        <ColumnUi>
            <InputUi @inputChange="setChanges" label="Senha" type="password"
                name="password" :value="password" />
        </ColumnUi>

        <ColumnUi>
            <div class="pt-2 flex justify-between">
                <InputUi @inputChange="setChanges" label="Lembre-se de mim"
                    type="checkbox" name="remember_me" :value="remember_me" />

                <ButtonUi @click="submit" text="Login" icon-name="login"
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
import AlertUi from '@/components/Ui/AlertUi.vue';

export default {
    name: "LoginView",
    components: { InputUi, ButtonUi, RowUi, ColumnUi, AlertUi },

    data() {
        return {
            email: null,
            password: null,
            remember_me: false,
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
                email: this.email,
                password: this.password,
                remember_me: this.remember_me,
            };

            this.alert.message = "Submissão de formulário ainda não foi implementado!";
            this.alert.color = 'warning';

            console.log(data);
        }
    },

    watch: {
    },
};

</script>