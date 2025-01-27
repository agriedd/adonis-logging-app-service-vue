/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UserLoginsController from '#controllers/Auth/user_logins_controller'
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home')
router.post('/login', [UserLoginsController, 'attempt'])

