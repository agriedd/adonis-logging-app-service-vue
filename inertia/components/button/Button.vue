<script setup lang="ts">
interface Props {
  propName?: string
  primary?: boolean
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  primary: false,
})
const emit = defineEmits<{
  (e: 'update', payload: any): void
}>()
</script>

<template>
  <VBtn
    class="px-4 py-3 !font-medium text-sm !h-10 !normal-case !tracking-normal !rounded-md ring-offset-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-100 focus-visible:ring-offset-2"
    density="default"
    variant="flat"
    color="primary"
  >
    <slot></slot>
  </VBtn>
</template>
