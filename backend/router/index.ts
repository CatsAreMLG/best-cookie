import * as trpc from "@trpc/server"
import { z } from "zod"

import { getCookieById } from "@utils/getCookieById"

export const appRouter = trpc.router().query("get-cookie-by-id", {
  input: z.object({
    id: z.number(),
  }),
  async resolve({ input }) {
    const cookie = await getCookieById(input.id)
    return cookie
  },
})

// export type definition of API
export type AppRouter = typeof appRouter
