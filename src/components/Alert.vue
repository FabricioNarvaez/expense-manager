<template>
    <div class="alert">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    .alert {
        border-left: 3px solid red;
        color: red;
        padding: 1rem;
        text-align: center;
        font-size: 1.8rem;
    }
</style>