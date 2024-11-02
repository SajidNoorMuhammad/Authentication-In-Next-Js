import Link from "next/link";
import { auth, signOut } from "../../auth"

export default async function Home() {

  const session = await auth();

  return (
    <div>
      <h1 className=" bg-blue-600 p-3 text-white mb-10 text-3xl font-semibold text-center">Authentication By Using Next Auth</h1>

      {
        session ?
          <div>
            <p className=" text-3xl text-blue-600 font-normal underline text-center mt-[10%]">Welcome {session?.user?.name}</p>
            <form
              action={async () => {
                "use server"
                await signOut("google" || "github")
              }}
            >
              <button type="submit" className=" ml-[45%] border-2 border-blue-600 p-3 rounded-md mt-4 text-blue-600 bg-blue-200">Sign Out</button>
            </form>
          </div>
          :
          <Link href={'/signin'} className=" ml-[45%] mx-auto border-2 border-blue-600 p-3 rounded-md mt-4 text-blue-600 bg-blue-200">Login to Continue</Link>
      }
    </div>
  )

}