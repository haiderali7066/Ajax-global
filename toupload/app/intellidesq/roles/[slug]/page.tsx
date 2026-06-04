import { notFound } from "next/navigation";
import { getIntelliDesqRoleBySlug, intellidesqRoles } from "@/lib/intellidesqRoles";
import IntelliDesqRoleClient from "./IntelliDesqRoleClient";

export function generateStaticParams() {
  return intellidesqRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getIntelliDesqRoleBySlug(slug);
  if (!role) return {};
  return {
    title: `${role.title} | IntelliDesq`,
    description: role.overview,
  };
}

export default async function IntelliDesqRolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getIntelliDesqRoleBySlug(slug);
  if (!role) notFound();

  return <IntelliDesqRoleClient activeSlug={slug} />;
}
