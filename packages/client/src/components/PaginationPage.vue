<script lang="ts" setup>

defineProps<{
    page: number
    totalPages: number
    data: any;
}>()

const emit = defineEmits(['onPreviousClick', 'onNextClick']);

const scrollToTop = () => {
    window.scrollTo(0, 0);
}

const onPreviousClick = () => {
    emit('onPreviousClick');
    scrollToTop();
}

const onNextClick = () => {
    emit('onNextClick');
    scrollToTop();
}

</script>

<template>
    <div class="app-pagination-page" v-if="data && data?.length > 0">
        <Button v-if="page > 1" @click="onPreviousClick">Previous page</Button>
        <Button v-if="page != totalPages" @click="onNextClick">
            Next page
        </Button>
    </div>
</template>

<style lang="scss" scoped>
.app-pagination-page {
    justify-content: right;
    display: flex;
    gap: 8px;
}
</style>