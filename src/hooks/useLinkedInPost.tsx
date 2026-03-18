import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useLatestLinkedInPost = () => {
  return useQuery({
    queryKey: ["linkedin-post-latest"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("linkedin_posts")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });
};

export const useLinkedInPosts = () => {
  return useQuery({
    queryKey: ["linkedin-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("linkedin_posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });
};

export const useCreateLinkedInPost = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (post: { title: string; snippet: string; post_url: string }) => {
      const { data, error } = await supabase.from("linkedin_posts").insert(post).select().single();
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["linkedin-posts"] });
      qc.invalidateQueries({ queryKey: ["linkedin-post-latest"] });
    },
  });
};

export const useDeleteLinkedInPost = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("linkedin_posts").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["linkedin-posts"] });
      qc.invalidateQueries({ queryKey: ["linkedin-post-latest"] });
    },
  });
};
