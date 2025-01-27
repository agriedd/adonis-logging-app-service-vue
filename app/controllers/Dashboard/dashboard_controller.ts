import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  async index({ response, request, inertia, auth }: HttpContext) {
    const user = auth.user
    return inertia.render('dashboard/dashboard', {
      user,
    })
  }
}
