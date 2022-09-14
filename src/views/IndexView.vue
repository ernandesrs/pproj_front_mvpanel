<template>

	<SectionUi>
		<RowUi basis="basis-full sm:basis-1/2 lg:basis-1/3">
			<ColumnUi>
				<CardUi icon-name="users" title="Usuários">
					<ButtonUi variant="info" icon="list" text="Ver lista" size="sm"
						rounded outlined class="mr-1 my-1" />
					<ButtonUi variant="success" icon="plusLg" text="Cadastrar novo"
						size="sm" rounded class="mr-1 my-1" />
				</CardUi>
			</ColumnUi>
			<ColumnUi>
				<CardUi icon-name="layoutWtf" title="Card #2">
					<ButtonUi variant="dark" text="Html link" icon="linkExternal"
						size="sm" rounded class="mr-1 my-1"
						href="https://github.com/ernandesrs" target="_blank"
						title="Abrir Google em outra aba" />
					<ButtonUi variant="danger" text="Router link" icon="link" size="sm"
						rounded outlined class="mr-1 my-1" :to="{name: 'panel.index'}" />
				</CardUi>
			</ColumnUi>
			<ColumnUi>
				<CardUi icon-name="app" title="Card #3">
					<ButtonUi variant="info" icon="pencilSquare" text="Button text"
						size="sm" rounded class="mr-1 my-1" />
					<ButtonUi variant="warning" icon="alertDiamond" text="Some text"
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
				<ButtonUi variant="dark" text="Large button #1" size="lg" rounded />
				<span class="mx-1"></span>
				<ButtonUi variant="info" text="Large button #2" size="lg" rounded />
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
				<ButtonUi variant="warning" text="Large button #1" size="lg" rounded />
				<span class="mx-1"></span>
				<ButtonUi text="Large button #2" size="lg" rounded
					outlined />
			</ColumnUi>
		</RowUi>
	</SectionUi>

</template>

<script>

import SectionUi from '@/components/Layout/SectionUi.vue';
import ButtonUi from '@/components/Ui/ButtonUi.vue';
import RowUi from '@/components/Layout/Grid/RowUi.vue';
import ColumnUi from '@/components/Layout/Grid/ColumnUi.vue';
import CardUi from '@/components/Ui/CardUi.vue';

export default {
	name: "IndexView",
	components: { SectionUi, ButtonUi, RowUi, ColumnUi, CardUi },
}

</script>
