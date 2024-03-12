import Link from "next/link";
import Profile from "./Profile";
import useUser from "@/app/hook/useUser";

export default function NavBar() {
  return (
    <nav className="flex justify-between h-20 items-center">
      <Link href="/">
        <h1 className="text-3xl font-bold">Raven</h1>
      </Link>
      <Profile />
    </nav>
  );
}
