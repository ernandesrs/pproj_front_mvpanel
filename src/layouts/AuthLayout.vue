<template>
    <div class="w-screen h-screen flex justify-center items-center">
        <div class="w-full sm:w-96 border">
            <div class="bg-gray-800 px-5 pt-2 flex items-center">
                <img class="h-5 mb-2" src="./../assets/logo.svg" alt="">

                <div class="flex justify-center items-center ml-auto auth-nav">
                    <RouterLink :to="{name: 'auth.login'}"
                        class="py-2 px-3 text-gray-400 hover:text-gray-200">
                        Login
                    </RouterLink>

                    <RouterLink :to="{name: 'auth.register'}"
                        class="py-2 px-3 text-gray-400 hover:text-gray-200">
                        Cadastrar
                    </RouterLink>
                </div>
            </div>

            <div class="my-container">
                <div class="py-4 px-2">
                    <RouterView />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AuthLayout'
}

</script>
