<template>
	<div>
		<header>
			<h1>Planificador de gastos</h1>

			<Budget />
		</header>
	</div>
</template>

<script setup lang="ts">
	import Budget from './components/Budget.vue';
</script>

<style lang="scss">
	@import '@scss/app.scss';
</style>
