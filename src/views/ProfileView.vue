<template>

    <SectionUi>
        <RowUi>
            <ColumnUi basis="basis-full sm:basis-1/3">
                <div class="flex justify-center">
                    <div v-if="!this.$store.state.user_module.authUser.photo"
                        class="w-40 h-40 lg:w-64 lg:h-64 flex justify-center items-center bg-gray-100 border-4 rounded-full">
                        PHOTO
                    </div>
                    <img v-else class="w-40 h-40 lg:w-64 lg:h-64 border-4 rounded-full"
                        :src="this.$store.state.user_module.authUser.thumb_normal"
                        :alt="this.$store.state.user_module.authUser.full_name">
                </div>
                <div class="py-4">
                    <hr>
                </div>
                <div class="text-center">
                    <p class="mb-2">
                        <span class="text-sm px-4 bg-blue-900 text-gray-200 rounded">
                            <span>
                                {{this.$store.state.user_module.authUser.level == 9?
                                "Super":(this.$store.state.user_module.authUser.level ==
                                8?"Administrador":(this.$store.state.user_module.authUser.level ==
                                5?"Membro":"Usuário"))}}
                            </span>
                        </span>
                    </p>
                    <p>
                        Registrado em: {{ (new
                        Date(this.$store.state.user_module.authUser.created_at)).toLocaleDateString("pt-BR")
                        }}
                    </p>
                </div>
            </ColumnUi>
            <ColumnUi basis="basis-full sm:basis-2/3">
                <TitleUi title="Meu perfil" tag="h2" size="h3" />
                <form @submit.stop.prevent="submit">
                    <RowUi basis="basis-full lg:basis-1/2">
                        <LoadingUi v-if="loading" />
                        <ColumnUi class="p-0" basis="basis-full">
                            <AlertUi @alertClose="alert.message = null" class="mb-5"
                                :message="alert.message" :type="alert.color" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi ref="first_name" label="Nome:"
                                :value="this.$store.state.user_module.authUser.first_name"
                                name="first_name" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi ref="last_name" label="Sobrenome:"
                                :value="this.$store.state.user_module.authUser.last_name"
                                name="last_name" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi ref="username" label="Usuário:"
                                :value="this.$store.state.user_module.authUser.username"
                                name="username" />
                        </ColumnUi>
                        <ColumnUi>
                            <SelectUi ref="gender" label="Gênero:"
                                :value="this.$store.state.user_module.authUser.gender" :options="[
                                    {value: 0, text: 'Não definido'},
                                    {value: 1, text: 'Masculino'},
                                    {value: 2, text: 'Feminino'},
                                ]" name="gender" />
                        </ColumnUi>
                        <ColumnUi basis="basis-full">
                            <InputUi ref="email" label="Email:"
                                :value="this.$store.state.user_module.authUser.email" type="email"
                                name="email" :disabled="true" />
                        </ColumnUi>
                        <ColumnUi basis="basis-full">
                            <InputUi ref="photo" label="Foto:" type="file" name="photo" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi ref="password" label="Senha:" type="password"
                                name="password" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi ref="password_confirmation" label="Confirmar senha:"
                                type="password" name="password_confirmation" />
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
    </SectionUi>

</template>

<script>

import SectionUi from "@/components/Layout/SectionUi.vue";
import RowUi from "@/components/Layout/Grid/RowUi.vue";
import ColumnUi from "@/components/Layout/Grid/ColumnUi.vue";
import InputUi from "@/components/Ui/Form/InputUi.vue";
import SelectUi from "@/components/Ui/Form/SelectUi.vue";
import ButtonUi from "@/components/Ui/ButtonUi.vue";
import axios from "@/services/axios";
import AlertUi from "@/components/Ui/AlertUi.vue";
import messages from "@/utils/messages";
import LoadingUi from "@/components/Ui/LoadingUi.vue";
import TitleUi from "@/components/Ui/TitleUi.vue";
import FormErrors from "@/utils/form-errors";

export default {
    name: "ProfileView",
    components: { SectionUi, RowUi, ColumnUi, InputUi, SelectUi, ButtonUi, AlertUi, LoadingUi, TitleUi },

    data() {
        return {
            loading: false,
            alert: {
                message: null,
                color: null,
            }
        };
    },

    methods: {
        submit(evt) {
            let data = new FormData(evt.target);

            this.loading = true;
            this.resetMessage();
            FormErrors.clearErrors(this);

            axios.axios.post("/me", data).then((response) => {
                this.$store.commit("user_module/storeAuthUser", response.data.data);
                this.addMessage("Seus dados foram atualizados com sucesso!", "success");
            }).catch((response) => {
                let errors = response?.response?.data?.errors;

                if (errors) {
                    let arrErrors = Object.values(response?.response?.data?.errors ?? {});

                    FormErrors.setErrors(this, errors);
                    this.addMessage((arrErrors.map((item) => item[0])).join(" "), "danger");
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
};

</script>