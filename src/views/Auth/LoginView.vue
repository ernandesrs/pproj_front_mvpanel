<template>
    <RowUi basis="basis-full">
        <ColumnUi>
            <InputUi @inputChange="setChanges" label="Email" type="email" name="email"
                :value="email" />
        </ColumnUi>

        <ColumnUi>
            <InputUi @inputChange="setChanges" label="Senha" type="password"
                name="password" :value="password" />
        </ColumnUi>

        <ColumnUi>
            <div class="pt-2 flex justify-between">
                <InputUi @inputChange="setChanges" label="Lembre-se de mim"
                    type="checkbox" name="remember_me" :value="remember_me" />

                <ButtonUi @click="submit" text="Login" icon-name="login"
                    button-style="dark" rounded />
            </div>
        </ColumnUi>
    </RowUi>
</template>

<script>

import InputUi from '@/components/Ui/Form/InputUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';
import RowUi from '@/components/Ui/Grid/RowUi.vue';
import ColumnUi from '@/components/Ui/Grid/ColumnUi.vue';

export default {
    name: "LoginView",
    components: { InputUi, ButtonUi, RowUi, ColumnUi },

    data() {
        return {
            email: null,
            password: null,
            remember_me: false
        };
    },

    methods: {
        setChanges(data) {
            if (data.input_name !== '')
                this[data.input_name] = data.input_value;
        },

        submit() {
            let data = {
                email: this.email,
                password: this.password,
                remember_me: this.remember_me,
            };

            console.log(data);
        }
    },

    watch: {
    },
};

</script>