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
                <UserForm :url-action="urlAction" :success-message="successMessage"
                    :user-data="user" />
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

export default {
    name: "UserEditView",
    components: { ButtonUi, RowUi, ColumnUi, UserForm },

    data() {
        return {
            user: {},
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