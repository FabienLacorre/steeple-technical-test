<script lang="ts" setup>
// lib
import { ref } from 'vue'

// components
import InputComponent from '@/design-system/atom/InputComponent.vue'
import ButtonComponent from '@/design-system/atom/ButtonComponent.vue'
import FormComponent from '@/design-system/atom/FormComponent.vue';
import LoaderComponent from '@/design-system/atom/LoaderComponent.vue';

defineProps<{
    isLoading: boolean
}>()

const emit = defineEmits<{ onSubmit: [name: string, year: number | undefined] }>()

const movieName = ref('');
const yearOfRelease = ref();

const submit = () => {
    emit("onSubmit", movieName.value, yearOfRelease.value)
}

</script>

<template>
    <FormComponent autocomplete="off" action="" class="app-form-component" @submit.prevent="submit">
        <div class="app-form-component__input-container">
            <InputComponent class="app-form-component__input" type="text" placeholder="Name of film" v-model="movieName"
                required />
            <InputComponent class="app-form-component__input" type="number" placeholder="Year of release"
                v-model="yearOfRelease" />
        </div>
        <div class="app-form-component__button-container">
            <ButtonComponent :disabled="isLoading" class="app-form-component__button">Search</ButtonComponent>
            <div v-if="isLoading" class="app-home-view__loader-container">
                <LoaderComponent />
            </div>
        </div>
    </FormComponent>
</template>


<style lang="scss">
@use "../design-system/quark/spacing.scss" as *;

.app-form-component__input-container {
    display: flex;
    gap: $ds-padding--S;
}

.app-form-component__input {
    width: 100%;
}

.app-form-component__button {
    width: 100%;
}

.app-form-component__button-container {
    display: flex;
    gap: $ds-padding--S;
    align-items: center;
    justify-content: center;
}
</style>