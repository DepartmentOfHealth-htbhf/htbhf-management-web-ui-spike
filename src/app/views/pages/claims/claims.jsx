import React, { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { H1 } from '@govuk-react/heading'
import UnorderedList from '@govuk-react/unordered-list'
import ListItem from '@govuk-react/list-item'
import LoadingBox from '@govuk-react/loading-box'
import WarningText from '@govuk-react/warning-text'
import Link from '@govuk-react/link'
import { AppLayout } from '../../layouts'

const Claim = ({ claim }) => (
  <ListItem>
    <Link as={RouterLink} to={`/claims/${claim.id}`}>{claim.title}</Link>
  </ListItem>
)

const Claims = ({ getClaims, claims, meta }) => {
  useEffect(() => {
    getClaims()
  }, [getClaims])

  // TODO don't show page until network request complete for security
  // TODO implement better loading (e.g. skeleton content)
  return (
    <AppLayout backLink="/">
      <H1>Claims</H1>
      {meta.read.hasErrored && <WarningText>There was an error loading claims</WarningText>}
      <LoadingBox loading={meta.read.isLoading}>
        {meta.read.isLoading && <div style={{ height: '200px' }} />}
        <UnorderedList>
          {claims.map(claim => <Claim key={claim.id} claim={claim} />)}
        </UnorderedList>
      </LoadingBox>
    </AppLayout>
  )
}

export {
  Claims
}
