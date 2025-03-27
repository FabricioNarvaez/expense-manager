<template>
    <form class="budget" @submit.prevent="addBudget">
        <Alert v-if="error">
            {{ error }}
        </Alert>
        <div class="field">
            <label for="budget">Definir presupuesto</label>
            <input v-model.number="newBudget" min="0" class="newBudget" type="number" id="budget" placeholder="Añade tu presupuesto" />
        </div>
        <input type="submit" value="Definir presupuesto" />
    </form>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    import Alert from "./Alert.vue";

    const newBudget = ref(0);
    const error = ref('');

    const addBudget = () => {
        if(newBudget.value <= 0 || newBudget.value === '') {
            error.value = "El presupuesto no puede ser menor o igual a 0";
            setTimeout(() => {
                error.value = '';
            }, 3000);
                
            return;
        }

        emit('setBudget', newBudget.value);
    }

    const emit = defineEmits(['setBudget']);
</script>

<style lang="scss" scoped>
    .budget {
        width: 100%;

        label {
            font-size: 2.2rem;
            text-align: center;
            color: $blue;
        }

        input[type="number"] {
            background-color: $light-gray;
            border-radius: 1rem;
            padding: 1rem;
            border: none;
            font-size: 2.2rem;
            text-align: center;
        }

        input[type="submit"] {
            background-color: $blue;
            cursor: pointer;
            border: none;
            padding: 1rem;
            text-align: center;
            font-size: 2rem;
            margin-top: 2rem;
            color: $white;
            width: 100%;
            transition: background-color .3s ease;

            &:hover {
                background-color: $dark-blue;
            }
        }
    }

    .field {
        display: grid;
        gap: 2rem; 
    }
</style>