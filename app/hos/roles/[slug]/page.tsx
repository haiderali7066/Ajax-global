import { notFound } from "next/navigation";
import { getHosRoleBySlug, hosRoles } from "@/lib/hosRoles";
import HosRoleClient from "./HosRoleClient";

export function generateStaticParams() {
  return hosRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getHosRoleBySlug(slug);
  if (!role) return {};
  return {
    title: `${role.title} | AJAX Global HOS`,
    description: role.overview,
  };
}

export default async function HosRolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getHosRoleBySlug(slug);
  if (!role) notFound();

  return <HosRoleClient activeSlug={slug} />;
}
