<template>

    <Transition enter-from-class="opacity-0" enter-active-class="duration-500"
        enter-to-class="opacity-100" leave-from-class="opacity-100"
        leave-active-class="duration-500" leave-to-class="opacity-0">
        <div v-show="visible"
            :class="[{'fixed': !fixed, 'relative': fixed}, 'z-50 top-5 right-0 px-5']"
            :style="[{'width: 100%; max-width: 275px;': !fixed}]">
            <div class="flex items-center shadow-md text-lg lg:text-sm" :class="alertStyle">
                <div class="py-3 pl-5 pr-3 lg:py-2 lg:pl-4 lg:pr-3 w-full">
                    <span>{{message}}</span>
                </div>
                <button @click="closeAlert" class="text-xl pl-2 pr-3 py-0">
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
            visible: null
        };
    },

    props: {
        type: { type: String, default: 'default' },
        message: { type: String, default: null },
        fixed: { type: Boolean, default: false },
        show: { type: Boolean, default: null },
    },

    computed: {
        alertStyle() {
            return alerts[this.type] ?? alerts['default'];
        }
    },

    watch: {
        show: {
            immediate: true,
            handler(newValue, oldValue) {
                if (newValue) this.showAlert();
                else {
                    if (typeof oldValue === 'undefined') {
                        return;
                    }
                    this.closeAlert();
                }
            },
            deep: true,
        },
    },

    methods: {
        showAlert() {
            if (!this.visible) {
                this.$emit("alertShow", this);
                this.visible = true;
            }
        },
        closeAlert() {
            if (this.visible) {
                this.$emit("alertClose", this);
                this.visible = false;
            }
        },
    },
};

</script>