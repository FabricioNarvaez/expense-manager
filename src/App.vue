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
				<img @click="showModal" :src="NewBudgetIcon" alt="Nuevo gasto" />
			</div>

			<Modal v-if="modal.show" :animate="modal.animate" @hideModal="hideModal"/>
		</main>
	</div>
</template>

<script setup>
	import { ref, reactive } from 'vue';

	import Modal from './components/Modal.vue';
	import Budget from './components/Budget.vue';
	import BudgetControl from './components/BudgetControl.vue';
	import NewBudgetIcon from '@img/nuevo-gasto.svg';

	const budget = ref(0);
	const available = ref(0);
	const modal = reactive({
		show: false,
		animate: false
	})

	const setBudget = (newBudget) => {
		budget.value = newBudget;
		available.value = newBudget;
	}

	const showModal = () =>{
		modal.show = true;
		modal.animate = true;
	}

	const hideModal = () =>{
		modal.show = false;
		modal.animate = false;
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
