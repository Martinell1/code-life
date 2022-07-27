<script setup>
const props = defineProps(['modelValue', 'modelModifiers']);
const emits = defineEmits(['update:modelValue']);

const updateModelValue = (e) => {
  let value = e.target.value;
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  emits('update:modelValue', value);
};
</script>

<template>
  <input type="text" :value="modelValue" @input="updateModelValue" />
</template>
