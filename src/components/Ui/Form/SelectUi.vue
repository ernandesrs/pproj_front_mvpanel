<template>

    <div :class="containerClass">
        <label v-if="label" class="mb-2 font-normal" :for="name">{{label}}</label>
        <select :class="selectClass" :name="name" :id="name" v-model="selected_value"
            :readonly="readonly" :disabled="disabled">
            <option v-for="option in options" v-bind:key="option" :value="option.value">
                {{ option.text }}
            </option>
        </select>
    </div>

</template>

<script>

export default {
    name: 'SelectUi',

    data() {
        return {
            selected_value: null
        };
    },

    props: {
        value: { type: [String, Boolean, Number], default: null },
        name: { type: String, default: null },
        options: { type: Array, default: null },
        label: { type: String, default: null },

        disabled: { type: Boolean, default: false },
        readonly: { type: Boolean, default: false },
        rounded: { type: Boolean, default: false },
        borderless: { type: Boolean, default: false },
        valid: { type: Boolean, default: false },
        invalid: { type: Boolean, default: false },
    },

    watch: {
        value: {
            immediate: true,
            handler() {
                this.selected_value = this.value;
            },
            deep: true
        },
        selected_value(v) {
            if (!this.readonly) {
                this.selected_value = v;
            }
        },
    },

    computed: {
        containerClass() {
            return `flex flex-col`;
        },
        selectClass() {
            let rounded = this.rounded ? 'rounded' : '';
            let border = this.borderless ? '' : 'border ' + (this.invalid ? 'border-red-500' : this.valid ? 'border-green-500' : '');
            let readonly = this.readonly ? 'read-only:bg-gray-100' : '';
            let disabled = this.disabled ? 'disabled:bg-gray-200' : '';
            return `w-full bg-gray-50 px-3 py-1 text-gray-500 ${disabled} ${readonly} ${rounded} ${border}`;
        },
    },
};

</script>