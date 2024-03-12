import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="flex gap-4">
        <Link href="/dashboard" className={buttonVariants({ variant: "link" })}>
          Dashboard
        </Link>
        <Link href="/profile" className={buttonVariants({ variant: "link" })}>
          Profile
        </Link>
      </div>
    </>
  );
}
