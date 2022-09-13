<template>
    <div>
        <h1 class="pb-2 font-bold text-2xl">Listagem de usuários</h1>
    </div>
    <div class="relative py-5">
        <LoadingUi v-if="loading" />

        <ListItemUi v-for="user in users" v-bind:key="user"
            :image-thumb="user.thumb_small">
            <template v-slot:content>
                <div class="">
                    <p class="font-semibold text-gray-500">
                        {{ user.full_name }}
                    </p>
                    <p class="text-sm">
                        {{ user.email }}
                    </p>
                    <p class="flex">
                        <BadgeUi variant="info" :text="userLevel[user.level]" size="xs" />
                    </p>
                </div>
            </template>

            <template v-slot:actions>
                <ButtonUi button-style="info" href="" icon-name="pencilSquare"
                    size="small" rounded />
                <span class="mx-1"></span>
                <ButtonUi button-style="danger" href="" icon-name="trash" size="small"
                    outlined rounded />
            </template>
        </ListItemUi>
    </div>
</template>

<script>

import LoadingUi from "@/components/Ui/LoadingUi.vue";
import axios from "@/services/axios";
import ListItemUi from "@/components/Layout/ListItemUi.vue";
import ButtonUi from "@/components/Ui/ButtonUi.vue";
import BadgeUi from "@/components/Ui/BadgeUi.vue";

export default {
    name: 'UsersList',
    components: { LoadingUi, ListItemUi, ButtonUi, BadgeUi },

    data() {
        return {
            loading: true,
            users: []
        };
    },

    mounted() {
        this.getUsers();
        console.log(this.users)
        this.loading = false;
    },

    methods: {
        async getUsers() {
            await axios.axios.get("/admin/users?limit=32&order=asc").then((resp) => {
                this.users = resp.data.users;
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