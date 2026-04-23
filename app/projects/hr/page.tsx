import ProjectGallery from "@/app/components/ProjectGallery";
import Link from "next/link";

export default function HRProject() {
  const images = [
    "/projects/hr/img/output_31_0.png",
    "/projects/hr/img/output_32_0.png",
    "/projects/hr/img/output_39_0.png",
    "/projects/hr/img/output_42_1.png",
    "/projects/hr/img/output_50_0.png",
  ];

  const files = [
    { name: "HR Analytics Notebook", path: "/projects/hr/files/HR Analytics.ipynb" },
    { name: "HR Report", path: "/projects/hr/files/HR Analytics - Report.md" },
    { name: "README", path: "/projects/hr/files/README.md" },
  ];

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold">HR Analytics</h1>
      <p className="text-gray-400 mt-3">
        Employee retention, performance, churn prediction & workforce insights.
      </p>

      <div className="mt-10">
        <ProjectGallery images={images} />
      </div>

      <h2 className="text-2xl font-semibold mt-14 mb-4">Downloads</h2>
      {files.map((f, i) => (
        <Link key={i} href={f.path} target="_blank" className="block border p-3 rounded-lg border-gray-700 hover:border-white">
          {f.name} →
        </Link>
      ))}
    </main>
  );
}
