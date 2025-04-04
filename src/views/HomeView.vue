<script setup lang="ts">
import Main from "@/components/Main.vue";
import Row from "@/components/Row.vue";
</script>

<template>
  <Main />
  <Row
    title="Upcoming"
    fetch-url="movie/upcoming?language=en-US&page=1"
    rowID="1"
  />
  <Row
    title="Popular"
    fetch-url="movie/popular?language=en-US&page=1"
    rowID="2"
  />
  <Row
    title="Trending"
    fetch-url="trending/movie/day?language=en-US"
    rowID="3"
  />
  <Row
    title="Top Rated"
    fetch-url="movie/top_rated?language=en-US&page=1"
    rowID="4"
  />
  <Row
    title="Horror"
    fetch-url="search/movie?query=horror&include_adult=false&language=en-US&page=1"
    rowID="5"
  />
</template>
