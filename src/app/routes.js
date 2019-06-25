import { pages } from './views'

const routes = [
  {
    path: '/',
    exact: true,
    component: pages.Dashboard
  },
  {
    path: '/claims',
    exact: true,
    component: pages.Claims
  },
  {
    path: '/claims/:id',
    component: pages.Claim
  }
]

export {
  routes
}
