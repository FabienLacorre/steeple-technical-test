<template>
    <button>
        <slot></slot>
    </button>
</template>


<style lang="scss">
@use "@/design-system/quark/spacing.scss" as *;
@use "@/design-system/quark/typography.scss" as *;
@use "@/design-system/quark/radius.scss" as *;
@use "@/design-system/quark/color.scss" as *;

button {
    cursor: pointer;

    color: $pure-white;
    background-color: $primary-color;
    border: 1px solid $primary-color;
    font-size: $ds-typography--S;
    border-radius: $ds-app-radius--XS;
    text-align: center;
    display: inline-block;
    outline: none;
    padding: $ds-no-padding $ds-padding--M;
    transition: 0.2s ease-out;
    line-height: 30px;
    font-weight: 400;

    &:hover {
        background-color: $primary-dark-color;
        border-color: $primary-dark-color;
    }

    &:active {
        background-color: $primary-color;
    }

    &:disabled {
        background-color: $light-grey;
        border-color: $light-grey;
        cursor: not-allowed;
    }

}
</style>