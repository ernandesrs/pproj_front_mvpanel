<template>
    <div class="w-screen h-screen grid grid-cols-12">
        <!-- backdrop -->
        <BackdropUi @click="backdropClicked" v-if="inMobile" v-show="visible" />
        <!-- /backdrop -->

        <!-- sidebar -->
        <aside v-show="visible" class="my-container sidebar" :class="sidebarClass">
            <SidebarHeaderUi />

            <SidebarElemUi title="Dashboard" :nav-items="nav.dashboard" />
        </aside>
        <!-- /sidebar -->

        <!-- sidebar right side -->
        <div class="bg-gray-100" :class="contentClass">
            <!-- topbar -->
            <div class="my-container bg-gray-100 border-b flex">
                <!-- others topbar content -->
                <div class="w-full md:order-last">
                    <slot name="topbarContent" />
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
                <div class="my-container">
                    <RouterView />
                </div>
            </main>
            <!-- /main -->
        </div>
        <!-- /sidebar right side -->
    </div>
</template>

<script>

import BackdropUi from '@/components/Ui/BackdropUi.vue';
import SidebarElemUi from '@/components/Layout/Sidebar/SidebarElemUi.vue';
import SidebarHeaderUi from '@/components/Layout/Sidebar/SidebarHeaderUi.vue';

let sidebarMobileClass = "sidebar-mobile";
let contentMobileClass = "content-mobile";

let sidebarDesktopClass = "sidebar-desktop";
let contentDesktopClass = "content-desktop";
let contentDesktopWoSidebarClass = "content-desktop-wosidebar";

// TAILWIND CSS MD BREAK POINT VALUE
let MIN_WIDTH = 768;

export default {
    name: 'DashLayout',
    components: { BackdropUi, SidebarElemUi, SidebarHeaderUi },

    data() {
        return {
            visible: false,
            inMobile: true,
            sidebarClass: sidebarMobileClass,
            contentClass: contentMobileClass,

            nav: {
                dashboard: [
                    {
                        id: 1,
                        text: 'Visão geral',
                        title: 'Visão geral do dashboard',
                        to: { name: 'panel.index' },
                        target: '_self',
                    },
                    {
                        id: 3,
                        text: 'Com submenu',
                        title: 'Abrir submenu',
                        href: '#',
                        subnav: [
                            {
                                id: 1,
                                text: 'Sub item #1',
                                title: '',
                                href: '#',
                                target: '_blank',
                            },
                            {
                                id: 2,
                                text: 'Sub item #2',
                                title: 'Sub item #2',
                                href: '#',
                                target: '_blank',
                            },
                            {
                                id: 3,
                                text: 'Sub item #3',
                                title: 'Sub item #3',
                                href: '#',
                                target: '_blank',
                            },
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
    },
};

</script>