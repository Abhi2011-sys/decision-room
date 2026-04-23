import ProjectGallery from "@/app/components/ProjectGallery";
import Link from "next/link";

export default function TitanicProject() {
  const images = [
    "/projects/titanic/img/image01.png",
    "/projects/titanic/img/image02.png",
    "/projects/titanic/img/image03.png",
    "/projects/titanic/img/image04.png",
    "/projects/titanic/img/image05.png",
    "/projects/titanic/img/image06.png",
    "/projects/titanic/img/image07.png",
    "/projects/titanic/img/image08.png",
  ];

  const files = [
    { name: "Titanic Dataset", path: "/projects/titanic/files/titanic.csv" },
    { name: "Notebook", path: "/projects/titanic/files/titanic_eda.ipynb" },
    { name: "README", path: "/projects/titanic/files/README.md" },
  ];

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold">Titanic Survival Analysis</h1>

      <p className="text-gray-400 mt-3">
        A full exploratory data analysis of the Titanic passenger dataset,
        uncovering survival patterns based on gender, class, fare, and age.
      </p>

      <div className="mt-10">
        <ProjectGallery images={images} />
      </div>

      <h2 className="text-2xl font-semibold mt-12 mb-4">Downloads</h2>
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

      <h2 className="text-2xl font-semibold mt-12 mb-3">Insights</h2>
      <ul className="text-gray-400 space-y-2">
        <li>• Females had the highest survival probability</li>
        <li>• First-class passengers had significantly better outcomes</li>
        <li>• Younger passengers (children) survived more</li>
        <li>• Fare directly correlates with safety access</li>
      </ul>
    </main>
  );
}
