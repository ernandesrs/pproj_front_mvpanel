<template>
    <form @submit.stop.prevent="submitForm">
        <RowUi basis="basis-full lg:basis-1/2">
            <LoadingUi v-if="loading" />
            <ColumnUi class="p-0" basis="basis-full">
                <AlertUi @alertClose="alert.message = null" class="mb-5"
                    :message="alert.message" :type="alert.color" fixed notimer />
            </ColumnUi>
            <ColumnUi>
                <InputUi ref="first_name" label="Nome:" :value="this.user.first_name"
                    name="first_name" :invalid="errors.first_name" />
            </ColumnUi>
            <ColumnUi>
                <InputUi ref="last_name" label="Sobrenome:" :value="this.user.last_name"
                    name="last_name" />
            </ColumnUi>
            <ColumnUi>
                <InputUi ref="username" label="Usuário:" :value="this.user.username"
                    name="username" />
            </ColumnUi>
            <ColumnUi>
                <SelectUi ref="gender" label="Gênero:" :value="this.user.gender ?? 0" :options="[
                    {value: 0, text: 'Não definido'},
                    {value: 1, text: 'Masculino'},
                    {value: 2, text: 'Feminino'},
                ]" name="gender" />
            </ColumnUi>
            <ColumnUi basis="basis-full">
                <InputUi ref="email" label="Email:" :value="this.user.email" type="email"
                    name="email" :disabled="this.user.email?true:false" />
            </ColumnUi>
            <ColumnUi v-if="this.user.id" basis="basis-full">
                <InputUi ref="photo" label="Foto:" type="file" name="photo" />
            </ColumnUi>
            <ColumnUi>
                <InputUi ref="password" label="Senha:" type="password" name="password" />
            </ColumnUi>
            <ColumnUi>
                <InputUi ref="password_confirmation" label="Confirmar senha:"
                    type="password" name="password_confirmation" />
            </ColumnUi>
            <ColumnUi basis="basis-full">
                <div class="text-center">
                    <ButtonUi :text="action=='create'?'Salvar usuário':'Atualizar dados'"
                        variant="dark" icon="checkLg" type="submit" rounded />
                </div>
            </ColumnUi>
        </RowUi>
    </form>
</template>

<script>

import RowUi from './Layout/Grid/RowUi.vue';
import LoadingUi from './Ui/LoadingUi.vue';
import ColumnUi from './Layout/Grid/ColumnUi.vue';
import InputUi from './Ui/Form/InputUi.vue';
import ButtonUi from './Ui/ButtonUi.vue';
import SelectUi from './Ui/Form/SelectUi.vue';
import axios from '@/services/axios';
import messages from '@/utils/messages';
import AlertUi from './Ui/AlertUi.vue';
import FormErrors from "@/utils/form-errors";

export default {
    name: 'UserForm',
    components: { RowUi, LoadingUi, ColumnUi, InputUi, ButtonUi, SelectUi, AlertUi },

    data() {
        return {
            loading: false,
            user: {},
            alert: {
                color: null,
                message: null,
            },
            errors: {
                first_name: false,
                last_name: false,
                username: false,
                email: false,
                password: false,
                password_confirmation: false,
            }
        };
    },

    props: {
        userData: { type: Object, default: null },
        urlAction: { type: String, default: null },
        successMessage: { type: String, default: "Sucesso!" },
        action: { type: String, default: 'create' }
    },

    watch: {
        userData: {
            immediate: true,
            handler(nv) {
                this.user = nv ?? {};
            },
            deep: true
        }
    },

    methods: {
        submitForm(e) {
            let data = new FormData(e.target);

            this.loading = true;
            FormErrors.clearErrors(this);

            axios.axios.post(this.urlAction, data).then((resp) => {
                this.user = resp.data.user;

                if (this.action == "create") {
                    this.$router.push({ name: 'panel.users.edit', params: { user_id: this.user.id } });
                    return;
                }

                this.alert.message = this.successMessage;
                this.alert.color = "info";
            }).catch((resp) => {
                let errors = resp?.response?.data?.errors;

                if (errors) {
                    // backend retornou erros ocorridos no formulário: listar os erros
                    let arrErrors = (Object.values(errors)).map(error => error[0]);

                    FormErrors.setErrors(this, errors);

                    this.alert.message = arrErrors.join(" ");
                    this.alert.color = "warning";
                } else {
                    // houve outros tipo de erros
                    let errorCode = resp?.response?.data?.error ?? "DefaultMessage";

                    this.alert.message = messages[errorCode] ?? messages["DefaultMessage"];
                    this.alert.color = "danger";
                }
            }).finally(() => {
                this.loading = false;
            });
        }
    }
}
</script>