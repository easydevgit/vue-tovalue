<script setup lang="ts">
import { ref } from "vue";
import SearchComponent from "./SearchComponent.vue";

const name = ref('John');

</script>

<template>
  <div>
    <button @click="name = 'John'">John</button>
    <button @click="name = 'Terry'">Terry</button>
    <button @click="name = 'Oleta'">Oleta</button>
    <SearchComponent :name="name" />
  </div>
</template>