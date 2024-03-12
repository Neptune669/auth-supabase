"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SupaClient from "@/lib/supabase/browser";
import { Github } from "lucide-react";
import { useSearchParams } from "next/navigation";
export default function Auth() {
  const params = useSearchParams();
  const next = params.get("next") || "/";
  enum Provider {
    Google = "Google",
    Github = "Github",
    // Add other providers here
  }
  const handleLogin = (provider: any) => {
    const supabase = SupaClient();
    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + next,
      },
    });
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Card className="h-80 flex justify-evenly flex-col ring-0 ">
        <CardHeader>
          <CardTitle>Welcome to Raven Auth</CardTitle>
          <CardDescription>
            Get started by signing in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex  flex-col items-center justify-center gap-4 ">
          <Button onClick={() => handleLogin("Github")} className="w-full">
            <Github className=" h-6 w-6" />
          </Button>
          <Button onClick={() => handleLogin("Google")} className="w-full">
            Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
