import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query"
import { getUser } from "../../utils/getUser";
import { supabase } from "../../../supabaseClient";

export default function ProfileProjectsSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [previewUrl, setPreviewUrl] = useState("");
    const { data, isLoading, error } = useQuery({
        queryKey: ['getUser'],
        queryFn: getUser
    })
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        if (data?.data?.user?.user_metadata?.projects) {
          setProjects(data.data.user.user_metadata.projects);
        }
      }, [data]);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: "",
            description: "",
            photo: null,
        },
    });

    const watchedPhoto = watch("photo");

    useEffect(() => {
        const file = watchedPhoto?.[0];
        if (!file) {
            setPreviewUrl("");
            return;
        }

        const objectUrl = URL.createObjectURL(file);
        setPreviewUrl(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [watchedPhoto]);

    function closeModal() {
        setIsModalOpen(false);
        setPreviewUrl("");
        reset();
    }
    async function onCreateProject(values) {
        const prev = [...projects];
      
        const id = crypto.randomUUID();
      
        const optiProject = {
          id,
          tag: `Project #${projects.length + 1}`,
          title: values.title.trim(),
          description: values.description.trim(),
          image: previewUrl || placeholder,
        };
      
        setProjects((p) => [...p, optiProject]);
        const file=watchedPhoto?.[0]
        closeModal();
      
        try {
          const { data: storageData, error: storageError } = await supabase.storage
            .from("avatars")
            .upload(`project_${id}`, file);
      
          if (storageError) throw storageError;
      
          const { data: publicUrlData } = supabase.storage
            .from("avatars")
            .getPublicUrl(storageData.path);
      
          const newProject = {
            ...optiProject,
            image: publicUrlData.publicUrl,
          };
      
          const updatedProjects = [...prev, newProject];
      
          await supabase.auth.updateUser({
            data: { projects: updatedProjects },
          });
      
          setProjects(updatedProjects);
      
        } catch (e) {
          setProjects(prev);
        }
      }
      
    if (isLoading) {
        return <><Skeleton height={24} width={160} /></>;
    }
    return (
        <>
            <section className="mt-12 rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(16,24,40,0.06)]">
                <header className="mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">Projects</h2>
                </header>

                <div className="grid gap-6 lg:grid-cols-[repeat(3,minmax(0,1fr))_280px] ">

                    {projects.map((project) => (
                        <article key={project.id} className="flex flex-col">
                            <div className="relative h-44 overflow-hidden rounded-2xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-slate-900/30" />
                            </div>

                            <div className="mt-4">
                                <p className="text-xs text-slate-400">{project.tag}</p>
                                <h3 className="mt-1 text-2xl font-bold text-slate-800">{project.title}</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>
                            </div>
                        </article>
                    ))}

                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="flex min-h-72 w-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/20 text-center transition hover:bg-slate-50"
                    >
                        <span className="text-4xl leading-none text-slate-400">+</span>
                        <span className="mt-3 text-2xl font-bold text-slate-500">Create a New Project</span>
                    </button>
                </div>
            </section>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
                    <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
                        <div className="mb-5 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-800">Create Project</h3>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="rounded-lg px-2 py-1 text-slate-500 hover:bg-slate-100"
                            >
                                X
                            </button>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit(onCreateProject)}>
                            <div>
                                <label className="mb-1 block text-sm font-semibold text-slate-700">Photo</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="w-full rounded-lg border border-slate-300 p-2 text-sm"
                                    {...register("photo", {
                                        required: "Project photo is required",
                                    })}
                                />
                                {errors.photo && (
                                    <p className="mt-1 text-xs text-red-500">{errors.photo.message}</p>
                                )}
                            </div>

                            {previewUrl && (
                                <img
                                    src={previewUrl}
                                    alt="Project preview"
                                    className="h-36 w-full rounded-xl object-cover"
                                />
                            )}

                            <div>
                                <label className="mb-1 block text-sm font-semibold text-slate-700">Title</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border border-slate-300 p-2 text-sm outline-none focus:border-cyan-400"
                                    placeholder="Enter title"
                                    {...register("title", {
                                        required: "Title is required",
                                    })}
                                />
                                {errors.title && (
                                    <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-semibold text-slate-700">Description</label>
                                <textarea
                                    rows={4}
                                    className="w-full rounded-lg border border-slate-300 p-2 text-sm outline-none focus:border-cyan-400"
                                    placeholder="Enter description"
                                    {...register("description", {
                                        required: "Description is required",
                                    })}
                                />
                                {errors.description && (
                                    <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>
                                )}
                            </div>

                            <div className="flex justify-end gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-600"
                                >
                                    Create Project
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
