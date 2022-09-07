<template>
    <div :class="containerClass">
        <label v-if="labelPosition == 'top'" class="mb-2 font-normal"
            :for="name">{{label}}</label>

        <input @keyup="hasChange" :class="inputClass" :type="type"
            :placeholder="placeholder" v-model="inputValue" :name="name" :id="name"
            :readonly="readonly" :disabled="disabled" />

        <label v-if="labelPosition == 'side'" class="ml-2" :for="name">{{label}}</label>
    </div>
</template>

<script>

export default {
    name: 'InputUi',

    data() {
        return {
            inputValue: null,
        };
    },

    props: {
        type: { type: String, default: 'text' },
        placeholder: { type: String, default: null },
        value: { type: String, default: null },
        name: { type: String, default: null },
        label: { type: String, default: null },
        rounded: { type: Boolean, default: false },
        borderless: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        invalid: { type: Boolean, default: false },
        valid: { type: Boolean, default: false },
    },

    computed: {
        labelPosition() {
            if (this.label) {
                if (this.type == 'checkbox' || this.type == 'radio')
                    return 'side';
                else
                    return 'top';
            }
            return null;
        },
        containerClass() {
            return `flex ${this.labelPosition == 'top' ? 'flex-col' : 'items-center'}`;
        },
        inputClass() {
            let width = (this.type != 'checkbox' && this.type != 'radio') ? 'w-full' : (this.type == 'checkbox' || this.type == 'radio') ? 'w-4 h-4' : '';
            let rounded = this.rounded ? 'rounded' : '';
            let border = this.borderless ? '' : 'border ' + (this.invalid ? 'border-red-500' : this.valid ? 'border-green-500' : '');

            return `${width} px-3 py-1 text-gray-500 disabled:bg-gray-100 read-only:bg-gray-100 ${rounded} ${border}`;
        },
    },

    watch: {
        value: {
            immediate: true,
            handler(v) {
                this.inputValue = v;
            },
            deep: true
        },
    },

    methods: {
        hasChange(event) {
            let data = {
                event: event,
                input_value: this.inputValue,
                input_name: event.target.name ?? null,
            };
            this.$emit("inputChange", data);
        },
    },
};

</script>