<template>
    <ModalConfirmationUi @confirmAction="confirmAction" @closeModal="cancelAction"
        :show="confirmationModal.show" :variant="confirmationModal.variant">
        <template v-slot:content>
            <p v-html="confirmationModal.text"></p>
        </template>
    </ModalConfirmationUi>

    <div class="flex items-center">
        <TitleUi title="Editar usuário" icon="user" tag="h2" size="h3" />
        <div class="ml-2">
            <ButtonUi :to="{name: 'panel.users.index'}" text="Voltar" icon="arrowLeft"
                variant="info" rounded />
            <span class="mx-1"></span>
            <ButtonUi :to="{name: 'panel.users.create'}" text="Novo usuário"
                variant="success" rounded outlined icon="plusLg" />
        </div>
    </div>
    <div class="border my-5 py-4 px-5">
        <RowUi>
            <ColumnUi basis="basis-full">
                <AlertUi @alertClose="alert.message = null" class="mb-5"
                    :message="alert.message" :type="alert.variant" />
            </ColumnUi>

            <ColumnUi basis="basis-full sm:basis-1/3">
                <div class="flex justify-center">
                    <div v-if="!user.photo"
                        class="w-40 h-40 lg:w-64 lg:h-64 flex justify-center items-center bg-gray-100 border-4 rounded-full">
                        PHOTO
                    </div>
                    <img v-else class="w-40 h-40 lg:w-64 lg:h-64 border-4 rounded-full"
                        :src="user.thumb_normal" :alt="user.full_name">
                </div>
                <div class="py-4">
                    <hr>
                </div>
                <div class="text-center">
                    <p class="mb-2">
                        <span class="text-sm px-4 bg-blue-900 text-gray-200 rounded">
                            <span>
                                {{user.level == 9?
                                "Super":(user.level ==
                                8?"Administrador":(user.level ==
                                2?"Membro":"Usuário"))}}
                            </span>
                        </span>
                    </p>
                    <p class="mb-2">
                        Registrado em: {{ (new
                        Date(user.created_at)).toLocaleDateString("pt-BR")
                        }}
                    </p>
                    <div v-if="$store.state.user_module.authUser.level == 9" class="flex justify-center">
                        <ButtonUi v-if="user.level > 1" @click="demoteConfirmation"
                            text="Rebaixar" icon="userDash" variant="danger" size="sm"
                            rounded />
                        <span class="mx-1"></span>
                        <ButtonUi v-if="user.level < 8" @click="promoteConfirmation"
                            text="Promover" icon="userPlus" variant="success" size="sm"
                            rounded />
                    </div>
                </div>
            </ColumnUi>

            <ColumnUi basis="basis-full sm:basis-2/3">
                <UserForm :url-action="urlAction" :success-message="successMessage"
                    :user-data="user" action-type="update" />
            </ColumnUi>
        </RowUi>
    </div>
</template>

<script>

import ButtonUi from '@/components/Ui/ButtonUi.vue';
import axios from '@/services/axios';
import RowUi from '@/components/Layout/Grid/RowUi.vue';
import ColumnUi from '@/components/Layout/Grid/ColumnUi.vue';
import messages from '@/utils/messages';
import UserForm from '@/components/UserForm.vue';
import TitleUi from '@/components/Ui/TitleUi.vue';
import ModalConfirmationUi from '@/components/Ui/Modal/ModalConfirmationUi.vue';
import AlertUi from '@/components/Ui/AlertUi.vue';

export default {
    name: "UserEditView",
    components: { ButtonUi, RowUi, ColumnUi, UserForm, TitleUi, ModalConfirmationUi, AlertUi },

    data() {
        return {
            user: {},
            levelChangeAction: null,
            confirmationModal: {
                show: false,
                text: null,
                variant: null
            },
            alert: {
                variant: null,
                message: null,
            }
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

        promoteConfirmation() {
            this.levelChangeAction = "/admin/user/promote/" + this.user.id;
            this.confirmationModal.text = `Você está promovendo o usuário '<b>${this.user.full_name}</b>' e lhe concedendo todas as permissões do novo nível de usuário.`;
            this.confirmationModal.variant = "success";
            this.confirmationModal.show = true;
        },

        demoteConfirmation() {
            this.levelChangeAction = "/admin/user/demote/" + this.user.id;
            this.confirmationModal.text = `Você está rebaixando o usuário '<b>${this.user.full_name}</b>' e revogando todas as permissões do nível de usuário atual.`;
            this.confirmationModal.variant = "danger";
            this.confirmationModal.show = true;
        },

        confirmAction() {
            axios.axios.get(this.levelChangeAction).then((resp) => {
                this.user = resp.data.user;

                this.alert.message = `O nível do usuário '${this.user.full_name}' foi alterado com sucesso!`;
                this.alert.variant = "success";
            }).catch((resp) => {
                let errorCode = resp?.response?.data?.error ?? "DefaultMessage";

                this.alert.message = messages[errorCode] ?? messages["DefaultMessage"];
                this.alert.variant = "danger";
            });

            this.confirmationModal.show = false;
        },

        cancelAction() {
            this.confirmationModal.show = false;
        },
    },

    computed: {
        urlAction() {
            return `/admin/user/update/${this.user.id}`;
        },

        successMessage() {
            return `Os dados de ${this.user.full_name} foram atualizados com sucesso!`;
        },
    },
};

</script>