import { defineNuxtModule, createResolver, addRouteMiddleware, addServerHandler } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'app-lock',
    configKey: 'appLock'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
 const { resolve } = createResolver(import.meta.url)
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addServerHandler({
      route: '/api/app-lock/is-locked',
      handler: resolve('./runtime/server/api/is-locked'),
    })
    addServerHandler({
      route: '/api/app-lock/validate',
      handler: resolve('./runtime/server/api/validate.post'),
    })
    addRouteMiddleware({
      name: 'app-lock',
      path: resolve('./runtime/middleware/lock'),
      global: true,
    })
  }
})
