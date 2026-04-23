import ProjectGallery from "@/app/components/ProjectGallery";
import Link from "next/link";

export default function CovidProject() {
  const images = [
    "/projects/COVID-19-Data-Analytics-Project-main/img/image01.png",
    "/projects/COVID-19-Data-Analytics-Project-main/img/image02.png",
    "/projects/COVID-19-Data-Analytics-Project-main/img/image03.png",
    "/projects/COVID-19-Data-Analytics-Project-main/img/image04.png",
    "/projects/COVID-19-Data-Analytics-Project-main/img/image05.png",
    "/projects/COVID-19-Data-Analytics-Project-main/img/image06.png",
    "/projects/COVID-19-Data-Analytics-Project-main/img/image07.png",
    "/projects/COVID-19-Data-Analytics-Project-main/img/image08.png",
    "/projects/COVID-19-Data-Analytics-Project-main/img/image10.png",
    "/projects/COVID-19-Data-Analytics-Project-main/img/image11.png",
  ];

  const files = [
    { name: "COVID Dataset", path: "/projects/COVID-19-Data-Analytics-Project-main/files/Covid_data.csv" },
    { name: "Notebook", path: "/projects/COVID-19-Data-Analytics-Project-main/files/covid_analysis.ipynb" },
    { name: "README", path: "/projects/COVID-19-Data-Analytics-Project-main/files/README.md" },
  ];

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold">COVID-19 Global Data Analytics</h1>

      <p className="text-gray-400 mt-3">
        Full global analysis of COVID cases, growth rates, death rates,
        vaccination patterns, and country-wise comparison trends.
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
        <li>• India’s growth curve shows multiple waves clearly</li>
        <li>• Vaccination sharply reduces fatality rate</li>
        <li>• US & Europe show highest early spread velocity</li>
        <li>• Trend forecasting identifies future hotspot windows</li>
      </ul>
    </main>
  );
}
