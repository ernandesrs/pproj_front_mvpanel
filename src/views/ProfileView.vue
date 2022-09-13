<template>

    <SectionUi>
        <RowUi>
            <ColumnUi basis="basis-full sm:basis-1/3">
                <div class="flex justify-center">
                    <div v-if="!user.photo"
                        class="w-40 h-40 lg:w-64 lg:h-64 flex justify-center items-center bg-gray-100 border-4 rounded-full">
                        PHOTO
                    </div>
                    <img v-else class="w-40 h-40 lg:w-64 lg:h-64 border-4 rounded-full"
                        :src="user.photo" :alt="user.full_name">
                </div>
            </ColumnUi>
            <ColumnUi basis="basis-full sm:basis-2/3">
                <h2 class="font-semibold text-lg mb-4">Meu perfil</h2>
                <div>
                    <RowUi basis="basis-full lg:basis-1/2">
                        <ColumnUi>
                            <InputUi @inputChange="setChanges" label="Nome:"
                                :value="user.first_name" name="first_name" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi @inputChange="setChanges" label="Sobrenome:"
                                :value="user.last_name" name="last_name" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi @inputChange="setChanges" label="Usuário:"
                                :value="user.username" name="username" />
                        </ColumnUi>
                        <ColumnUi>
                            <SelectUi label="Gênero:" :value="user.gender" :options="[
                                {value: 0, text: 'Não definido'},
                                {value: 1, text: 'Masculino'},
                                {value: 2, text: 'Feminino'},
                            ]" name="gender" />
                        </ColumnUi>
                        <ColumnUi basis="basis-full">
                            <InputUi @inputChange="setChanges" label="Email:"
                                :value="user.email" type="email" name="email"
                                :disabled="true" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi @inputChange="setChanges" label="Senha:"
                                type="password" name="password" />
                        </ColumnUi>
                        <ColumnUi>
                            <InputUi @inputChange="setChanges" label="Confirmar senha:"
                                type="password" name="password_confirmation" />
                        </ColumnUi>
                        <ColumnUi basis="basis-full">
                            <div class="text-center">
                                <ButtonUi @click="submit" text="Atualizar dados"
                                    button-style="dark" icon-name="checkLg" rounded />
                            </div>
                        </ColumnUi>
                    </RowUi>
                </div>
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

export default {
    name: "ProfileView",
    components: { SectionUi, RowUi, ColumnUi, InputUi, SelectUi, ButtonUi },

    data() {
        return {
            user: {
                first_name: this.$store.state.user.first_name,
                last_name: this.$store.state.user.last_name,
                username: this.$store.state.user.username,
                gender: this.$store.state.user.gender,
                email: this.$store.state.user.email,
                password: null,
                password_confirmation: null,
            },
        };
    },

    methods: {
        setChanges(data) {
            if (data.input_name !== '')
                this.user[data.input_name] = data.input_value;
        },

        submit() {
            console.log(this.user);
        }
    },
};

</script>