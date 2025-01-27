import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export const UserFactory = factory
  .define(User, async ({ faker }) => {
    const password = await hash.make("password")
    return {
      fullName: faker.person.fullName,
      password,
      email: faker.internet.email(),
    }
  })
  .build()