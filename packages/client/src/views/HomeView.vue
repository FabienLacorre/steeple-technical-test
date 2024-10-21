<script lang="ts" setup>

// libs
import { computed, ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';

// components
import LayoutComponent from '@/design-system/atom/LayoutComponent.vue';
import MovieSearchForm from '@/components/MovieSearchForm.vue';
import PageElementContainer from '@/design-system/atom/PageElementContainer.vue';
import CardComponent from '@/design-system/molecule/CardComponent.vue';
import PaginationPage from '@/components/PaginationPage.vue';
import MovieGrid from '@/components/MovieGrid.vue';
import TypographyComponent from '@/design-system/atom/TypographyComponent.vue';

// api
import { getMovieByNameAndYear } from '@/api/getMovieByNameAndYear';

// utils 
import { POSTER_PATH } from '@/constant';
import { formatDisplayDate } from '@/utils/date';

const movieName = ref<string>('');
const movieYear = ref<number | undefined>();
const page = ref<number>(1);

const { data: movieResponse, isLoading: movieIsLoading, refetch: refetchMovies, isRefetching: movieIsRefetching, error } = useQuery({
  queryKey: computed(() => ['movies', movieName.value, movieYear.value, page.value]),
  queryFn: () => getMovieByNameAndYear({ name: movieName.value, year: movieYear.value, page: page.value }),
  select(data) {
    return data.data;
  },
  enabled: false
})

const onSubmit = (name: string, year: number | undefined) => {
  movieName.value = name;
  movieYear.value = year;
  refetchMovies();
}

const nextPage = () => {
  page.value += 1;
  refetchMovies();
}

const previousPage = () => {
  page.value -= 1;
  refetchMovies();
}

</script>

<template>
  <LayoutComponent>
    <div class="app-home-view__movie-search-form-container">
      <PageElementContainer>

        <MovieSearchForm @onSubmit="onSubmit" :isLoading="movieIsLoading || movieIsRefetching" />
        <MovieGrid>
          <CardComponent v-for="movie in movieResponse?.results" v-bind:key="movie.id" :title="movie.title"
            :date="movie.release_date ? formatDisplayDate(movie.release_date) : 'N/A'"
            :imageUrl="`${POSTER_PATH}${movie.poster_path}`" :percentage="Math.trunc(movie.vote_average * 10)" />
        </MovieGrid>
        <PaginationPage :page="page" :totalPages="movieResponse?.total_pages || 0" :data="movieResponse?.results"
          @on-previous-click="previousPage" @on-next-click="nextPage" />

        <TypographyComponent v-if="movieResponse?.results?.length === 0">
          No movie found, change your search criteria and try again.
        </TypographyComponent>

        <TypographyComponent v-if="error">
          An error occurred, please try again later.
        </TypographyComponent>

      </PageElementContainer>
    </div>
  </LayoutComponent>
</template>



<style lang="scss" scoped>
.app-home-view__movie-search-form-container {
  margin-left: auto;
  margin-right: auto;

  margin-top: 80px;
  width: 710px;
  min-width: 500px;
}

.app-home-view__loader-container {
  margin-left: auto;
  margin-right: auto;
}
</style>