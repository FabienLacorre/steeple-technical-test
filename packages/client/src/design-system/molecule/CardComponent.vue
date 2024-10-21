<script lang="ts" setup>
import TypographyComponent from '../atom/TypographyComponent.vue';

const props = defineProps<{
    imageUrl: string
    title: string
    date: string
    percentage: number
}>()

const MAX_SIZE = 12;
const croppedTitle = props.title.length > MAX_SIZE ? props.title.slice(0, MAX_SIZE) + '...' : props.title;
</script>

<template>
    <div class="ds-card-component">
        <div class="ds-card-component__image-container" :style="{ backgroundImage: `url(${imageUrl})` }">
        </div>
        <div class="ds-card-component__data-container">
            <TypographyComponent class="ds-card-component__data-container-title">{{ croppedTitle }}
            </TypographyComponent>
            <TypographyComponent class="ds-card-component__data-container-date">{{ date }}</TypographyComponent>
        </div>
        <div class="ds-card-component__rating-bubble">
            <TypographyComponent>{{ percentage }}</TypographyComponent>
            <TypographyComponent class="ds-card-component__percent">%</TypographyComponent>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "@/design-system/quark/color.scss" as *;
@use "@/design-system/quark/spacing.scss" as *;

.ds-card-component {
    position: relative;
    background: $pure-white;
    display: flex;
    flex-direction: column;
    width: 165px;
    border-radius: 8px;
    overflow: hidden;
}

.ds-card-component__image-container {
    height: 270px;
    background: $dark-grey;
    z-index: 99;

    background-size: cover;
    background-position: center;
}

.ds-card-component__data-container {
    display: flex;
    flex-direction: column;
    height: 80px;
    padding: 26px 10px 12px
}

.ds-card-component__data-container-title {
    font-size: 16px;
    font-weight: 700;
}

.ds-card-component__data-container-date {
    font-size: 14px;
    color: $dark-grey;
}

.ds-card-component__rating-bubble {
    position: absolute;
    background-color: black;
    z-index: 999;
    border-radius: 999%;
    height: 40px;
    width: 40px;
    top: 247px;
    left: 8px;
    text-align: center;
    line-height: 40px;
    color: $pure-white;
    font-size: 14px;
    border: 1px solid $pure-white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ds-card-component__percent {
    font-size: 8px;
}
</style>
