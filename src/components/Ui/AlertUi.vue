<template>

    <Transition @after-leave="closeAfter" enter-from-class="opacity-0"
        enter-active-class="duration-500" enter-to-class="opacity-100"
        leave-from-class="opacity-100" leave-active-class="duration-500"
        leave-to-class="opacity-0">
        <div v-if="alertMessage" v-show="visible"
            :class="[{'float-alert': !fixed, 'fixed-alert': fixed}]">
            <div class="flex items-center shadow-md text-sm" :class="alertStyle">
                <div class="py-3 pl-5 pr-3 lg:py-2 lg:pl-4 lg:pr-3 w-full">
                    <span>{{ alertMessage }}</span>
                </div>
                <button @click="close" class="text-xl pl-2 pr-3 py-0" type="button">
                    <IconUi icon-name="x" />
                </button>
            </div>
        </div>
    </Transition>

</template>

<script>

import IconUi from './IconUi.vue';

export default {
    name: "AlertUi",
    components: { IconUi },

    data() {
        return {
            visible: null,
            timerHandler: null,
            timerTime: 10,
            alertVariant: 'default',
            alertMessage: null
        };
    },

    mounted() {
        this.showFlash();
    },

    props: {
        variant: { type: String, default: 'default' },
        message: { type: String, default: null },
        fixed: { type: Boolean, default: false },
        notimer: { type: Boolean, default: false }
    },

    computed: {
        alertStyle() {
            return `alert-${this.alertVariant}`;
        }
    },

    watch: {
        message: {
            immediate: true,
            handler(nv) {
                if (nv) this.add(nv, this.variant);
            },
            deep: true,
        },
    },

    methods: {
        flash(message, variant) {
            this.add(message, variant, true);
        },
        add(message, variant, flash = false) {
            if (!flash) {
                this.alertMessage = message;
                this.alertVariant = variant;
                this.show();
            } else {
                sessionStorage.setItem("alert_flash", JSON.stringify({
                    alertMessage: message,
                    alertVariant: variant
                }));
            }

        },
        show() {
            if (!this.visible) {
                this.visible = true;
                this.timerHandler = this.timer();
                this.$emit("alertShow", this);
            }
        },
        showFlash() {
            let flash = sessionStorage.getItem("alert_flash");

            if (flash) {
                flash = JSON.parse(flash);
                this.add(flash.alertMessage, flash.alertVariant);
                sessionStorage.removeItem("alert_flash");
            }
        },
        close() {
            if (this.visible) {
                this.visible = false;

                if (this.timerHandler) {
                    clearTimeout(this.timerHandler);
                    this.timerHandler = null;
                }

                this.$emit("alertClose", this);
            }
        },
        timer() {
            if (this.notimer) {
                return null;
            }

            return setTimeout(() => {
                this.close();
            }, this.timerTime * 1000);
        },
        closeAfter() {
            this.alertMessage = null;
            this.$emit('alertCloseAfter', this);
        }
    },
};

</script>

<style>
.fixed-alert {
    @apply relative;
}

.float-alert {
    @apply fixed z-50 top-5 right-0 px-5 w-full;
    max-width: 375px;
}

.alert-default {
    @apply bg-gray-300 border border-gray-400 text-gray-600;
}

.alert-success {
    @apply bg-green-50 border border-green-300 text-green-900;
}

.alert-danger {
    @apply bg-red-50 border border-red-300 text-red-900;
}

.alert-info {
    @apply bg-blue-50 border border-blue-300 text-blue-900;
}

.alert-warning {
    @apply bg-yellow-50 border border-yellow-300 text-yellow-900;
}
</style>