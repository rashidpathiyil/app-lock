import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const password = process.env.APP_LOCK_PASSWORD
  if (password)
    return { locked: true }
  else
    return { locked: false }
})
