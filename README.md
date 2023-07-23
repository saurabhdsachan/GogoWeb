# Gogo Portal

1. Gogo Main Website
2. Gogo Web App

## Installation

1. To get this project files locally on your machine, you can clone this
   repository by running the following command on your terminal or command line:

2. Install all the dependency packages found in the `package.json` files across
   the monorepo apps by running `yarn install` from the project root directory.
3. To start the development servers of all the applications in your monorepo in
   parallel, simply run `yarn dev`. To start an individual app the monorepo,
   run: `yarn workspace <name> dev` (_name_: is found/set in the package.json
   for each individual app folder)

## Apps & Packages

- `apps/web-static`: a sample documentation [Next.js]() app
- `apps/web-dashboard`: a sample web [Next.js]() app
- `packages/ui`: a stub React component library shared by both `web` and `docs`
  applications
- `packages/config`: shared `tailwindcss`, `eslint` configurations (includes
  `eslint-config-next`, `eslint-config-prettier`, `eslint-plugin-prettier`
  etc..)
- `packages/tsconfig`: `tsconfig.json`s which can be used by extending them
  throughout the monorepo
