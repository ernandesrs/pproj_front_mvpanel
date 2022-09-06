<template>

	<SectionUi>
		<CardGroupUi basis="basis-full sm:basis-1/2 lg:basis-1/3">
			<CardItemUi title="Card item #1" icon-name="app">
				<ButtonUi button-style="success" text="Button #1" size="sm" rounded />
				<span class="mx-1"></span>
				<ButtonUi button-style="success" text="Button #2" size="sm" outlined
					rounded />
			</CardItemUi>

			<CardItemUi title="Card item #2" icon-name="app">
				<ButtonUi button-style="danger" text="Button #1" size="sm" rounded />
				<span class="mx-1"></span>
				<ButtonUi button-style="danger" text="Button #2" size="sm" outlined
					rounded />
			</CardItemUi>

			<CardItemUi title="Card item #3" icon-name="app">
				<ButtonUi button-style="dark" text="Button #1" size="sm" rounded />
				<span class="mx-1"></span>
				<ButtonUi button-style="dark" text="Button #2" size="sm" outlined
					rounded />
			</CardItemUi>
		</CardGroupUi>
	</SectionUi>

	<SectionUi icon-name="pieChart" title="Uma seção muito top">
		<RowUi basis="basis-full sm:basis-1/2">
			<ColumnUi>
				<p class="mb-4">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem saepe
					sit, eos commodi voluptates animi tempore sequi placeat vitae facilis,
					at cupiditate dolor qui recusandae magnam eveniet aspernatur ducimus
					quam! Ducimus neque harum cum similique eaque dolores quibusdam est
					molestias, soluta odit numquam doloremque dolorum blanditiis adipisci
					vitae amet quam.
				</p>
				<ButtonUi button-style="dark" text="Large button #1" size="lg" rounded />
				<span class="mx-1"></span>
				<ButtonUi button-style="info" text="Large button #2" size="lg" rounded />
			</ColumnUi>

			<ColumnUi>
				<p class="mb-4">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem saepe
					sit, eos commodi voluptates animi tempore sequi placeat vitae facilis,
					at cupiditate dolor qui recusandae magnam eveniet aspernatur ducimus
					quam! Ducimus neque harum cum similique eaque dolores quibusdam est
					molestias, soluta odit numquam doloremque dolorum blanditiis adipisci
					vitae amet quam.
				</p>
				<ButtonUi button-style="warning" text="Large button #1" size="lg"
					rounded />
				<span class="mx-1"></span>
				<ButtonUi button-style="default" text="Large button #2" size="lg" rounded
					outlined />
			</ColumnUi>
		</RowUi>
	</SectionUi>

</template>

<script>

import SectionUi from '@/components/Layout/SectionUi.vue';
import CardGroupUi from '@/components/Ui/Card/CardGroupUi.vue';
import CardItemUi from '@/components/Ui/Card/CardItemUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';
import RowUi from '@/components/Ui/Grid/RowUi.vue';
import ColumnUi from '@/components/Ui/Grid/ColumnUi.vue';

export default {
	name: "IndexView",
	components: { SectionUi, CardGroupUi, CardItemUi, ButtonUi, RowUi, ColumnUi }
}

</script>
