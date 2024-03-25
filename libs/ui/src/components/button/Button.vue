<script setup>
import { RouterLink } from 'vue-router'

defineOptions({
  // Don't auto-apply fallthrough attributes to the root node since we're already applying them manually
  inheritAttrs: false,
})

const props = defineProps({
  text: {
    type: String,
  },
  // RouterLink
  to: {
    type: String,
  },
  replace: {
    type: Boolean,
  },
  activeClass: {
    type: String,
  },
})
</script>

<template>
  <!-- Router link -->
  <RouterLink v-if="props.to"
    :to="props.to"
    :replace="props.replace"
    v-bind="$attrs">
    <slot>{{ props.text }}</slot>
  </RouterLink>
  <!-- Regular button -->
  <button v-else
    v-bind="$attrs">
    <slot>{{ props.text }}</slot>
  </button>
</template>