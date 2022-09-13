<template>

    <SectionUi>
        <RowUi>
            <ColumnUi basis="basis-full sm:basis-1/3">
                <div class="flex justify-center">
                    <div v-if="!this.$store.state.user.photo"
                        class="w-40 h-40 lg:w-64 lg:h-64 flex justify-center items-center bg-gray-100 border-4 rounded-full">
                        PHOTO
                    </div>
                    <img v-else class="w-40 h-40 lg:w-64 lg:h-64 border-4 rounded-full"
                        :src="this.$store.state.user.thumb_normal"
                        :alt="this.$store.state.user.full_name">
                </div>
                <div class="py-4">
                    <hr>
                </div>
                <div class="text-center">
                    <p class="mb-2">
                        <span class="text-sm px-4 bg-blue-900 text-gray-200 rounded">
                            <span>
                                {{this.$store.state.user.level == 9?
                                "Super":(this.$store.state.user.level ==
                                8?"Administrador":(this.$store.state.user.level ==
                                5?"Membro":"Usuário"))}}
                            </span>
                        </span>
                    </p>
                    <p>
                        Registrado em: {{ (new
                        Date(this.$store.state.user.created_at)).toLocaleDateString("pt-BR")
                        }}
                    </p>
                </div>
            </ColumnUi>
            <ColumnUi basis="basis-full sm:basis-2/3">
                <h2 class="font-semibold text-lg mb-4">Meu perfil</h2>
                <form @submit.stop.prevent="submit">
                    <RowUi basis="basis-full lg:basis-1/2">
                        <LoadingUi v-if="loading" />
                        <ColumnUi class="p-0" basis="basis-full">
                            <AlertUi @alertClose="alert.message = null" class="mb-5"
                                :message="alert.message" :type="alert.color" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi label="Nome:"
                                :value="this.$store.state.user.first_name"
                                name="first_name" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi label="Sobrenome:"
                                :value="this.$store.state.user.last_name"
                                name="last_name" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi label="Usuário:"
                                :value="this.$store.state.user.username"
                                name="username" />
                        </ColumnUi>
                        <ColumnUi>
                            <SelectUi label="Gênero:"
                                :value="this.$store.state.user.gender" :options="[
                                    {value: 0, text: 'Não definido'},
                                    {value: 1, text: 'Masculino'},
                                    {value: 2, text: 'Feminino'},
                                ]" name="gender" />
                        </ColumnUi>
                        <ColumnUi basis="basis-full">
                            <InputUi label="Email:" :value="this.$store.state.user.email"
                                type="email" name="email" :disabled="true" />
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
                                <ButtonUi text="Atualizar dados" button-style="dark"
                                    icon-name="checkLg" type="submit" rounded />
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

export default {
    name: "ProfileView",
    components: { SectionUi, RowUi, ColumnUi, InputUi, SelectUi, ButtonUi, AlertUi, LoadingUi },

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

            axios.axios.post("/me", data).then((response) => {
                this.$store.state.user = response.data.data;
                this.addMessage("Seus dados foram atualizados com sucesso!", "success");
            }).catch((response) => {
                if (!response.response.data.errors) {
                    let errorCode = response?.response?.data?.error;
                    this.addMessage(errorCode ? messages[errorCode] : messages["DefaultMessage"], "danger");
                } else {
                    let errors = Object.values(response?.response?.data?.errors ?? {});
                    this.addMessage((errors.map((item) => item[0])).join(" "), "danger");
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