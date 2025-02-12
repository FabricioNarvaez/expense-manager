<template>
    <div class="contenedor contenedorHeader sombra">
        <form class="budget">
            <div class="field">
                <label for="budget">Definir presupuesto</label>
                <input class="newBudget" type="number" id="budget" placeholder="Añade tu presupuesto" />
            </div>
            <input type="submit" value="Definir presupuesto" />
        </form>
    </div>
</template>

<script setup lang="ts">

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