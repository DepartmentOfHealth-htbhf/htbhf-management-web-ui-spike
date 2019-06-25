import React, { useEffect } from 'react'
import { H1, H3 } from '@govuk-react/heading'
import WarningText from '@govuk-react/warning-text'
import LoadingBox from '@govuk-react/loading-box'
import { AppLayout } from '../../layouts'

const Entity = ({ claim, hasLoaded }) =>
  hasLoaded ? (
    <React.Fragment>
      <H3><strong>Title</strong> {claim.title}</H3>
      <H3><strong>Status</strong> {claim.status}</H3>
    </React.Fragment>
  ) : null

const Claim = ({ getClaim, claimId, claim, meta }) => {
  useEffect(() => {
    getClaim(claimId)
  }, [getClaim, claimId])

  return (
    <AppLayout backLink="/claims">
      <H1>Claim</H1>
      {meta.read.hasErrored && <WarningText>There was an error loading the claim</WarningText>}
      <LoadingBox loading={meta.read.isLoading}>
        <Entity claim={claim} hasLoaded={meta.read.hasLoaded} />
      </LoadingBox>
    </AppLayout>
  )
}

export {
  Claim
}
