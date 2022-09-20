<template>
    <Transition @after-enter="endAnimation" @after-leave="endAnimation"
        :enter-from-class="enterFromLeaveToClass" enter-active-class="duration-500"
        :enter-to-class="leaveFromEnterToClass" :leave-from-class="leaveFromEnterToClass"
        leave-active-class="duration-500" :leave-to-class="enterFromLeaveToClass">
        <div :class="['backdrop', fixed?'fixed':'absolute', showedClass]">
            <div v-if="loading"
                class="w-full h-full flex flex-col justify-center items-center animate-pulse">
                <div :class="['spinner', spinner]"></div>
                <span
                    :class="[textLoadingClass, 'font-semibold py-2']">{{textLoading}}</span>
            </div>
        </div>
    </Transition>
</template>

<script>

export default {
    name: "BackdropUi",
    data() {
        return {
            showed: false
        };
    },
    props: {
        light: { type: Boolean, default: false },
        fixed: { type: Boolean, default: false },
        loading: { type: Boolean, default: false },
        textLoading: { type: String, default: 'Aguarde...' },
    },
    methods: {
        endAnimation() {
            this.showed = !this.showed;
        },
    },
    computed: {
        enterFromLeaveToClass() {
            return `${this.light ? "backdrop-light" : "backdrop-dark"} opacity-0`;
        },
        leaveFromEnterToClass() {
            return `${this.light ? "backdrop-light" : "backdrop-dark"} opacity-80`;
        },
        showedClass() {
            if (this.showed)
                return this.leaveFromEnterToClass;
            return null;
        },
        spinner() {
            return `${this.light ? "spinner-light" : "spinner-dark"}`;
        },
        textLoadingClass() {
            return `${this.light ? "text-gray-600" : "text-gray-200"}`;
        }
    },
};

</script>

<style scoped>
.backdrop {
    @apply w-full h-full z-30 top-0 left-0
}

.backdrop-dark {
    @apply bg-gray-800;
}

.backdrop-light {
    @apply bg-gray-100;
}
</style>