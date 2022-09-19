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
                                8?"Administrador":(this.$store.state.user_module.authUser.level
                                ==
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

                <UserForm url-action="/me"
                    :success-message="`${this.$store.state.user_module.authUser.full_name}, seus dados foram atualizados com sucesso!`"
                    :user-data="this.$store.state.user_module.authUser" />
            </ColumnUi>
        </RowUi>
    </SectionUi>

</template>

<script>

import SectionUi from "@/components/Layout/SectionUi.vue";
import RowUi from "@/components/Layout/Grid/RowUi.vue";
import ColumnUi from "@/components/Layout/Grid/ColumnUi.vue";
import TitleUi from "@/components/Ui/TitleUi.vue";
import UserForm from "@/components/UserForm.vue";

export default {
    name: "ProfileView",
    components: { SectionUi, RowUi, ColumnUi, TitleUi, UserForm },

    data() {
        return {
        };
    },

    methods: {

    },
};

</script>