<script setup lang="ts">
import { useVModels } from '@vueuse/core'

interface Props {
  modelValue?: string
  primary?: boolean
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  primary: false,
})
const emit = defineEmits<{
  (e: 'update:modelValue', payload: string): void
}>()

const { modelValue: input } = useVModels(props, emit)
</script>

<template>
  <VTextField :label v-model="input" />
</template>

<style lang="scss">
.v-field__outline {
  --v-field-border-opacity: 0.15;
}
</style>
