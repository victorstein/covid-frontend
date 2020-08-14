import { gql } from '@apollo/client'

export const GET_COUNTRY = gql`
  query getCountry (
    $name: String
  ) {
    country: countryStatistics (
      name: $name
    ) {
      continent
      country
      population
      cases {
        new
        active
        critical
        recovered
        total
      }
      deaths {
        new
        total
      }
      tests {
        total
      }
      time
    }
  }
`
