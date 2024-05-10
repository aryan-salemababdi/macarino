import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import SigninPage from './../../components/Molecule/SigninPage/SigninPage';


async function Signin() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return <SigninPage />;
}

export default Signin;