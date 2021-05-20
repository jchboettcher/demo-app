const jwt = require('jsonwebtoken')

const tokenSecret = 'qppvaojdovowauilbrydfhjsem'
export const decodeToken = token => {
  if (!token) {
    return false
  }
  try {
    return jwt.verify(token, tokenSecret)
  } catch {
    return false
  }
}