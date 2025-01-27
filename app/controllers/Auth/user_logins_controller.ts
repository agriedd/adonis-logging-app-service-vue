import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default class UserLoginsController {

	async attempt({ request, response, auth }: HttpContext) {

		const { email, password } = request.only(['email', 'password'])

		/**
		 * Find a user by email. Return error if a user does
		 * not exists
		 */
		const user = await User.findBy('email', email)

		if (!user) {
			return response.abort('404 Invalid credentials')
		}

		/**
		 * Verify the password using the hash service
		 */
		const isPasswordValid = await hash.verify(user.password, password)

		if (!isPasswordValid) {
			return response.abort('Invalid credentials')
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