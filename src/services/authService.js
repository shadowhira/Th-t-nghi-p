import { userModel } from '~/models/userModel'
import { comparePassword } from '~/utils/password'
import { generateAccessToken } from '~/utils/token'

const login = async (email, password) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Find user by email
    const user = await userModel.findByEmail(email)
    // console.log('🐛: ➡️ login ➡️ user:', user)

    // Check if user exists
    if (!user) {
      throw new Error('User not exist!')
    }

    // Compare password
    // const isPasswordValid = await comparePassword(password, user.password)
    const isPasswordValid = await password === user.password
    if (!isPasswordValid) {
      throw new Error('Invalid email or password')
    }

    // Generate and return access token
    const accessToken = generateAccessToken(user._id)
    console.log(`Create success token: ${accessToken} \nFor email: ${email}`)

    return accessToken
  } catch (error) {
    throw error
  }
}

export const authService = {
  login
}
