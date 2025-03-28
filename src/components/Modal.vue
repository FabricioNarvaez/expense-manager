<template>
    <div class="modal">
        <div class="closeModal">
            <img @click="$emit('hideModal')" src="@/assets/img/cerrar.svg" alt="Cerrar modal" />
        </div>

        <div class="contenedor">
            <form>
                <legend>Ingresa tu gasto</legend>
                <div class="field">
                    <label for="name">Nombre del gasto:</label>
                    <input type="text" id="name" placeholder="Ej. Transporte" />
                </div>
                <div class="field">
                    <label for="amount">Cantidad:</label>
                    <input type="number" id="amount" placeholder="Ej. 300" />
                </div>
                <div class="field">
                    <label for="category">Categoría:</label>
                    <select id="category">
                        <option value="">-- Seleccione --</option>
                        <option value="comida">Comida</option>
                        <option value="Ahorro">Ahorro</option>
                        <option value="transporte">Transporte</option>
                        <option value="salud">Salud</option>
                        <option value="casa">Casa</option>
                        <option value="ocio">Ocio</option>
                        <option value="educacion">Educación</option>
                    </select>
                </div>

                <input type="submit" value="Agregar gasto" />
            </form>
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

        &:hover {
            transform: scale(1.1);
        }
    }
</style>