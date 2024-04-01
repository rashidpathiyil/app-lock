import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const password = process.env.APP_LOCK_PASSWORD
  if (!password)
    return { valid: true }

  const body = await readBody(event)

  if (body.password === password)
    return { valid: true }
  else
    return { valid: false }
})
