<template>
	<div>
		<header>
			<h1>Planificador de gastos</h1>

			
			<div class="contenedor contenedorHeader sombra">
				<Budget v-if="budget === 0" @setBudget="setBudget" />
				<BudgetControl v-else :budget :available/>
			</div>
		</header>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	import Budget from './components/Budget.vue';
	import BudgetControl from './components/BudgetControl.vue';

	const budget = ref(0);
	const available = ref(0);

	const setBudget = (newBudget: number) => {
		budget.value = newBudget;
		available.value = newBudget;
	}
</script>

<style lang="scss">
	@import '@scss/app.scss';
</style>
