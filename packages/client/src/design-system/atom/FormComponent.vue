<template>
    <form autocomplete="off" action="" class="ds-form">
        <slot></slot>
    </form>
</template>

<style lang="scss">
@use "@/design-system/quark/spacing.scss" as *;

.ds-form {
    display: flex;
    flex-direction: column;
    gap: $ds-padding--S;
}
</style>