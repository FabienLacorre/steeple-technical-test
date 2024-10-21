<template>
    <div class="ds-layout-component">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@use "@/design-system/quark/color.scss" as *;
@use "@/design-system/quark/spacing.scss" as *;

.ds-layout-component {
    padding-left: $ds-padding--XL;
    padding-right: $ds-padding--XL;
    padding-bottom: $ds-padding--XL;

    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>