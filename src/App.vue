<template>
	<div>
		<header>
			<h1>Planificador de gastos</h1>

			
			<div class="contenedor contenedorHeader sombra">
				<Budget v-if="budget === 0" @setBudget="setBudget" />
				<p v-else>Presupuesto: ${{ budget }}</p>
			</div>
		</header>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import Budget from './components/Budget.vue';

	const budget = ref(0);

	const setBudget = (newBudget: number) => {
		budget.value = newBudget;
	}
</script>

<style lang="scss">
	@import '@scss/app.scss';
</style>
