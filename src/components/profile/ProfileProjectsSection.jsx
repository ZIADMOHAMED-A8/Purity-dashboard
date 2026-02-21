import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query"
import Skeleton from "react-loading-skeleton";
import placeholder from "../../assets/Image.png";
import { getUser } from "../../utils/getUser";
import ProjectCreateModal from "./ProjectCreateModal";
import { onCreateProject } from "./helpers/onCreateProject";

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
    async function handleCreateProject(values) {
        await onCreateProject({
            values,
            projects,
            setProjects,
            previewUrl,
            watchedPhoto,
            closeModal,
            placeholder,
        });
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

            <ProjectCreateModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                handleSubmit={handleSubmit}
                onSubmit={handleCreateProject}
                register={register}
                errors={errors}
                previewUrl={previewUrl}
            />
        </>
    );
}
