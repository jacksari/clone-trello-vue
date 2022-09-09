import { ref } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const counter = ref(0);

  const increment = () => {
    counter.value++;
  };

  const decrement = () => {
    counter.value--;
  };

  const reset = () => {
    counter.value = 0;
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
});
