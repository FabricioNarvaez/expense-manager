<template>
    <div class="modal">
        <div class="closeModal">
            <img @click="$emit('hideModal')" src="@/assets/img/cerrar.svg" alt="Cerrar modal" />
        </div>
    </div>
</template>

<script setup>
    defineEmits(['hideModal']);
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

    .closeModal {
        position: absolute;
        top: 2rem;
        right: 2rem;
        cursor: pointer;
        width: 20px;
        transition: all .5s ease-in-out;

    }

    .closeModal:hover {
        transform: scale(1.1);
    }

</style>