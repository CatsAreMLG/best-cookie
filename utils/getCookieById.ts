import cookies from "@db/cookies"
import Cookies from "@ts/interfaces/cookies.interface"

export const getCookieById: (id?: number) => Cookies = (id?: number) => {
  return cookies[id!]
}
