"use client";
import SupaClient from "@/lib/supabase/browser";
import { useQuery } from "@tanstack/react-query";
const initUser = {
  created_at: "",
  display_name: "",
  email: "",
  id: "",
  img_url: "",
};

export default function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const supabase = SupaClient();
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) {
        const { data: user } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", data.session?.user.id)
          .single();

        return user;
      }
      return initUser;
    },
  });
}
