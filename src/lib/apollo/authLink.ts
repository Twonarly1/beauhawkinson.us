import { setContext } from '@apollo/client/link/context'
import { GITHUB_ACCESS_TOKEN } from '../config/env'

const authLink = setContext((_, { headers }) => {
  const token = process.env.GITHUB_ACCESS_TOKEN

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export default authLink
