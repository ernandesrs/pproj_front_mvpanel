<template>

	<SectionUi>
		<RowUi basis="basis-full sm:basis-1/2 lg:basis-1/3">
			<ColumnUi>
				<CardUi icon-name="users" title="Usuários">
					<ButtonUi button-style="info" icon-name="list" text="Ver lista"
						size="sm" rounded outlined class="mr-1 my-1" />
					<ButtonUi button-style="success" icon-name="plusLg"
						text="Cadastrar novo" size="sm" rounded class="mr-1 my-1" />
				</CardUi>
			</ColumnUi>
			<ColumnUi>
				<CardUi icon-name="layoutWtf" title="Card #2">
					<ButtonUi button-style="dark" text="Only text" size="sm" rounded class="mr-1 my-1" />
					<ButtonUi button-style="danger" icon-name="trash"
						text="Delete something" size="sm" rounded class="mr-1 my-1" />
				</CardUi>
			</ColumnUi>
			<ColumnUi>
				<CardUi icon-name="app" title="Card #3">
					<ButtonUi button-style="info" icon-name="pencilSquare" text="Button text"
						size="sm" rounded class="mr-1 my-1" />
					<ButtonUi button-style="warning" icon-name="alertDiamond" text="Some text"
						size="sm" rounded outlined class="mr-1 my-1" />
				</CardUi>
			</ColumnUi>
		</RowUi>
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
import ButtonUi from '@/components/Ui/ButtonUi.vue';
import RowUi from '@/components/Ui/Grid/RowUi.vue';
import ColumnUi from '@/components/Ui/Grid/ColumnUi.vue';
import CardUi from '@/components/Ui/CardUi.vue';

export default {
	name: "IndexView",
	components: { SectionUi, ButtonUi, RowUi, ColumnUi, CardUi },
}

</script>
