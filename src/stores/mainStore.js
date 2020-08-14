import { makeVar } from '@apollo/client'

export const country = makeVar('')

export default {
  read: () => ({
    country: country()
  })
}
