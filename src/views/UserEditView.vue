<template>
    <div class="flex items-center">
        <h1 class="pb-2 font-bold text-2xl">Editar usuário</h1>
        <div class="ml-2">
            <ButtonUi :to="{name: 'panel.users.index'}" text="Voltar" icon="arrowLeft"
                variant="info" rounded outlined />
        </div>
    </div>
    <div class="border my-5 py-4 px-5">
        <RowUi>
            <ColumnUi basis="basis-full sm:basis-1/3">
                <div class="flex justify-center">
                    <div v-if="!this.user.photo"
                        class="w-40 h-40 lg:w-64 lg:h-64 flex justify-center items-center bg-gray-100 border-4 rounded-full">
                        PHOTO
                    </div>
                    <img v-else class="w-40 h-40 lg:w-64 lg:h-64 border-4 rounded-full"
                        :src="this.user.thumb_normal" :alt="this.user.full_name">
                </div>
                <div class="py-4">
                    <hr>
                </div>
                <div class="text-center">
                    <p class="mb-2">
                        <span class="text-sm px-4 bg-blue-900 text-gray-200 rounded">
                            <span>
                                {{this.user.level == 9?
                                "Super":(this.user.level ==
                                8?"Administrador":(this.user.level ==
                                5?"Membro":"Usuário"))}}
                            </span>
                        </span>
                    </p>
                    <p>
                        Registrado em: {{ (new
                        Date(this.user.created_at)).toLocaleDateString("pt-BR")
                        }}
                    </p>
                </div>
            </ColumnUi>

            <ColumnUi basis="basis-full sm:basis-2/3">
                <form @submit.stop.prevent="udpateUser">
                    <RowUi basis="basis-full lg:basis-1/2">
                        <LoadingUi v-if="loading" />
                        <ColumnUi class="p-0" basis="basis-full">
                            <AlertUi @alertClose="alert.message = null" class="mb-5"
                                :message="alert.message" :type="alert.color" fixed
                                notimer />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi label="Nome:" :value="this.user.first_name"
                                name="first_name" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi label="Sobrenome:" :value="this.user.last_name"
                                name="last_name" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi label="Usuário:" :value="this.user.username"
                                name="username" />
                        </ColumnUi>
                        <ColumnUi>
                            <SelectUi label="Gênero:" :value="this.user.gender" :options="[
                                {value: 0, text: 'Não definido'},
                                {value: 1, text: 'Masculino'},
                                {value: 2, text: 'Feminino'},
                            ]" name="gender" />
                        </ColumnUi>
                        <ColumnUi basis="basis-full">
                            <InputUi label="Email:" :value="this.user.email" type="email"
                                name="email" :disabled="true" />
                        </ColumnUi>
                        <ColumnUi basis="basis-full">
                            <InputUi label="Foto:" type="file" name="photo" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi label="Senha:" type="password" name="password" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi label="Confirmar senha:" type="password"
                                name="password_confirmation" />
                        </ColumnUi>
                        <ColumnUi basis="basis-full">
                            <div class="text-center">
                                <ButtonUi text="Atualizar dados" variant="dark"
                                    icon="checkLg" type="submit" rounded />
                            </div>
                        </ColumnUi>
                    </RowUi>
                </form>
            </ColumnUi>
        </RowUi>
    </div>
</template>

<script>

import ButtonUi from '@/components/Ui/ButtonUi.vue';
import axios from '@/services/axios';
import RowUi from '@/components/Layout/Grid/RowUi.vue';
import LoadingUi from '@/components/Ui/LoadingUi.vue';
import ColumnUi from '@/components/Layout/Grid/ColumnUi.vue';
import AlertUi from '@/components/Ui/AlertUi.vue';
import InputUi from '@/components/Ui/Form/InputUi.vue';
import SelectUi from '@/components/Ui/Form/SelectUi.vue';
import messages from '@/utils/messages';

export default {
    name: "UserEditView",
    components: { ButtonUi, RowUi, LoadingUi, ColumnUi, AlertUi, InputUi, SelectUi },

    data() {
        return {
            loading: true,
            user: {},
            alert: {
                color: null,
                message: null,
            },
        };
    },

    created() {
        this.getUser();
    },

    methods: {
        getUser() {
            let userId = this.$route.params?.user_id;

            axios.axios.get("/admin/user/show/" + userId).then((resp) => {
                this.user = resp.data.user;
            }).catch((resp) => {
                let errorCode = resp?.response?.data?.error ?? "DefaultMessage";

                this.alert.message = messages[errorCode] ?? messages["DefaultMessage"];
                this.alert.color = "danger";
            }).finally(() => {
                this.loading = false;
            });
        },

        udpateUser(e) {
            let data = new FormData(e.target);

            this.loading = true;

            axios.axios.post("/admin/user/update/" + this.user.id, data).then((resp) => {
                this.user = resp.data.user;

                this.alert.message = `Os dados de ${this.user.full_name} foram atualizados com sucesso!`;
                this.alert.color = "info";
            }).catch((resp) => {
                let errors = resp?.response?.data?.errors;

                if (errors) {
                    // backend retornou erros ocorridos no formulário: listar os erros
                    let arrErrors = (Object.values(errors)).map(error => error[0]);

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
    },
};

</script>