<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

# App Lock for Nuxt 3

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

The **App Lock** module adds a password protection layer to your Nuxt 3 applications, ideal for controlling access during development or quality control (QC) phases. This module is designed to prevent search engines from indexing development sites and to restrict unauthorized access to non-production environments.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- **Environment-Driven Activation**: The lock screen is enabled only when the `APP_LOCK_PASSWORD` environment variable is set, ensuring that production environments remain unaffected.
- **Password Protection**: Access to the Nuxt application requires entering a valid password, defined in the environment variable `APP_LOCK_PASSWORD`.
- **Prevention of Indexing and Unauthorized Access**: Helps to prevent search engines from indexing development sites and restricts public access to QC or development environments.


## Quick Setup 

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @rashidpathiyil/app-lock
```

OR

## Installation

1. **Install the Module**

```bash
npm install @rashidpathiyil/app-lock
```

or if you use yarn:

```bash
pnpm add @rashidpathiyil/app-lock
```

2. **Configure Nuxt**

Add the module to your `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
  modules: ['@rashidpathiyil/app-lock'], // Replace with your actual module name
})
```

## Configuration

1. **Set the Environment Variable**

Define the `APP_LOCK_PASSWORD` in your `.env` file to activate the App Lock.

```env
APP_LOCK_PASSWORD=yourpasswordhere
```

Replace `yourpasswordhere` with the password you wish to use for accessing your Nuxt application.

## Usage

When the `APP_LOCK_PASSWORD` environment variable is set, the App Lock screen will automatically activate, requiring users to enter the password to access the application. If the variable is not set or is removed, the App Lock screen will not appear, allowing normal access to the application.

## Security Note

- This module is intended for use in development and QC environments. Do not rely on it as the sole security measure for sensitive or production environments.
- Always ensure your environment variables are securely managed and not exposed in your application's client-side code.


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
