<template>
    <div class="relative">
        <button @click.stop.prevent="toggle" type="button"
            class="px-4 py-2 transition ease-in-out duration-150 z-50"
            :class="{ 'rounded-md': rounded, 'border border-gray-200': !naked }">
            <div class="flex items-center">
                <slot name="button" />
                <span v-if="!noIcon" class="ml-2">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </span>
            </div>
        </button>

        <Transition enter-active-class="transition ease-out duration-100"
            enter-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <div v-show="isOpen"
                class="bg-white w-56 origin-top-left absolute mt-1 border border-gray-200 p-2 shadow-md rounded z-50"
                :class="[position]">
                <slot name="content" />
            </div>
        </Transition>
    </div>
</template>

<script>

export default {
    name: 'DropdownUi',

    props: {
        text: {
            type: String,
            default: 'Dropdown'
        },

        noIcon: {
            type: Boolean,
            default: false
        },

        rounded: {
            type: Boolean,
            default: false,
        },

        naked: {
            type: Boolean,
            default: false
        },

        right: {
            type: Boolean,
            default: false,
        },
    },

    // torna funcionalidades disponíveis aos elementos filhos
    provide() {
        return {
            // neste caso, está passando a instância completa do componente aos filhos
            dropdown: this
        };
    },

    data() {
        return {
            isOpen: false,
        };
    },

    mounted() {
        document.addEventListener('click', this.clickOutListener);
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        },

        close() {
            this.isOpen = false;
        },

        clickOutListener(evt) {
            if (!this.$el.contains(evt.target)) {
                this.close();
            }
        },
    },

    computed: {
        position() {
            if (this.right)
                return 'right-0';
            else
                return 'left-0';
        },
    },
};

</script>
