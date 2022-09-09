<script setup lang="ts">
import { useCounterStore } from "./pinia/useCounterStore";

const store = useCounterStore();


</script>

<template>
  <div class="p-5">
    <h1 className="text-xl font-bold ">Hello {{ store.counter }} !</h1>
    <div class="mt-2">
      <button @click="store.increment" class="px-2 py-1 bg-red-400 text-white rounded-md mr-2">Agregar</button>
      <button @click="store.reset" class="px-2 py-1 bg-red-400 text-white rounded-md mr-2">Reset</button>
      <button @click="store.decrement" class="px-2 py-1 bg-red-400 text-white rounded-md mr-2">Decrementar</button>
    </div>
  </div>
</template>

<style scoped></style>
