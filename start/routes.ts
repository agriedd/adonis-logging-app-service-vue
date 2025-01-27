/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const UserLoginsController = () => import('#controllers/Auth/user_logins_controller')
const DashboardController = () => import('#controllers/Dashboard/dashboard_controller')
const LogoutsController = () => import('#controllers/Auth/logouts_controller')

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.on('/').renderInertia('home')

/**
 * Auth
 *
 */
router.post('/login', [UserLoginsController, 'attempt'])
router.get('/login', [UserLoginsController, 'login'])
router.delete('/logout', [LogoutsController, 'logout'])

router
  .group(() => {
    router.get('/', [DashboardController, 'index'])
  })
  .prefix('dashboard')
  .use(
    middleware.auth({
      guards: ['web'],
    })
  )
