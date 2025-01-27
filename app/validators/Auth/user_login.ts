import vine from '@vinejs/vine'

export const userLogin = vine.compile(
  vine.object({
    email: vine.string().trim().email(),
    password: vine.string().minLength(4),
  })
)
