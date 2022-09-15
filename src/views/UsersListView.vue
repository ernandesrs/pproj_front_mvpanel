<template>
    <ModalConfirmationUi @confirmAction="deleteUserConfirm" @closeModal="deleteUserCancel"
        :show="confirmationModal.show" :variant="confirmationModal.variant">
        <template v-slot:content>
            <p v-html="confirmationModal.text"></p>
        </template>
    </ModalConfirmationUi>

    <div class="flex items-center">
        <TitleUi title="Usuários" icon="users" tag="h2" size="h3" />
        <div class="ml-2">
            <ButtonUi :to="{name: 'panel.users.create'}" text="Novo usuário"
                variant="success" rounded outlined icon="plusLg" />
        </div>
    </div>

    <div class="relative py-5">
        <LoadingUi v-if="loading" />

        <AlertUi @alertClose="alert.message = null" class="mb-5" :message="alert.message"
            :type="alert.variant" />

        <ListItemUi v-for="user in users" v-bind:key="user"
            :image-thumb="user.thumb_small">

            <!-- list item content -->
            <template v-slot:content>
                <div class="">
                    <div class="font-semibold text-gray-500">
                        {{ user.full_name }}
                    </div>
                    <div class="text-sm pb-1">
                        {{ user.email }}
                    </div>
                    <div class="flex">
                        <BadgeUi variant="info" :text="userLevel[user.level]" size="sm" />
                    </div>
                </div>
            </template>
            <!-- /list item content -->

            <!-- list item actions -->
            <template v-slot:actions>
                <ButtonUi variant="info"
                    :to="{name: 'panel.users.edit', params: {'user_id': user.id}}"
                    icon="pencilSquare" size="sm" rounded />
                <span class="mx-1"></span>
                <ButtonUi @click.prevent="deleteUserConfirmation" variant="danger"
                    href="#" icon="trash" size="sm" outlined rounded
                    :data-user="user.id" />
            </template>
            <!-- /list item actions -->

        </ListItemUi>
    </div>

    <div v-html="pagination"></div>
</template>

<script>

import LoadingUi from "@/components/Ui/LoadingUi.vue";
import axios from "@/services/axios";
import ListItemUi from "@/components/Layout/ListItemUi.vue";
import ButtonUi from "@/components/Ui/ButtonUi.vue";
import BadgeUi from "@/components/Ui/BadgeUi.vue";
import TitleUi from "@/components/Ui/TitleUi.vue";
import ModalConfirmationUi from "@/components/Ui/Modal/ModalConfirmationUi.vue";
import AlertUi from "@/components/Ui/AlertUi.vue";
import messages from "@/utils/messages";

export default {
    name: 'UsersListView',
    components: { LoadingUi, ListItemUi, ButtonUi, BadgeUi, TitleUi, ModalConfirmationUi, AlertUi },

    data() {
        return {
            loading: true,
            users: [],
            user: null,
            pagination: null,
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

    mounted() {
        this.getUsers();
        this.loading = false;
    },

    methods: {
        async getUsers() {
            await axios.axios.get("/admin/users").then((resp) => {
                this.users = resp.data.users;
                this.pagination = resp.data.pagination;
            }).catch((resp) => {
                console.log(resp);
            });
        },

        deleteUserConfirmation(ev) {
            let id = ev.target.getAttribute("data-user");
            this.user = this.users.find(user => user.id == id);

            this.confirmationModal.variant = "info";
            this.confirmationModal.text = "Tem certeza de que você deseja excluir definitivamente o usuário '<b>" + this.user.full_name + "</b>'?";
            this.confirmationModal.show = true;
        },

        deleteUserConfirm() {
            this.confirmationModal.show = false;
            this.alert.variant = "success";

            axios.axios.post("/admin/user/destroy/" + this.user.id).then(() => {
                let index = this.users.findIndex(user => user.id == this.user.id);
                if (index > -1) {
                    this.users.splice(index, 1);
                }
                this.alert.message = "O usuário " + this.user.full_name + " foi excluído com sucesso definitivamente!";
                this.alert.variant = "warning";
            }).catch((resp) => {
                let errorCode = resp?.response?.data?.error ?? "DefaultMessage";

                this.alert.message = messages[errorCode];
                this.alert.variant = "danger";
            });
        },

        deleteUserCancel() {
            this.user = null;
            this.confirmationModal.show = false;
        }
    },

    computed: {
        userLevel() {
            return {
                9: "Super",
                8: "Admin",
                5: "Membro",
                1: "Usuário",
            };
        }
    }

};

</script>

<style>
.pagination {
    display: flex;
    justify-content: center;
}

.pagination>.page-item .page-link {
    padding: 6px 12px;
    border: 1px solid #ccc;
    margin: 2px;
}
</style>