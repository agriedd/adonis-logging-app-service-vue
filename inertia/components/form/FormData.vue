<script setup lang="ts">
import { VForm } from 'vuetify/components';

interface Props {
	disabled?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
	(e: 'update', payload: any): void
	(e: 'submit', payload: { event: Event, element: HTMLFormElement }): void
}>()

const submit = (e: Event)=>{
	emit('submit', { event: e, element: e.target as HTMLFormElement })
}
</script>

<template>
	<VForm :disabled @submit.prevent="submit">
		<slot></slot>
	</VForm>
</template>