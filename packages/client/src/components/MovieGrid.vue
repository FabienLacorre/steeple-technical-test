<template>
    <div class="app-movie-grid ">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.app-movie-grid {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
