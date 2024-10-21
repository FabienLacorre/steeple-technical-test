<script lang="ts" setup>
const model = defineModel();
</script>


<template>
    <input v-model="model" />
</template>


<style lang="scss" scoped>
@use "@/design-system/quark/spacing.scss" as *;
@use "@/design-system/quark/typography.scss" as *;
@use "@/design-system/quark/radius.scss" as *;
@use "@/design-system/quark/color.scss" as *;

input {
    background-color: $pure-white;
    border-color: $light-grey;
    cursor: text;
    border-radius: $ds-app-radius--XS;
    border-style: solid;
    box-sizing: border-box;
    font-size: $ds-typography--S;
    transition: background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;
    padding: $ds-padding--S;

    &:hover {
        background-color: $pure-white;
    }
}
</style>