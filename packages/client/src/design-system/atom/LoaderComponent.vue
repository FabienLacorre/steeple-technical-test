<template>
    <span class="loader"></span>
</template>

<style lang="scss">
@use "@/design-system/quark/color.scss" as *;

.loader {
    width: 25px;
    height: 25px;
    border: 5px solid #FFF;
    border-bottom-color: $primary-dark-color;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>