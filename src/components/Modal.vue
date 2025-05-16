<template>
    <div class="modal">
        <div class="closeModal">
            <img @click="$emit('hideModal')" src="@/assets/img/cerrar.svg" alt="Cerrar modal" />
        </div>

        <div class="container formContainer" :class="[modal.animate ? 'animate' : 'close']">
            <form class="newExpense" @submit.prevent="addExpense">
                <legend>Ingresa tu gasto</legend>
                <Alert v-if="error">{{ error }}</Alert>
                <div class="field">
                    <label for="name">Nombre del gasto:</label>
                    <input v-model="modelExpense.name" type="text" id="name" placeholder="Ej. Transporte" />
                </div>
                <div class="field">
                    <label for="amount">Cantidad:</label>
                    <input v-model="modelExpense.amount" type="number" id="amount" placeholder="Ej. 300" />
                </div>
                <div class="field">
                    <label for="category">Categoría:</label>
                    <select id="category" v-model="modelExpense.category">
                        <option value="">-- Seleccione --</option>
                        <option value="comida">Comida</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="transporte">Transporte</option>
                        <option value="salud">Salud</option>
                        <option value="casa">Casa</option>
                        <option value="ocio">Ocio</option>
                        <option value="educacion">Educación</option>
                    </select>
                </div>

                <input type="submit" :value='expense.name ? "Guardar Cambios": "Agregar gasto"' />
            </form>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Alert from './Alert.vue';

    const emit = defineEmits(['hideModal', 'addExpense']);
    const expense = defineModel('expense');
    const props = defineProps({
        modal: {
            type: Object,
            required: true
        },
        available: {
            type: Number,
            required: true
        }
    });
    
    const modelExpense = ref({ ...expense.value });
    const error = ref('');

    const addExpense = () => {
        const { name, amount, category } = modelExpense.value;
        if(name && amount > 0 && category) {
            if(amount > props.available) {
                error.value = 'El gasto no puede ser mayor al presupuesto disponible';
                return
            };
            emit('addExpense', {
                ...modelExpense.value,
                date: Date.now()
            });
            emit('hideModal');
        }else{
            error.value = 'Todos los campos son obligatorios';
            return
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
        position: absolute;
        background-color: rgb(0 0 0 / 0.9);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .formContainer{
        transition: all .5s ease-in-out;
        opacity: 0;

        &.animate {
            opacity: 1;
        }

        &.close {
            opacity: 0;
        }
    }

    .closeModal {
        position: absolute;
        top: 2rem;
        right: 2rem;
        cursor: pointer;
        width: 20px;
        transition: all .5s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }

    .newExpense {
        margin: 10rem auto 0 auto;
        display: grid;
        gap: 2rem;

        legend {
            font-size: 3rem;
            color: white;
            text-align: center;
        }

        input,
        select {
            background-color: $light-gray;
            border: none;
            border-radius: 1rem;
            padding: 1rem;
            font-size: 1.8rem;
        }

        label {
            font-size: 2rem;
            color: white;
        }

        input[type="submit"] {
            background-color: $blue;
            color: white;
            font-weight: 600;
            cursor: pointer;
        }
    }

    .field{
        display: grid;
        gap: 1rem;
    }
</style>