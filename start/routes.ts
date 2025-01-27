/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UserLoginsController from '#controllers/Auth/user_logins_controller'
import DashboardController from '#controllers/Dashboard/dashboard_controller'
import AuthMiddleware from '#middleware/auth_middleware'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.on('/').renderInertia('home')
router.post('/login', [UserLoginsController, 'attempt'])

router.group(() => {
	router.get('/', [DashboardController, 'index'])
})
	.prefix("dashboard")
	.use(
		middleware.auth({
			guards: ['web']
		})
	)


