'use strict'

const User = use('App/Models/User')

class AuthController {
  async register({request}){
    const data = request.only(['username', 'email', 'password'])

    await User.create(data)

    return User
  }

  async authenticate({request, auth}){
    const {email, password} = request.all()

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = AuthController
