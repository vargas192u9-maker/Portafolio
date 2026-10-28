import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.siteUrl, lastModified: new Date() },
    ...projects.map((p) => ({ url: `${profile.siteUrl}/proyectos/${p.slug}`, lastModified: new Date() })),
  ];
}
