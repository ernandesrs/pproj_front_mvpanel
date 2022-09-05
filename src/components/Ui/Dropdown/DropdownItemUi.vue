<template>
    <Component :is="is" :href="localHref" :to="to" @click="onClick"
        class="w-full text-left hover:bg-gray-200 cursor-pointer duration-200 block py-2 px-4">
        <slot />
    </Component>
</template>

<script>
export default {
    name: 'DropdownItemUi',

    // (injeção de dependências) recebe funcionalidades enviadas pelo componente pai
    inject: ['dropdown'],

    props: {
        href: {
            type: String,
            default: undefined,
        },

        to: {
            type: [String, Object],
            default: undefined
        },
    },

    data() {
        return {
        };
    },

    computed: {
        localHref() {
            if (typeof this.to !== 'undefined')
                return undefined;

            return this.href;
        },

        is() {
            if (typeof this.to !== 'undefined')
                return 'RouterLink';

            if (typeof this.href !== 'undefined')
                return 'a';

            return 'button';
        },
    },

    methods: {
        onClick(evt) {
            this.$emit('dropdownItemClick', evt);
            this.closeDropdown();
        },

        closeDropdown() {
            this.dropdown.close();
        }
    }
};
</script>