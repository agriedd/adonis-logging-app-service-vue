import User from '#models/user'
import { userLogin } from '#validators/Auth/user_login'
import { createError } from '@adonisjs/core/exceptions'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default class UserLoginsController {
	async attempt({ request, response, auth, inertia }: HttpContext) {

		const payload = await request.validateUsing(userLogin)

		/**
		 * Find a user by email. Return error if a user does
		 * not exists
		 */
		const user = await User.findBy('email', payload.email)

		if (!user) {
			return inertia.render("home", {
				errors: {
					email: [
						"Invalid credentials"
					]
				}
			})
		}

		/**
		 * Verify the password using the hash service
		 */
		const isPasswordValid = await hash.verify(user.password, payload.password)

		if (!isPasswordValid) {
			return inertia.render("home", {
				errors: {
					email: [
						"Invalid credentials"
					]
				}
			})
		}

		await auth.use('web').login(user)

		/**
		 * Step 4: Send them to a protected route
		 */
		response.redirect('/dashboard')
	}

	async login({ response }: HttpContext) {
		response.redirect('/')
	}
}
