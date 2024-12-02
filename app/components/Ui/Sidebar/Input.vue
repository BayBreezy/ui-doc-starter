<template>
  <UiInput v-model="model" data-sidebar="input" :class="sideBarInputStyles({ class: props.class })">
    <slot />
  </UiInput>
</template>

<script lang="ts">
  import type { HTMLAttributes } from "vue";

  export const sideBarInputStyles = tv({
    base: "border-sidebar-input bg-sidebar focus-visible:ring-sidebar-ring h-8 w-full shadow-none focus-visible:ring-2",
  });
</script>
<script setup lang="ts">
  const props = defineProps<{
    /**
     * Additional classes to apply to the parent element.
     */
    class?: HTMLAttributes["class"];
  }>();

  const model = defineModel<any>();
</script>
