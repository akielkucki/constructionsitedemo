import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/components";
import { ProjectPageClient } from "./ProjectPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  return siteConfig.projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} in ${project.city}, ${project.state} | ${siteConfig.company.name}`,
    description: `${project.description} Professional ${project.category.toLowerCase()} project in ${project.city}, ${project.state} by ${siteConfig.company.name}.`,
    keywords: [
      project.category,
      project.title,
      project.city,
      project.state,
      "construction",
      "remodeling",
      siteConfig.company.name,
    ],
    openGraph: {
      title: `${project.title} | ${siteConfig.company.name}`,
      description: project.description,
      type: "article",
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = siteConfig.projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 2);

  return <ProjectPageClient project={project} relatedProjects={relatedProjects} />;
}
