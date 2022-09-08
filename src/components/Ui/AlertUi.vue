<template>

    <div :class="[{'fixed': !fixed, 'relative': fixed}, 'z-50 top-5 right-0 px-5']"
        :style="[{'width: 100%; max-width: 325px;': !fixed}]">
        <div class="flex items-center shadow-md text-sm" :class="alertStyle">
            <div class="py-2 pl-4 pr-3 w-full">
                <span>{{text}}</span>
            </div>
            <button class="text-xl pl-2 pr-3 py-0">
                <IconUi icon-name="x" />
            </button>
        </div>
    </div>

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

    props: {
        type: { type: String, default: 'default' },
        text: { type: String, default: null },
        fixed: { type: Boolean, default: false },
    },

    computed: {
        alertStyle() {
            return alerts[this.type] ?? alerts['default'];
        }
    }
};

</script>