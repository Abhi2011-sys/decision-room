import ProjectGallery from "@/app/components/ProjectGallery";
import Link from "next/link";

export default function SupermarketProject() {
  const images = [
    "/projects/supermarket/img/image01.png",
    "/projects/supermarket/img/image02.png",
    "/projects/supermarket/img/image03.png",
    "/projects/supermarket/img/image04.png",
    "/projects/supermarket/img/image05.png",
    "/projects/supermarket/img/image06.png",
    "/projects/supermarket/img/image07.png",
    "/projects/supermarket/img/image08.png",
    "/projects/supermarket/img/image09.png",
    "/projects/supermarket/img/image10.png",
  ];

  const files = [
    { name: "Supermarket Excel Dataset", path: "/projects/supermarket/files/supermarket_sales.csv" },
    { name: "Jupyter Notebook", path: "/projects/supermarket/files/supermarket_analysis.ipynb" },
    { name: "README", path: "/projects/supermarket/files/README.md" },
  ];

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold">Supermarket Sales Analysis</h1>

      <p className="text-gray-400 mt-3 max-w-3xl">
        A deep analysis of customer purchasing patterns, branch performance,
        gross income trends, and product line profitability across supermarket locations.
      </p>

      <div className="mt-10">
        <ProjectGallery images={images} />
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Downloads</h2>
      {files.map((file, index) => (
        <Link
          key={index}
          href={file.path}
          target="_blank"
          className="block px-4 py-3 border border-gray-700 rounded-lg hover:border-white"
        >
          {file.name} →
        </Link>
      ))}

      <h2 className="text-2xl font-semibold mt-12 mb-3">Insights</h2>
      <ul className="text-gray-400 space-y-2">
        <li>• Branch C shows highest gross income</li>
        <li>• Weekday vs weekend purchasing reveals unique patterns</li>
        <li>• Customer gender correlates with product-line preferences</li>
        <li>• Payment method distribution helps discount planning</li>
      </ul>
    </main>
  );
}
