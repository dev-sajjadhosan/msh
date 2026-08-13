interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="w-3xl mx-auto flex items-center justify-center">
      <h3 className="text-xl font-medium">Project: {slug}</h3>
    </div>
  );
}