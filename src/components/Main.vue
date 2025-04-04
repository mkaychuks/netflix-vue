<script setup lang="ts">
import type { MovieType } from "@/types/MovieType";
import { api } from "@/utils/api";
import { computed, onMounted, ref } from "vue";

const movies = ref<MovieType[]>([]); // a ref that holds the api result

// the function that calls the api
const getPopularMovies = async () => {
  await api
    .get("/movie/popular?language=en-US&page=1")
    .then((res) => {
      const moviesList: MovieType[] = res.data.results as MovieType[];
      movies.value = moviesList;
    })
    .catch((err) => console.log(err));
};

// the one-time call trigger, similar to useEffect() in ReactJS
onMounted(() => getPopularMovies());

// storing a value to this variable based on the condition served it
const movie = computed(() => {
  return movies.value[Math.floor(Math.random() * movies.value.length)];
});
</script>
<!-- the template -->
<template>
  <div className="w-full h-[550px] text-white">
    <div className="w-full h-full">
      <div
        className="w-full h-[550px] absolute bg-gradient-to-r from-black"
      ></div>
      <img
        :alt="movie?.title"
        className="w-full h-full object-cover"
        :src="`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`"
      />
      <div className="absolute w-full top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">{{ movie?.title }}</h1>
        <div className="my-4">
          <button
            className="border bg-gray-300 text-black border-gray-300 py-2 px-5"
          >
            Play
          </button>
          <button className="border ml-4 text-white border-gray-300 py-2 px-5">
            Watch Later
          </button>
        </div>
        <p className="text-gray-400 text-sm">
          Released: {{ movie?.release_date }}
        </p>
        <p
          className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200"
        >
          Released: {{ movie?.overview }}
        </p>
      </div>
    </div>
  </div>
</template>
