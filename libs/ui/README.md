# Megaport UI Component Library

## Description

This project contains all the UI elements used in Megaport's new Vue 3 applications. Built with Vue 3, Typescript and Storybook, this project has been built with accessibility and responsiveness in mind, ensuring that the components are modern and easy to use.

## Git setup

This repository is maintained within the front-end monorepo project on our private GitLab repository. You must clone the entire monorepo to contribute to this project.

See the parent readme in the monorepo for more instructions on getting started with the monorepo itself.

## System requirements

Standard dev environment with `pnpm` available.

[Main differences between pnpm and npm](https://pnpm.io/pnpm-cli)

Browser support: Chrome 55+, Edge 12+, Firefox 53+, Opera 42+, Safari 10.1+

## Installation

It is recommended that the parent monorepo readme is followed for initial installation. The Megaport UI project specific commands can be found below:

### Install project dependencies

Note this will install dependencies across the entire monorepo.

```bash
pnpm install
```

### Start storybook server

```bash
nx run ui:dev
```

### Run storybook test runner

```bash
nx run ui:test
```

### Run storybook test runner in watch mode

This will automatically rerun tests as changes are made to them or the source code.

```bash
nx run ui:test:watch
```

### Create production build

```bash
nx run ui:build
```

## Installing Megaport UI in a project

In your project where you want to use Megaport UI:

```bash
pnpm add --filter {project} @megaport/ui
```

Ensure that the following has been added to the `package.json` in your project.

```json
"@megaport/ui": "workspace:*",
```

NOTE: Ensure you change `workspace:^` to `workspace:*` to always get the latest build of Megaport UI in your project.

Import the projects styles in your `main.ts` or the main styles file (usually `styles.css`):

```typescript
import '@megaport/ui/dist/style.css'
```

Then you can either use Megaport UI as a plugin by adding the following to your `main.ts`:

```typescript
import { createApp } from 'vue'
import UI from '@megaport/ui'

const app = createApp({})
app.use(UI)
```

If you install it in this way, all the components within Megaport UI will be registered as global components under the names defined in the respective components.

Or, you can import each component as it is required:

```html
<script setup>
  import { MpButton } from '@megaport/ui'
</script>

<template>
  <MpButton>Submit</MpButton>
</template>
```

## Developing a component

The easiest way to develop a component is to consult the existing ones in the project to get a sense on what is needed for each component.

### Component structure

Components are broken into `base` or `compound` components. Depending on the component type you're making, they should go into their respective folders.

Each component itself is broken down to at most three distinct files.

Folder names should be in `kebab-case` while file names should be in `PascalCase`.

```
components
│  index.ts
└─ base
   └─ new-component
      │ NewComponent.spec.ts
      │ NewComponent.stories.ts
      │ NewComponent.styles.ts
      │ NewComponent.vue
```

### Styling with TailwindCSS

We use [TailwindCSS](https://tailwindcss.com/docs) for styling components.

### Storybook story

For detailed information on how to write stories, visit the following link:

[How to write stories | Storybook](https://storybook.js.org/docs/vue/writing-stories/introduction)

### Writing tests

We are using [Vue Testing Library](https://github.com/testing-library/vue-testing-library) along with [Jest Axe](https://github.com/NickColley/jest-axe) to test our stories.

Using Jest Axe ensures that our UI library components are tested for any accessibility violations alongside the standard testing suite offered by Vue Testing Library.

### Exporting component

Make sure to remember to export your component in `index.ts` file in `src/components`.

```typescript
export { default as MpNewComponent } from './new-component/NewComponent.vue'
```

## Workspace configuration

### Avoiding unwanted @rule warnings

To avoid unwanted @rule warnings, we can load custom CSS datasets.

Instead of disabling all warnings for unknown @rules, which would also ignore potentially helpful warnings, we can add our allowed @rules to `./.vscode/css-data.json`.

See <https://github.com/microsoft/vscode-css-languageservice/blob/main/docs/customData.md> and <https://github.com/tailwindlabs/tailwindcss/discussions/5258> for further reference.
