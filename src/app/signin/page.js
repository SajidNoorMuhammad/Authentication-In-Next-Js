import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "../../../auth"

export default async function SignIn() {

    const session = await auth();
    console.log(session)

    return (
        <div className=" flex justify-center items-center mx-auto container">
            {
                session ?
                    <div className=" flex flex-col justify-center items-center">
                        <img src={session?.user?.image} className=" w-[100px] h-[100px] rounded-full flex justify-center" />
                        <h1 className=" font-bold">{session?.user?.name}</h1>
                        <h1 className=" font-bold">{session?.user?.email}</h1>
                        <form
                            action={async () => {
                                "use server"
                                await signOut("google" )
                            }}
                        >
                            <button type="submit" className=" border-2 border-blue-600 p-3 rounded-md mt-4 text-blue-600 bg-blue-200">Sign Out</button>
                        </form>

                    </div>
                    :
                    <div>
                        <form
                            action={async () => {
                                "use server"
                                await signIn("google")
                            }}
                        >
                            <button type="submit" className=" border-2 border-blue-600 p-3 rounded-md mt-4 text-blue-600 bg-blue-200">Signin with Google</button>
                        </form>

                        <form
                            action={async () => {
                                "use server"
                                await signIn("github")
                            }}
                        >
                            <button type="submit" className=" border-2 border-blue-600 p-3 rounded-md mt-4 text-blue-600 bg-blue-200">Signin with GitHub</button>
                        </form>
                    </div>
            }

        </div>
    )
}