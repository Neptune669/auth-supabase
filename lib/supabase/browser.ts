"use client";
import { Database } from "../types/supabase";
import { createBrowserClient } from "@supabase/ssr";

export default function SupaClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
