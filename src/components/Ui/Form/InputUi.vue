<template>
    <div :class="containerClass">
        <label v-if="labelPosition == 'top'" class="mb-2 font-normal"
            :for="name">{{label}}</label>

        <input @change="hasChange" :class="inputClass" :type="type"
            :placeholder="placeholder" v-model="inputValue" :name="name" :id="name"
            :readonly="readonly" :disabled="disabled" checked />

        <label v-if="labelPosition == 'side'" class="ml-2" :for="name">{{label}}</label>
    </div>
</template>

<script>

export default {
    name: 'InputUi',

    data() {
        return {
            inputValue: null,
            inputInvalid: null,
            inputValid: null,
        };
    },

    props: {
        type: { type: String, default: 'text' },
        placeholder: { type: String, default: null },
        value: { type: [String, Boolean], default: null },
        name: { type: String, default: null },
        label: { type: String, default: null },
        rounded: { type: Boolean, default: false },
        borderless: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        invalid: { type: Boolean, default: false },
        valid: { type: Boolean, default: false },
    },

    watch: {
        value: {
            immediate: true,
            handler(v) {
                this.inputValue = v;
            },
            deep: true
        },
        valid: {
            immediate: true,
            handler(v) {
                this.inputValid = v;
            },
            deep: true
        },
        invalid: {
            immediate: true,
            handler(v) {
                this.inputInvalid = v;
            },
            deep: true
        },
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
            let border = this.borderless ? '' : 'border ' + (this.inputInvalid ? 'border-red-500' : this.inputValid ? 'border-green-500' : '');

            return `${width} px-3 py-1 text-gray-500 disabled:bg-gray-100 read-only:bg-gray-100 ${rounded} ${border}`;
        },
        checked() {
            if (this.type == 'checkbox' && this.inputValue)
                return 'checked';

            return null;
        },
    },

    methods: {
        hasChange(event) {
            let data = {
                event: event,
                input_value: this.inputValue,
                input_name: this.name,
            };
            this.$emit("inputChange", data);
        },
    },
};

</script>