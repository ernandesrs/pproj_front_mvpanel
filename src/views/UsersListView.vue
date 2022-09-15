<template>

    <div class="flex items-center">
        <TitleUi title="Usuários" icon="users" tag="h2" size="h3" />
        <div class="ml-2">
            <ButtonUi :to="{name: 'panel.users.create'}" text="Novo usuário"
                variant="success" rounded outlined icon="plusLg" />
        </div>
    </div>
    <div class="relative py-5">
        <LoadingUi v-if="loading" />

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
                <ButtonUi variant="danger" href="#" icon="trash"
                    size="sm" outlined rounded />
            </template>
            <!-- /list item actions -->

        </ListItemUi>
    </div>
    <div v-html="pagination">
    </div>
</template>

<script>

import LoadingUi from "@/components/Ui/LoadingUi.vue";
import axios from "@/services/axios";
import ListItemUi from "@/components/Layout/ListItemUi.vue";
import ButtonUi from "@/components/Ui/ButtonUi.vue";
import BadgeUi from "@/components/Ui/BadgeUi.vue";
import TitleUi from "@/components/Ui/TitleUi.vue";

export default {
    name: 'UsersListView',
    components: { LoadingUi, ListItemUi, ButtonUi, BadgeUi, TitleUi },

    data() {
        return {
            loading: true,
            users: [],
            pagination: null,
            showConfirmationModal: false
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