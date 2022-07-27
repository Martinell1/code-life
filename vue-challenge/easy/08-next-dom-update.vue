<script setup>
import { ref, nextTick  } from 'vue';

const count = ref(0);
const counter = ref(null);

async function increment() {
  count.value++;
  await nextTick();
  /**
   * DOM is not yet updated, how can we make sure that the DOM gets updated
   * Make the output be true
   */
  console.log(+counter.value.textContent === 1);
}
</script>

<template>
  <button ref="counter" @click="increment">
    {{ count }}
  </button>
</template>
