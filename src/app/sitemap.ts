import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/data/case-studies";

const SITE_URL = "https://yuta-97.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...CASE_STUDIES.map(project => ({
      url: `${SITE_URL}/project/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: project.featured ? 0.8 : 0.6,
    })),
  ];
}
