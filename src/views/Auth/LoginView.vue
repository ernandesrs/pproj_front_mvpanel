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
                    button-style="dark" rounded :disabled="disabled" />
            </div>
        </ColumnUi>
    </RowUi>
</template>

<script>

import InputUi from '@/components/Ui/Form/InputUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';
import RowUi from '@/components/Layout/Grid/RowUi.vue';
import ColumnUi from '@/components/Layout/Grid/ColumnUi.vue';
import AlertUi from '@/components/Ui/AlertUi.vue';

import axios from 'axios';
import messages from '@/utils/messages';

export default {
    name: "LoginView",
    components: { InputUi, ButtonUi, RowUi, ColumnUi, AlertUi },

    data() {
        return {
            email: null,
            password: null,
            remember_me: false,
            disabled: false,
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

            this.disabled = true;
            this.alertResetMessage();

            axios.post("http://127.0.0.1:8000/api/v1/auth/login", data).then((response) => {
                console.log(response.data);

                this.alertAddMessage("Autenticação efetuada com sucesso, você será redirecionado.", "success");
            }).catch((response) => {
                let errorCode = response?.response?.data?.error;

                this.alertAddMessage(errorCode ? messages[errorCode] : messages["DefaultMessage"], "danger");
            }).finally(() => {
                this.disabled = false;
            });
        },

        alertAddMessage(message, style) {
            this.alert.message = message;
            this.alert.color = style;
        },

        alertResetMessage() {
            this.alert.message = null;
            this.alert.color = null;
        }
    },

    watch: {
    },
};

</script>