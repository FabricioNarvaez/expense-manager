<template>
	<div>
		<header>
			<h1>Planificador de gastos</h1>

			
			<div class="contenedor contenedorHeader sombra">
				<Budget v-if="budget === 0" @setBudget="setBudget" />
				<BudgetControl v-else :budget :available/>
			</div>
		</header>

		<main v-if="budget > 0">
			<div class="createBudget">
				<img :src="NewBudgetIcon" alt="Nuevo gasto" />
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	import Budget from './components/Budget.vue';
	import BudgetControl from './components/BudgetControl.vue';
	import NewBudgetIcon from '@img/nuevo-gasto.svg';

	const budget = ref(0);
	const available = ref(0);

	const setBudget = (newBudget: number) => {
		budget.value = newBudget;
		available.value = newBudget;
	}
</script>

<style lang="scss">
	@import '@scss/app.scss';

	.createBudget {
		position: fixed;
		bottom: 5rem;
		right: 5rem;
	}

	.createBudget img{
		width: 5rem;
		transition: all .3s ease;
	}

	.createBudget img:hover{
		cursor: pointer;
		transform: scale(1.1);
	}
</style>
