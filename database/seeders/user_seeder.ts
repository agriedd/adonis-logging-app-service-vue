import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.query().whereNotNull('id').delete()
    const userExists = await User.query().first()
    if (!userExists) {
      await User.create({
        email: 'admin@logger.com',
        password: 'password',
        fullName: 'Admin',
      })
    }
  }
}
