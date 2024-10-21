<template>
    <div class="ds-page-element-container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@use "@/design-system/quark/spacing.scss" as *;

.ds-page-element-container {
    display: flex;
    flex-direction: column;
    gap: $ds-padding--M;
}
</style>