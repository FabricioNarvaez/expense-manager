<template>
    <div class="expense shadow">
        <div class="content">
            <img class="icon" :src="diccionarioIconos[expense.category]" alt="Icono de gasto" />
            <div class="details">
                <p class="category">{{ expense.category }}</p>
                <p class="name">{{ expense.name }}</p>
                <p class="date">Fecha: <span>{{ formatDate(expense.date) }}</span></p>
            </div>
        </div>

        <p class="amount">{{ formatAmount(expense.amount) }}</p>
    </div>
</template>

<script setup>
    import { formatAmount, formatDate } from '@/helpers';
    import IconoAhorro from '@assets/img/icono_ahorro.svg';
    import IconoCasa from '@assets/img/icono_casa.svg';
    import IconoComida from '@assets/img/icono_comida.svg';
    import IconoGastos from '@assets/img/icono_gastos.svg';
    import IconoOcio from '@assets/img/icono_ocio.svg';
    import IconoSalud from '@assets/img/icono_salud.svg';
    import IconoSuscripciones from '@assets/img/icono_suscripciones.svg';

    const diccionarioIconos = {
        ahorro : IconoAhorro,
        comida : IconoComida,
        casa : IconoCasa,
        gastos : IconoGastos,
        ocio : IconoOcio,
        salud : IconoSalud,
        suscripciones : IconoSuscripciones
    }

    defineProps({
        expense: {
            type: Object,
            required: true
        }
    })
</script>

<style lang="scss">
    .expense {
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;
    }

    .content {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    .icon {
        width: 100%;
        max-width: 5rem;
    }

    .details{

        p{
            margin: 0 0 1rem 0;
        }
    }

    .category{
        color: $gray;
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 900;
    }

    .name{
        color: $dark-gray;
        font-size: 2.4rem;
        font-weight: 700;
        text-transform: capitalize;
        cursor: pointer;
    }

    .date{
        font-size: 1.6rem;
        font-weight: 900;
        color: $dark-gray;
    
        span{

            font-weight: 400;
        }
    }

    .amount{
        margin: 0;
        font-weight: 700;
        font-size: 2.2rem;
    }
</style>