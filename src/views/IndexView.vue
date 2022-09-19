<template>

	<SectionUi>
		<RowUi basis="basis-full sm:basis-1/2 xl:basis-1/3">
			<ColumnUi>
				<CardUi icon-name="users" title="Usuários" shadow borderless>
					<ButtonUi variant="success" :text="usersTotal" size="sm" rounded
						class="mr-1 my-1" />
					<ButtonUi variant="info" :text="usersVerified" size="sm" rounded
						class="mr-1 my-1" />
					<ButtonUi variant="info" :text="usersUnverified" size="sm" rounded
						outlined class="mr-1 my-1" />
				</CardUi>
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
import axios from '@/services/axios';

export default {
	name: "IndexView",
	components: { SectionUi, ButtonUi, RowUi, ColumnUi, CardUi },

	data() {
		return {
			users: {
				total: 0,
				verified: 0,
				unverified: 0
			}
		};
	},

	created() {
		this.getDash();
	},

	methods: {
		getDash() {
			axios.axios.get("/admin").then((resp) => {
				this.users = resp.data.users;
			});
		},
	},

	computed: {
		usersTotal() {
			return `Total: ${this.users?.total}`;
		},
		usersVerified() {
			return `Verificados: ${this.users?.verified}`;
		},
		usersUnverified() {
			return `Não verificados: ${this.users?.unverified}`;
		},
	}
}

</script>
