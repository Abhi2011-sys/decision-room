import ProjectGallery from "@/app/components/ProjectGallery";
import Link from "next/link";

export default function SalesProject() {
  const images = [
    "/projects/sales/img/image01.png",
    "/projects/sales/img/image02.png",
  ];

  const files = [
    { name: "Sales Excel Dataset", path: "/projects/sales/files/all_data.xlsx" },
    { name: "Sales Notebook", path: "/projects/sales/files/sales data analysis.ipynb" },
    { name: "README", path: "/projects/sales/files/README.md" },
  ];

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold">Sales Data Analysis</h1>
      <p className="text-gray-400 mt-3 max-w-3xl">
        A full analysis of sales trends, customer patterns, revenue seasonality,
        and product performance. Includes EDA, visualizations, and actionable insights.
      </p>

      <div className="mt-10">
        <ProjectGallery images={images} />
      </div>

      <h2 className="text-2xl font-semibold mt-14 mb-4">Downloads</h2>
      <div className="space-y-3">
        {files.map((file, i) => (
          <Link
            key={i}
            href={file.path}
            target="_blank"
            className="block px-4 py-3 border border-gray-700 rounded-lg hover:border-white"
          >
            {file.name} →
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-14 mb-3">Insights</h2>
      <ul className="text-gray-400 space-y-2">
        <li>• Identified top-selling product categories</li>
        <li>• Seasonal demand peaks discovered</li>
        <li>• Multi-city revenue comparison</li>
        <li>• Customer buying frequency patterns</li>
      </ul>
    </main>
  );
}
