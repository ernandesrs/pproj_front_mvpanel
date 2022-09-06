<template>
    <div class="w-screen h-screen flex justify-center items-center">
        <div class="my-container w-full sm:w-96">
            <div class="bg-gray-800 flex justify-center items-center">
                <RouterLink :to="{name: 'auth.login'}" class="py-2 px-4 text-gray-400 hover:text-gray-200">
                    Login
                </RouterLink>
                
                <RouterLink :to="{name: 'auth.register'}" class="py-2 px-4 text-gray-400 hover:text-gray-200">
                    Cadastrar
                </RouterLink>
            </div>
            <div class="py-4 px-2">
                <RouterView />
            </div>
        </div>
    </div>
</template>