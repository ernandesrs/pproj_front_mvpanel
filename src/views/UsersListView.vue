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
            :variant="alert.variant" />

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

    <div class="flex justify-center">
        <a @click.prevent="navigate" v-for="page in pagination.pages" v-bind:key="page"
            class="px-4 py-2 hover:text-gray-200 mx-1 border rounded-md"
            :class="[{'bg-gray-500 text-gray-200 border-gray-600': page == pagination.current},{'bg-gray-700 text-gray-200 border-gray-800': page != pagination.current}]"
            href="#" :data-page="page">{{ page }}</a>
    </div>
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
            pagination: {
                pages: 0,
                current: 1,
            },
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
            await axios.axios.get("/admin/users?limit=10&page=" + this.pagination.current).then((resp) => {
                this.users = resp.data.users;
                this.pagination.pages = Array.from({ length: resp.data.pagination.last_page }, (_, i) => i + 1);
                this.pagination.current = resp.data.pagination.current_page;
            });
        },

        navigate(evt) {
            let page = evt.target.getAttribute("data-page");
            if (page == this.pagination.current)
                return;

            this.pagination.current = page;
            this.getUsers();
        },

        deleteUserConfirmation(ev) {
            let id = ev.target.getAttribute("data-user");
            this.user = this.users.find(user => user.id == id);

            this.confirmationModal.variant = "danger";
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
