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

import axios from '@/services/axios';
import cookie from '@/services/cookie';
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
            this.resetMessage();

            axios.axios.post("/auth/login", data).then((response) => {
                let token = `${response.data.access.token_type} ${response.data.access.access_token}`;

                cookie.setToken(token);
                this.$store.state.user = response.data.user;

                this.addMessage("Autenticação efetuada com sucesso, você será redirecionado.", "success");
                setTimeout(() => {
                    this.$router.push({ name: "panel.index" });
                }, 3000);
            }).catch((response) => {
                if (!response.response.data.errors) {
                    let errorCode = response?.response?.data?.error;
                    this.addMessage(errorCode ? messages[errorCode] : messages["DefaultMessage"], "danger");
                } else {
                    let errors = Object.values(response?.response?.data?.errors ?? {});
                    this.addMessage((errors.map((item) => item[0])).join(" "), "danger");
                }
            }).finally(() => {
                this.disabled = false;
            });
        },

        addMessage(message, style) {
            this.alert.message = message;
            this.alert.color = style;
        },

        resetMessage() {
            this.alert.message = null;
            this.alert.color = null;
        }
    },

    watch: {
    },
};

</script>