<script setup lang="ts">
import User from '#models/user'
import { Head, useForm } from '@inertiajs/vue3'
import { shallowRef } from 'vue'
import Button from '~/components/button/Button.vue'
import FormData from '~/components/form/FormData.vue'
import TypographyLarge from '~/components/typography/TypographyLarge.vue'
import TypographyMuted from '~/components/typography/TypographyMuted.vue'

interface Props {
  user?: User
}

const props = defineProps<Props>()

const form = useForm<{}>({})

const loading = shallowRef(false)

const submit = () => {
  form.delete('/logout', {
    onStart: () => {
      loading.value = true
    },
    onFinish: () => {
      loading.value = false
    },
  })
}
</script>

<template>
  <Head title="Homepage" />

  <div class="p-4 flex justify-center items-center min-h-screen flex-col bg-zinc-900">
    <div
      class="border rounded-2xl max-w-sm w-full bg-zinc-800 text-white border-zinc-700 shadow group"
    >
      <div class="p-6 lg:p-10 lg:py-6 flex w-full flex-row-reverse items-center gap-4">
        <div
          class="bg-zinc-900 rounded-full w-12 aspect-[3/4] border-b-2 border-zinc-700 flex justify-center items-center text-sky-800 fill-sky-900 group-hover:fill-sky-500 transition-all group-hover:animate-pulse"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M5.962 17.674C7 19.331 7 20.567 7 22h2c0-1.521 0-3.244-1.343-5.389l-1.695 1.063zM16.504 3.387C13.977 1.91 7.55.926 4.281 4.305c-3.368 3.481-2.249 9.072.001 11.392.118.122.244.229.369.333.072.061.146.116.205.184l1.494-1.33a3.918 3.918 0 0 0-.419-.391c-.072-.06-.146-.119-.214-.188-1.66-1.711-2.506-6.017.001-8.608 2.525-2.611 8.068-1.579 9.777-.581 2.691 1.569 4.097 4.308 4.109 4.333l1.789-.895c-.065-.135-1.668-3.289-4.889-5.167z"
            ></path>
            <path
              d="M9.34 12.822c-1.03-1.26-1.787-2.317-1.392-3.506.263-.785.813-1.325 1.637-1.604 1.224-.41 2.92-.16 4.04.601l1.123-1.654c-1.648-1.12-3.982-1.457-5.804-.841-1.408.476-2.435 1.495-2.892 2.866-.776 2.328.799 4.254 1.74 5.405.149.183.29.354.409.512C11 18.323 11 20.109 11 22h2c0-2.036 0-4.345-3.201-8.601a19.71 19.71 0 0 0-.459-.577zm5.791-3.344c1.835 1.764 3.034 4.447 3.889 8.701l1.961-.395c-.939-4.678-2.316-7.685-4.463-9.748l-1.387 1.442z"
            ></path>
            <path
              d="m11.556 9.169-1.115 1.66c.027.019 2.711 1.88 3.801 5.724l1.924-.545c-1.299-4.582-4.476-6.749-4.61-6.839zm3.132 9.29c.21 1.168.312 2.326.312 3.541h2c0-1.335-.112-2.608-.343-3.895l-1.969.354z"
            ></path>
          </svg>
        </div>
        <div class="grow">
          <TypographyLarge> Hello {{ user?.fullName }} </TypographyLarge>
          <TypographyMuted> Selamat siang </TypographyMuted>
        </div>
      </div>
      <VDivider />
      <FormData @submit="submit" :disabled="loading">
        <div class="p-6 lg:p-10 flex gap-3 flex-col">
          <div class="pt-4">
            <Button type="submit" class="w-full">Keluar</Button>
          </div>
        </div>
      </FormData>
    </div>
  </div>
</template>
