import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { H1 } from '@govuk-react/heading'
import UnorderedList from '@govuk-react/unordered-list'
import ListItem from '@govuk-react/list-item'
import Link from '@govuk-react/link'
import { AppLayout } from '../../layouts'

const Dashboard = () => (
  <AppLayout>
    <H1>Dashboard</H1>
    <UnorderedList>
      <ListItem>
        <Link as={RouterLink} to="/claims">Claims</Link>
      </ListItem>
    </UnorderedList>
  </AppLayout>
)

export {
  Dashboard
}
