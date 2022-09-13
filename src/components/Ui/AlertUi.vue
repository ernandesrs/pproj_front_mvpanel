<template>

    <Transition @after-leave="closeAlertAfter" enter-from-class="opacity-0"
        enter-active-class="duration-500" enter-to-class="opacity-100"
        leave-from-class="opacity-100" leave-active-class="duration-500"
        leave-to-class="opacity-0">
        <div v-if="alertMessage" v-show="visible"
            :class="[{'fixed z-50 top-5 right-0 px-5': !fixed, 'relative': fixed}, '']"
            :style="[{'width: 100%; max-width: 275px;': !fixed}]">
            <div class="flex items-center shadow-md text-sm"
                :class="alertStyle">
                <div class="py-3 pl-5 pr-3 lg:py-2 lg:pl-4 lg:pr-3 w-full">
                    <span>{{ alertMessage }}</span>
                </div>
                <button @click="closeAlert" class="text-xl pl-2 pr-3 py-0" type="button">
                    <IconUi icon-name="x" />
                </button>
            </div>
        </div>
    </Transition>

</template>

<script>

let alerts = {
    default: 'bg-gray-300 border border-gray-400 text-gray-600',
    success: 'bg-green-50 border border-green-300 text-green-900',
    danger: 'bg-red-50 border border-red-300 text-red-900',
    info: 'bg-blue-50 border border-blue-300 text-blue-900',
    warning: 'bg-yellow-50 border border-yellow-300 text-yellow-900',
};

import IconUi from './IconUi.vue';

export default {
    name: "AlertUi",
    components: { IconUi },

    data() {
        return {
            visible: null,
            timerHandler: null,
            timerTime: 10,
            alertColorStyle: 'default',
            alertMessage: null
        };
    },

    props: {
        type: { type: String, default: 'default' },
        message: { type: String, default: null },
        fixed: { type: Boolean, default: false },
        notimer: { type: Boolean, default: false }
    },

    computed: {
        alertStyle() {
            return alerts[this.alertColorStyle] ?? alerts['default'];
        }
    },

    watch: {
        message: {
            immediate: true,
            handler(nv) {
                if (nv)
                    this.addMessage();
            },
            deep: true,
        },
    },

    methods: {
        addMessage() {
            this.alertColorStyle = this.type;
            this.alertMessage = this.message;

            this.showAlert();
        },
        showAlert() {
            if (!this.visible) {
                this.visible = true;
                this.timerHandler = this.timerAlert();
                this.$emit("alertShow", this);
            }
        },
        closeAlert() {
            if (this.visible) {
                this.visible = false;

                if (this.timerHandler) {
                    clearTimeout(this.timerHandler);
                    this.timerHandler = null;
                }

                this.$emit("alertClose", this);
            }
        },
        timerAlert() {
            if (this.notimer) {
                return null;
            }

            return setTimeout(() => {
                this.closeAlert();
            }, this.timerTime * 1000);
        },
        closeAlertAfter() {
            this.alertMessage = null;
            this.$emit('alertCloseAfter', this);
        }
    },
};

</script>