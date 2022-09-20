<template>
    <div class="w-full h-screen grid grid-cols-12">
        <!-- backdrop -->
        <BackdropUi @click="backdropClicked" v-if="inMobile" v-show="visible" fixed />
        <!-- /backdrop -->

        <!-- sidebar -->
        <aside v-show="visible" class="my-container sidebar" :class="sidebarClass">
            <SidebarHeaderUi>
                <template v-slot:header>
                    <div class="py-3">
                        <RouterLink :to="{ name: 'panel.index' }">
                            <img src="./../assets/logo.svg" alt="logo">
                        </RouterLink>
                    </div>
                </template>
            </SidebarHeaderUi>

            <SidebarElemUi title="Dashboard" :nav-items="nav.dashboard" />
        </aside>
        <!-- /sidebar -->

        <!-- sidebar right side -->
        <div class="bg-gray-100" :class="contentClass">
            <!-- topbar -->
            <div class="my-container bg-gray-100 border-b flex">
                <!-- others topbar content -->
                <div class="w-full flex items-center md:order-last">
                    <DropdownUi class="ml-auto" naked right>
                        <template v-slot:button>
                            <div class="flex items-center">
                                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span class="hidden md:block ml-2">
                                    {{ userName }}
                                </span>
                            </div>
                        </template>

                        <template v-slot:content>
                            <div
                                class="flex flex-col items-center justify-center px-3 py-3">
                                <img class="rounded-full border-5 border-white"
                                    :src="this.$store.state.user_module.authUser.thumb_small"
                                    :alt="this.$store.state.user_module.authUser.full_name">
                                <p
                                    class="font-semibold text-center text-gray-500 text-lg pt-2">
                                    {{this.$store.state.user_module.authUser.full_name}}
                                </p>
                            </div>
                            <DropdownSeparatorUi />
                            <div class="flex justify-between px-3 py-3">
                                <ButtonUi text="Perfil" :to="{name: 'panel.profile'}"
                                    variant="info" size="sm" icon="user" link />
                                <ButtonUi @click="logout" text="Logout" icon="logout"
                                    variant="danger" size="sm" outlined
                                    :loading="logoutClick" :disabled="logoutClick" />
                            </div>
                        </template>
                    </DropdownUi>
                </div>
                <!-- /others topbar content -->

                <!-- sidebar toggler -->
                <button @click.stop.prevent="toggler"
                    class="relative z-50 md:text-gray-800"
                    :class="{ 'text-gray-300': inMobile && visible }">
                    <!-- close icon -->
                    <svg v-if="visible" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>

                    <!-- /close icon -->

                    <!-- open icon -->
                    <svg v-else class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                    <!-- /open icon -->

                </button>
                <!-- /sidebar toggler -->
            </div>
            <!-- /topbar -->

            <!-- main -->
            <main class="bg-gray-50 py-3">
                <div class="my-container relative">
                    <AlertUi ref="alert" class="mb-5" />
                    <RouterView />
                </div>
            </main>
            <!-- /main -->
        </div>
        <!-- /sidebar right side -->
    </div>
</template>

<script>

// TAILWIND CSS MD BREAK POINT VALUE
let MIN_WIDTH = 768;

let sidebarMobileClass = "sidebar-mobile";
let contentMobileClass = "content-mobile";

let sidebarDesktopClass = "sidebar-desktop";
let contentDesktopClass = "content-desktop";
let contentDesktopWoSidebarClass = "content-desktop-wosidebar";

import BackdropUi from '@/components/Ui/BackdropUi.vue';
import SidebarElemUi from '@/components/Layout/Sidebar/SidebarElemUi.vue';
import SidebarHeaderUi from '@/components/Layout/Sidebar/SidebarHeaderUi.vue';
import DropdownUi from '@/components/Ui/Dropdown/DropdownUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';
import axios from '@/services/axios';
import DropdownSeparatorUi from '@/components/Ui/Dropdown/DropdownSeparatorUi.vue';
import cookie from '@/services/cookie';
import AlertUi from '@/components/Ui/AlertUi.vue';

