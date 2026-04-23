import ProjectGallery from "@/app/components/ProjectGallery";
import Link from "next/link";

export default function EcommerceProject() {
  const images = [
    "/projects/ecommerce/img/image01.png",
    "/projects/ecommerce/img/image02.png",
    "/projects/ecommerce/img/image03.png",
    "/projects/ecommerce/img/image04.png",
    "/projects/ecommerce/img/image05.png",
    "/projects/ecommerce/img/image06.png"
  ];

  const files = [
    { name: "Ecommerce Excel Dataset", path: "/projects/ecommerce/files/ecommerce.csv" },
    { name: "Notebook", path: "/projects/ecommerce/files/ecommerce_analysis.ipynb" },
    { name: "README", path: "/projects/ecommerce/files/README.md" },
  ];

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold">E-commerce Analytics</h1>

      <p className="text-gray-400 mt-3">
        Deep-dive into customer lifecycle, product demand patterns,
        profit margins, and marketing channel performance.
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
        <li>• Repeat customer % drives 60% revenue</li>
        <li>• Discounts improve volume but reduce margins</li>
        <li>• High cart-abandonment detected in 18–25 age segment</li>
        <li>• Electronics category generates highest contribution margin</li>
      </ul>
    </main>
  );
}
