<template>
    <div class="twoColumns">
        <div class="graphicContainer">
            <img :src="image" alt="Gráfico" />
        </div>

        <div class="expensesContainer">
            <p>
                <span>Presupuesto: </span>
            </p>
            <p>
                <span>Disponible: </span>
            </p>
            <p>
                <span>Gastado: </span>
            </p>
            
            <button class="resetApp">Resetear App</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue";

    import image from '@img/grafico.jpg';
</script>

<style lang="scss" scoped>
    .twoColumns {
        display: flex;
        flex-direction: column;
    }

    .graphicContainer{
        margin-bottom: 3rem;
    }

    .expensesContainer {
        width: 100%;
    }

    .expensesContainer p{
        font-size: 2rem;
        text-align: center;
        color: $dark-gray;
    }

    .expensesContainer span{
        font-weight: bold;
        color: $blue;
    }

    .resetApp {
        background-color: $button;
        border: none;
        padding: 1rem;
        border-radius: 4px;
        color: $white;
        transition: all .3s ease-in-out;
    }

    .resetApp:hover {
        background-color: $button-hover;
        cursor: pointer;
    }

    @media (min-width: 768px) {
        .expensesContainer p{
            text-align: left;
        }

        .twoColumns {
            flex-direction: row;
            gap: 4rem;
            align-items: center;
        }

        .graphicContainer{
            margin-bottom: 0rem;
        }
    }
</style>