export default {
    name: 'DashLayout',
    components: { BackdropUi, SidebarElemUi, SidebarHeaderUi, DropdownUi, ButtonUi, DropdownSeparatorUi, AlertUi },

    data() {
        return {
            visible: false,
            inMobile: true,
            sidebarClass: sidebarMobileClass,
            contentClass: contentMobileClass,
            loadingMode: true,
            logoutClick: false,

            nav: {
                dashboard: [
                    {
                        text: 'Visão geral',
                        title: 'Visão geral do dashboard',
                        to: { name: 'panel.index' },
                        target: '_self',
                        icon: 'pieChart',
                    },
                    {
                        text: 'Usuários',
                        title: 'Listar usuários',
                        to: { name: 'panel.users.index' },
                        target: '_self',
                        icon: 'users',
                        activeIn: ['panel.users.index', 'panel.users.create', 'panel.users.edit'],
                    },
                    {
                        text: 'Componentes',
                        title: 'Mais componentes',
                        href: '#',
                        icon: 'layoutWtf',
                        activeIn: ['panel.components.alerts', 'panel.components.cards', 'panel.components.buttons', 'panel.components.forms', 'panel.components.index'],
                        subnav: [
                            {
                                text: 'Início',
                                title: '',
                                to: { name: 'panel.components.index' },
                                target: '_self',
                            },
                            {
                                text: 'Alertas',
                                title: '',
                                to: { name: 'panel.components.alerts' },
                                target: '_self',
                            },
                            {
                                text: 'Cards',
                                title: '',
                                to: { name: 'panel.components.cards' },
                                target: '_self',
                            },
                            {
                                text: 'Botões',
                                title: '',
                                to: { name: 'panel.components.buttons' },
                                target: '_self',
                            },
                            {
                                text: 'Formulários',
                                title: '',
                                to: { name: 'panel.components.forms' },
                                target: '_self',
                            }
                        ]
                    }
                ],
            }
        };
    },

    mounted() {
        this.windowResized();
        window.addEventListener("resize", this.windowResized);
    },

    watch: {
        visible(visible) {
            if (visible) {
                if (!this.inMobile) {
                    this.contentClass = contentDesktopClass;
                }
            } else {
                if (!this.inMobile) {
                    this.contentClass = contentDesktopWoSidebarClass;
                }
            }
        },
        inMobile(inMobile) {
            if (inMobile) {
                this.sidebarClass = sidebarMobileClass;
                this.contentClass = contentMobileClass;
            } else {
                this.sidebarClass = sidebarDesktopClass;
                this.contentClass = contentDesktopClass;
            }
            this.toggler();
        }
    },

    methods: {
        toggler() {
            this.visible = !this.visible;
        },

        windowResized() {
            let cwidth = window.innerWidth;
            if (cwidth <= MIN_WIDTH && !this.inMobile)
                this.inMobile = true;
            else if (cwidth > MIN_WIDTH && this.inMobile)
                this.inMobile = false;
        },

        backdropClicked() {
            this.toggler();
        },

        async logout() {
            this.logoutClick = true;
            await axios.axios.post("/auth/logout").then(() => {
                this.$refs.alert.flash("Você foi deslogado. Faça login para acessar o painel novamente.", "warning");
                cookie.deleteToken();
                this.$router.push({ name: "auth.login" });
            });
        }
    },

    computed: {
        userName() {
            let name = this.$store.state.user_module.authUser.full_name;
            return `${name.substr(0, 10)}${name.length > 10 ? "..." : ""}`;
        }
    }
};

</script>

<style>
.sidebar {
    @apply bg-gray-900 w-full z-40 h-screen overflow-y-auto;
}

.sidebar-mobile {
    @apply fixed z-50 w-full;
    max-width: 275px;
}

.content-mobile {
    @apply col-span-12;
}

.sidebar-desktop {
    @apply relative col-span-3 xl:col-span-2;
}

.content-desktop {
    @apply overflow-y-auto md:col-span-9 xl:col-span-10;
}

.content-desktop-wosidebar {
    @apply overflow-y-auto col-span-12;
}
</style>
