# Example management UI

An example application outlining a possible approach for building an HTBHF management UI. The app is built using:

- [(React](https://reactjs.org/)
- [GOV.UK react](https://github.com/govuk-react/govuk-react)
- [React router](https://reacttraining.com/react-router/)
- [Jest](https://jestjs.io/)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro)

## Questions / next steps:

- Should we use [typescript](https://www.typescriptlang.org/)?
- How should application and API authentication be implemented?
- Code splitting by route
- Implement GDS font more efficiently
- Implement form management
- If not using Flow or Typescript use React prop types

## Issues / bugs

- `react-markdown` should be a dependency of `govuk-react`
- Prop type errors exist on `govuk-react` `Link` component

## Deployment to cloud foundry
To deploy to cloud foundry, run `cf push` after doing a build.
You can then go to [https://management-ui.london.cloudapps.digital/](https://management-ui.london.cloudapps.digital/) to view the app.
