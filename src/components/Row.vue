<script setup lang="ts">
import { MdChevronLeft, MdChevronRight } from "@kalimahapps/vue-icons";
import type { MovieType } from "@/types/MovieType";
import { api } from "@/utils/api";
import { computed, onMounted, ref } from "vue";
import Movie from "./Movie.vue";

const movies = ref<MovieType[]>([]); // a ref that holds the api result
const prop = defineProps<{
  title: string;
  fetchUrl: string;
  rowID: string;
}>();

const fetchUrl = computed(() => prop.fetchUrl as string);
const rowID = computed(() => prop.rowID as string);

// the function that calls the api
const getMovies = async () => {
  await api
    .get(fetchUrl.value)
    .then((res) => {
      const moviesList: MovieType[] = res.data.results as MovieType[]; // type casting to enable types;
      movies.value = moviesList;
    })
    .catch((err) => console.log(err));
};
// the one-time call trigger, similar to useEffect() in ReactJS
onMounted(() => getMovies());

// the slider for the buttons
const slideLeft = () => {
  const slider: HTMLElement | null = document.getElementById(
    "slider" + rowID.value
  );
  if (slider) {
    slider.scrollLeft = slider?.scrollLeft - 500;
  }
};
const slideRight = () => {
  const slider: HTMLElement | null = document.getElementById(
    "slider" + rowID.value
  );
  if (slider) {
    slider.scrollLeft = slider?.scrollLeft + 500;
  }
};
</script>
<template>
  <h2 className="text-white font-bold md:text-xl p-4">{{ prop.title }}</h2>
  <div className="relative flex items-center group">
    <MdChevronLeft
      class="bg-white rounded-full text-3xl left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
      @click="slideLeft"
    />
    <div
      class="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      :id="`slider${rowID}`"
    >
      <!-- the movie -->
      <Movie v-for="(movie, id) in movies" :key="id" :movie="movie" />
    </div>
    <MdChevronRight
      class="bg-white rounded-full right-0 text-3xl absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
      @click="slideRight"
    />
  </div>
</template>
