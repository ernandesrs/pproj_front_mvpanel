<template>
    <RowUi basis="basis-full">
        <LoadingUi v-if="loading" />

        <ColumnUi class="p-0">
            <AlertUi @alertClose="alert.message = null" class="mb-5"
                :message="alert.message" :type="alert.color" fixed notimer />
        </ColumnUi>

        <ColumnUi>
            <InputUi ref="email" @inputChange="setChanges" label="Email" type="email"
                name="email" :value="email" />
        </ColumnUi>

        <ColumnUi>
            <InputUi ref="password" @inputChange="setChanges" label="Senha"
                type="password" name="password" :value="password" />
        </ColumnUi>

        <ColumnUi>
            <div class="pt-2 flex justify-center">
                <ButtonUi @click="submit" text="Login" icon="login" variant="dark"
                    rounded />
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
import LoadingUi from '@/components/Ui/LoadingUi.vue';
import formErrors from '@/utils/form-errors';

export default {
    name: "LoginView",
    components: { InputUi, ButtonUi, RowUi, ColumnUi, AlertUi, LoadingUi },

    data() {
        return {
            email: null,
            password: null,
            remember_me: false,
            loading: false,
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

            this.loading = true;
            this.resetMessage();
            formErrors.clearErrors(this);

            axios.axios.post("/auth/login", data).then((response) => {
                let token = `${response.data.access.token_type} ${response.data.access.access_token}`;

                cookie.setToken(token);
                this.$store.commit("user_module/storeAuthUser", response.data.user);

                this.$router.push({ name: "panel.index" });
            }).catch((response) => {
                let errors = response?.response?.data?.errors;

                if (errors) {
                    let arrErrors = Object.values(errors);
                    this.addMessage((arrErrors.map((item) => item[0])).join(" "), "danger");
                    formErrors.setErrors(this, errors);
                } else {
                    let errorCode = response?.response?.data?.error;
                    this.addMessage(errorCode ? messages[errorCode] : messages["DefaultMessage"], "danger");
                }
            }).finally(() => {
                this.loading = false;
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