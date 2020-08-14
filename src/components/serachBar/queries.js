import { gql } from '@apollo/client'

export const COUNTRY_NAMES = gql`
  query getCountryNames {
    countryNames
  }
`
