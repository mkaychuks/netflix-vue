<script setup lang="ts">
import type { MovieType } from "@/types/MovieType";
import { FaHeart, FaRegHeart } from "@kalimahapps/vue-icons";
import { ref } from "vue";

// defining the prop for this
defineProps<{
  movie: MovieType;
}>();

const like = ref<boolean>(false);

// saving the show
const saveShow = async () => {
  like.value = !like.value;
  // if (user?.email) {
  //   setLike(!like);
  //   setSaved(true);
  //   await updateDoc(currentUserID, {
  //     savedShows: arrayUnion({
  //       id: movie?.id,
  //       title: movie?.title,
  //       img: movie?.backdrop_path,
  //     }),
  //   });
  // } else {
  //   navigate("/login");
  // }
};
</script>
<template>
  <div
    class="w-[160px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
  >
    <img
      :src="`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`"
      :alt="movie?.title"
      class="w-full h-auto block"
    />
    <div
      class="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 text-white hover:opacity-100"
    >
      <p
        class="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center"
      >
        {{ movie?.title }}
      </p>
      <p @click="saveShow">
        <FaHeart v-if="like" class="absolute top-4 left-4 text-gray-300" />
        <FaRegHeart v-else class="absolute top-4 left-4 text-gray-300" />
      </p>
    </div>
  </div>
</template>
