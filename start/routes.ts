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
import LogoutsController from '#controllers/Auth/logouts_controller'

router.on('/').renderInertia('home')

/**
 * Auth
 * 
 */
router.post('/login', [UserLoginsController, 'attempt'])
router.get('/login', [UserLoginsController, 'login'])
router.delete('/logout', [LogoutsController, 'logout'])

router.group(() => {
	router.get('/', [DashboardController, 'index'])
})
	.prefix("dashboard")
	.use(
		middleware.auth({
			guards: ['web']
		})
	)


