<template>
    <h1 class="pb-2 font-bold text-2xl">FORMULÁRIOS</h1>
    <div class="py-4">
        <h2 class="pb-2 font-semibold">Inputs</h2>

        <RowUi basis="basis-full sm:basis-1/2 lg:basis-1/3">
            <ColumnUi>
                <div class="mb-2">
                    <InputUi label="Label text:" name="input#1"
                        placeholder="Input text with label" />
                </div>
                <div class="mb-2">
                    <InputUi placeholder="Input text disabled" disabled />
                </div>
                <div class="mb-2">
                    <InputUi placeholder="Input text readonly" readonly />
                </div>
                <div class="mb-2">
                    <InputUi placeholder="Input text without label" />
                </div>
                <div class="mb-2">
                    <InputUi placeholder="Input text rounded" rounded />
                </div>
                <div class="mb-2">
                    <InputUi placeholder="Input text with value" value="Some value here"
                        rounded />
                </div>
                <div class="mb-2">
                    <InputUi placeholder="Input text invalid" invalid />
                </div>
                <div class="mb-2">
                    <InputUi placeholder="Input text valid" valid />
                </div>
                <div class="mb-2">
                    <InputUi placeholder="Input text borderless" borderless />
                </div>
            </ColumnUi>

            <ColumnUi>
                <div class="mb-2">
                    <InputUi label="Select this radio #1" name="input#3" type="radio" />
                </div>
                <div class="mb-2">
                    <InputUi label="Check this checkbox #1" name="input#4"
                        type="checkbox" />
                </div>
                <div class="mb-2">
                    <InputUi label="Input date:" name="input#5" type="date" />
                </div>
                <div class="mb-2">
                    <InputUi label="Input file:" name="input#6" type="file" />
                </div>
                <div class="mb-2">
                    <InputUi label="Input number:" name="input#7" type="number" />
                </div>
            </ColumnUi>

            <ColumnUi>
                <div class="mb-2">
                    <SelectUi :options="[
                        {value: 1, text: 'Opção 1'},
                        {value: 2, text: 'Opção 2'},
                        {value: 3, text: 'Opção 3'},
                        {value: 4, text: 'Opção 4'},
                    ]" label="Select a option:">
                    </SelectUi>
                </div>

                <div class="mb-2">
                    <SelectUi :options="[
                        {value: 1, text: 'Opção 1'},
                        {value: 2, text: 'Opção 2'},
                        {value: 3, text: 'Opção 3'},
                        {value: 4, text: 'Opção 4'},
                    ]" value="3" label="Some item selected:">
                    </SelectUi>
                </div>

                <div class="mb-2">
                    <SelectUi :options="[
                        {value: 1, text: 'Opção 1'},
                        {value: 2, text: 'Opção 2'},
                        {value: 3, text: 'Opção 3'},
                        {value: 4, text: 'Opção 4'},
                    ]" value="3" label="Rounded input:" rounded>
                    </SelectUi>
                </div>

                <div class="mb-2">
                    <SelectUi :options="[
                        {value: 1, text: 'Opção 1'},
                        {value: 2, text: 'Opção 2'},
                        {value: 3, text: 'Opção 3'},
                        {value: 4, text: 'Opção 4'},
                    ]" value="2" label="Invalid example:" invalid>
                    </SelectUi>
                </div>

                <div class="mb-2">
                    <SelectUi :options="[
                        {value: 1, text: 'Opção 1'},
                        {value: 2, text: 'Opção 2'},
                        {value: 3, text: 'Opção 3'},
                        {value: 4, text: 'Opção 4'},
                    ]" value="4" label="Readonly select:" readonly>
                    </SelectUi>
                </div>

                <div class="mb-2">
                    <SelectUi :options="[
                        {value: 1, text: 'Opção 1'},
                        {value: 2, text: 'Opção 2'},
                        {value: 3, text: 'Opção 3'},
                        {value: 4, text: 'Opção 4'},
                    ]" value="4" label="Disabled select:" disabled>
                    </SelectUi>
                </div>
            </ColumnUi>
        </RowUi>
    </div>
</template>

<script>
import RowUi from '@/components/Ui/Grid/RowUi.vue';
import ColumnUi from '@/components/Ui/Grid/ColumnUi.vue';
import InputUi from '@/components/Ui/Form/InputUi.vue';
import SelectUi from '@/components/Ui/Form/SelectUi.vue';

export default {
    name: "FormsView",
    components: { RowUi, ColumnUi, InputUi, SelectUi }
};

</script>