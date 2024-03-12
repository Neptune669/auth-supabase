"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import useUser from "@/app/hook/useUser";
import Image from "next/image";
import { User2 } from "lucide-react";
import SupaClient from "@/lib/supabase/browser";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { ProtectedPaths } from "@/lib/constant";

export default function Profile() {
  const { isFetching, data } = useUser();
  const queryClient = useQueryClient();
  const router = useRouter();
  const pathname = usePathname();

  if (isFetching) {
    return <></>;
  }
  const handleSignOut = async () => {
    const supabase = SupaClient();
    queryClient.clear();
    await supabase.auth.signOut();
    router.refresh();
    if (ProtectedPaths.includes(pathname)) {
      router.replace("/auth?next=" + pathname);
    }
  };
  return (
    <div>
      {!data?.id ? (
        <Link className="animate-fade" href="/auth">
          <Button>Login</Button>
        </Link>
      ) : (
        <>
          {data?.img_url ? (
            <Image
              className="rounded-full cursor-pointer animate-fade"
              src={data?.img_url || ""}
              alt={data?.display_name || ""}
              width={50}
              height={50}
              onClick={handleSignOut}
            />
          ) : (
            <div className="h-[50px] cursor-pointer animate-fade flex items-center justify-center ring-2 rounded-full text-2xl w-[50px] ">
              <h1 onClick={handleSignOut}>
                {data?.display_name?.slice(0, 1) || ""}
              </h1>
            </div>
          )}
        </>
      )}
    </div>
  );
}
