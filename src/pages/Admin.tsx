import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useProjects, useCreateProject, useUpdateProject, useDeleteProject } from "@/hooks/useProjects";
import { useLinkedInPosts, useCreateLinkedInPost, useDeleteLinkedInPost } from "@/hooks/useLinkedInPost";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil, Trash2, Plus, LogOut, ArrowLeft, Linkedin, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useCategories, useCreateCategory, useDeleteCategory } from "@/hooks/useCategories";
import type { Tables } from "@/integrations/supabase/types";

type Project = Tables<"projects">;

const emptyForm = {
  title: "",
  description: "",
  image_url: "",
  category: "Community",
  tags: "",
  highlight: "",
  sort_order: 0,
};

const emptyPostForm = {
  title: "",
  snippet: "",
  post_url: "",
};

const Admin = () => {
  const { user, loading, isAdmin, signIn, signOut } = useAuth();
  const { data: projects, isLoading } = useProjects();
  const { data: linkedInPosts, isLoading: postsLoading } = useLinkedInPosts();
  const { data: categories } = useCategories();
  const createProject = useCreateProject();
  const updateProject = useUpdateProject();
  const deleteProject = useDeleteProject();
  const createLinkedInPost = useCreateLinkedInPost();
  const deleteLinkedInPost = useDeleteLinkedInPost();
  const createCategory = useCreateCategory();
  const deleteCategory = useDeleteCategory();
  const { toast } = useToast();

  const [form, setForm] = useState(emptyForm);
  const [postForm, setPostForm] = useState(emptyPostForm);
  const [newCategory, setNewCategory] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground">Loading admin panel...</p>
      </div>
    </div>
  );

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">{isSignUp ? "Create Account" : "Admin Login"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Email</Label>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="admin@example.com" />
            </div>
            <div>
              <Label>Password</Label>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <Button
              className="w-full"
              onClick={async () => {
                if (isSignUp) {
                  const { error } = await supabase.auth.signUp({ email, password });
                  if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
                  else toast({ title: "Account created!", description: "Check your email to verify, then sign in." });
                } else {
                  const { error } = await signIn(email, password);
                  if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
                }
              }}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            <button
              type="button"
              className="block w-full text-center text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Already have an account? Sign In" : "Need an account? Sign Up"}
            </button>
            <Link to="/" className="block text-center text-sm text-muted-foreground hover:text-foreground">
              ← Back to Portfolio
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6 space-y-4">
            <p className="text-muted-foreground">You don't have admin access.</p>
            <Button variant="outline" onClick={signOut}>Sign Out</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSubmit = async () => {
    const payload = {
      title: form.title,
      description: form.description,
      image_url: form.image_url || null,
      category: form.category,
      tags: form.tags ? form.tags.split(",").map((t) => t.trim()) : [],
      highlight: form.highlight || null,
      sort_order: form.sort_order,
    };

    try {
      if (editingId) {
        await updateProject.mutateAsync({ id: editingId, ...payload });
        toast({ title: "Project updated" });
      } else {
        await createProject.mutateAsync(payload);
        toast({ title: "Project created" });
      }
      setForm(emptyForm);
      setEditingId(null);
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  };

  const startEdit = (project: Project) => {
    setEditingId(project.id);
    setForm({
      title: project.title,
      description: project.description,
      image_url: project.image_url || "",
      category: project.category,
      tags: project.tags?.join(", ") || "",
      highlight: project.highlight || "",
      sort_order: project.sort_order || 0,
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this project?")) return;
    try {
      await deleteProject.mutateAsync(id);
      toast({ title: "Project deleted" });
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  };

  const handlePostSubmit = async () => {
    console.log("handlePostSubmit called with:", postForm);
    console.log("Current user:", user?.id, user?.email);
    try {
      const result = await createLinkedInPost.mutateAsync(postForm);
      console.log("Post created successfully:", result);
      toast({ title: "LinkedIn post added" });
      setPostForm(emptyPostForm);
    } catch (err: any) {
      console.error("Post creation error:", err);
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  };

  const handlePostDelete = async (id: string) => {
    if (!confirm("Delete this LinkedIn post?")) return;
    try {
      await deleteLinkedInPost.mutateAsync(id);
      toast({ title: "LinkedIn post deleted" });
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-1" /> Portfolio</Button>
            </Link>
            <h1 className="text-xl font-bold text-foreground">Admin Panel</h1>
          </div>
          <Button variant="outline" size="sm" onClick={signOut}>
            <LogOut className="w-4 h-4 mr-1" /> Sign Out
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 space-y-10">
        {/* LinkedIn Post Section */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Linkedin className="w-5 h-5" /> LinkedIn Posts ({linkedInPosts?.length || 0})
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add LinkedIn Post
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <Label>Title *</Label>
                  <Input value={postForm.title} onChange={(e) => setPostForm({ ...postForm, title: e.target.value })} placeholder="Post title" />
                </div>
                <div>
                  <Label>Snippet *</Label>
                  <Textarea value={postForm.snippet} onChange={(e) => setPostForm({ ...postForm, snippet: e.target.value })} placeholder="Short excerpt..." />
                </div>
                <div>
                  <Label>Post URL *</Label>
                  <Input value={postForm.post_url} onChange={(e) => setPostForm({ ...postForm, post_url: e.target.value })} placeholder="https://linkedin.com/posts/..." />
                </div>
                <Button onClick={handlePostSubmit} className="w-full" disabled={!postForm.title || !postForm.snippet || !postForm.post_url || createLinkedInPost.isPending}>
                  {createLinkedInPost.isPending ? "Adding..." : "Add Post"}
                </Button>
              </CardContent>
            </Card>
            <div className="lg:col-span-2 space-y-3">
              {postsLoading ? (
                <p className="text-muted-foreground">Loading...</p>
              ) : linkedInPosts?.length === 0 ? (
                <p className="text-muted-foreground">No LinkedIn posts yet.</p>
              ) : (
                linkedInPosts?.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-4 flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground truncate">{post.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{post.snippet}</p>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handlePostDelete(post.id)} className="text-destructive hover:text-destructive shrink-0">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                {editingId ? "Edit Project" : "Add Project"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Title *</Label>
                <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
              </div>
              <div>
                <Label>Description *</Label>
                <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              </div>
              <div>
                <Label>Image URL</Label>
                <Input value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} placeholder="https://..." />
              </div>
              <div>
                <Label>Category</Label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <Label>Tags (comma-separated)</Label>
                <Input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="Google, Community" />
              </div>
              <div>
                <Label>Highlight</Label>
                <Input value={form.highlight} onChange={(e) => setForm({ ...form, highlight: e.target.value })} placeholder="50+ Communities" />
              </div>
              <div>
                <Label>Sort Order</Label>
                <Input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleSubmit} className="flex-1" disabled={!form.title || !form.description}>
                  {editingId ? "Update" : "Create"}
                </Button>
                {editingId && (
                  <Button variant="outline" onClick={() => { setEditingId(null); setForm(emptyForm); }}>
                    Cancel
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Projects ({projects?.length || 0})
            </h2>
            {isLoading ? (
              <p className="text-muted-foreground">Loading...</p>
            ) : projects?.length === 0 ? (
              <p className="text-muted-foreground">No projects yet. Add your first one!</p>
            ) : (
              projects?.map((project) => (
                <Card key={project.id}>
                  <CardContent className="p-4 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground truncate">{project.title}</h3>
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full shrink-0">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <Button variant="ghost" size="icon" onClick={() => startEdit(project)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(project.id)} className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
