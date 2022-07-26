<script setup>
defineProps({
  type: {
    type:String,
    validator(value) {
      // The value must match one of these strings
      return  ['primary' , 'ghost' , 'dashed' , 'link' , 'text' | 'default'].includes(value)
    },
    default:'default'
  },
})
</script>

<template>
  <button>Button</button>
</template>