import { useState } from "react"
import { getOptionsForVote } from "@utils/getRandomCookie"
import { trpc } from "@utils/trpc"
import type { NextPage } from "next"

const Home: NextPage = () => {
  const [ids, updateIds] = useState(() => getOptionsForVote())

  const [first, second] = ids

  const firstCookie = trpc.useQuery(["get-cookie-by-id", { id: first }])

  console.log(firstCookie.data)

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Cookie is Better?</div>
      <div className="p-2"></div>
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-16 h-16 bg-red-200 text-center text-black">
          {first}
        </div>
        <div className="p-8">vs</div>
        <div className="w-16 h-16 bg-red-200 text-center text-black">
          {second}
        </div>
      </div>
    </div>
  )
}

export default Home
