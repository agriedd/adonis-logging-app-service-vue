import type { HttpContext } from '@adonisjs/core/http'

export default class LogoutsController {
  async logout({ response, auth }: HttpContext) {
    await auth.use('web').logout()
    response.redirect('/')
  }
}
