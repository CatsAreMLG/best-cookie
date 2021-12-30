const MAX_COOKIES_ID = 25

import cookies from "@db/cookies"

export const getRandomCookie: (notThisOne?: number) => number = (
  notThisOne?: number
) => {
  const cookieNumber = Math.floor(Math.random() * MAX_COOKIES_ID + 1)

  if (cookieNumber !== notThisOne) return cookieNumber
  return getRandomCookie(notThisOne)
}

export const getOptionsForVote = () => {
  const firstId = getRandomCookie()
  const secondId = getRandomCookie(firstId)

  return [firstId, secondId]
}
