<template>
	<div :class="{fixed: modal.show}">
		<header>
			<h1>Planificador de gastos</h1>

			
			<div class="container containerHeader shadow">
				<Budget v-if="budget === 0" @setBudget="setBudget" />
				<BudgetControl v-else :budget :available :spent/>
			</div>
		</header>

		<main v-if="budget > 0">
			<div class="container expenseList">
				<h2>{{ expenses.length ? 'Gastos' : 'No hay gastos' }}</h2>
				<Expense v-for="expense in expenses" :key="expense.id" :expense @selectExpense="selectExpense"/>
			</div>

			<div class="createBudget">
				<img @click="showModal" :src="NewBudgetIcon" alt="Nuevo gasto" />
			</div>

			<Modal v-if="modal.show" v-model:expense="expense" :modal="modal" :available @addExpense="handleAddExpense" @hideModal="hideModal"/>
		</main>
	</div>
</template>

<script setup>
	import { ref, reactive, watch } from 'vue';

	import Modal from './components/Modal.vue';
	import Budget from './components/Budget.vue';
	import Expense from './components/Expense.vue';
	import BudgetControl from './components/BudgetControl.vue';
	import NewBudgetIcon from '@img/nuevo-gasto.svg';

	const budget = ref(0);
	const spent = ref(0);
	const available = ref(0);
	const expenses = ref([]);
	const modal = reactive({
		show: false,
		animate: false
	})

	watch(expenses, () => {
		const totalExpenses = expenses.value.reduce((total, expense) => total + expense.amount, 0);
		available.value = budget.value - totalExpenses;
		spent.value = totalExpenses;
	}, { deep: true });

	watch(modal, ()=>{
		if(!modal.show){
			resetStateExpense();
		}
	}, {
		deep: true
	})

	const resetStateExpense = () => {
		expense.name = '';
		expense.amount = 0;
		expense.category = '';
		expense.id = null;
		expense.date = Date.now();
	}

	const expense = reactive({
		name: '',
		amount: 0,
		category: '',
		id: null, 
		date: Date.now()
	})

	const setBudget = (newBudget) => {
		budget.value = newBudget;
		available.value = newBudget;
	}

	const showModal = () =>{
		modal.show = true;
		setTimeout(() => {
			modal.animate = true;
		}, 300);
	}

	const hideModal = () =>{
		modal.animate = false;
		setTimeout(() => {
			modal.show = false;
		}, 300);
	}

	const handleAddExpense = (newExpense) => {
		const index = expenses.value.findIndex(expense => expense.id === newExpense.id);
		if(index >= 0){
			expenses.value[index] = {id: Date.now(), ...newExpense };
			return
		}else{
			expenses.value.push({ ...newExpense });
		}
		resetStateExpense();
	};

	const selectExpense = id => {
		const editExpense = expenses.value.find(expense => expense.id === id);
		Object.assign(expense, editExpense);
		showModal();
	}
</script>

<style lang="scss">
	@import '@scss/app.scss';

	.fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.createBudget {
		position: fixed;
		bottom: 5rem;
		right: 5rem;
	}

	.createBudget img{
		width: 5rem;
		transition: all .3s ease;

		&:hover{
			transform: scale(1.1);
			cursor: pointer;
		}
	}

	.expenseList {
		margin-top: 10rem;

		h2{
			color: $gray;
			font-weight: 700;
		}
	}
</style>
