# Example management UI

An example application outlining a possible approach for building an HTBHF management UI. The app is built using:

- [React](https://reactjs.org/)
- [GOV.UK react](https://github.com/govuk-react/govuk-react)
- [React router](https://reacttraining.com/react-router/)
- [Jest](https://jestjs.io/)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro)
- [ESlint](https://eslint.org/)
- [Babel](https://babeljs.io/)

## Questions / next steps:
- Should we use [typescript](https://www.typescriptlang.org/)?
- How should application and API authentication be implemented?
- Code splitting by route
- Implement GDS font more efficiently
- Implement form management
- If not using Flow or Typescript then implement React prop types

## Issues / bugs
- `react-markdown` should be a dependency of `govuk-react`
- Prop type errors exist on `govuk-react` `Link` component

## Build instructions
- Install dependencies by running `npm install`
- Start app on a local development server (with HMR) by running `npm run start:dev`
- Create a production build by running `npm run build`. This bundles deployable files to the `/dist` directory
- Test the application by running `npm test`

## Deployment to cloud foundry
To deploy to cloud foundry, build the application then run `cf push`. The app will be viewable at [https://management-ui.london.cloudapps.digital/](https://management-ui.london.cloudapps.digital/).

