<template>
    <RowUi basis="basis-full">
        <ColumnUi>
            <InputUi label="Email" name="email" type="email" :value="email" />
        </ColumnUi>

        <ColumnUi>
            <InputUi label="Senha" name="password" type="password" :value="password" />
        </ColumnUi>

        <ColumnUi>
            <div class="pt-2 flex justify-between">
                <InputUi label="Lembre-se de mim" type="checkbox" name="remember_me" />

                <ButtonUi text="Login" icon-name="login" button-style="dark" rounded />
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
            password: null
        };
    },
};

</script>