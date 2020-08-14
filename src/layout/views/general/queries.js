import { gql } from '@apollo/client'

export const COUNTRY_STATISTICS = gql`
  query countries (
    $name: String
  ) {
    country: countryStatistics (
      name: $name
    ) {
      continent
      country
      population
      cases {
        total
      }
      time
    }
    mainStore @client {
      country
    }
  }
`
