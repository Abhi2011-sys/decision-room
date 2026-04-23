import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const projectDirs = [
    "sales",
    "ecommerce",
    "hr",
    "supermarket",
    "titanic",
    "COVID-19-Data-Analytics-Project-main",
  ];

  const baseDir = path.join(process.cwd(), "public/projects");

  const thumbnails: Record<string, string> = {};

  projectDirs.forEach((dir) => {
    const imgPath = path.join(baseDir, dir, "img");

    try {
      const files = fs.readdirSync(imgPath);
      const imgFile = files.find((f) => f.endsWith(".png") || f.endsWith(".jpg"));

      if (imgFile) {
        thumbnails[dir] = `/projects/${dir}/img/${imgFile}`;
      } else {
        thumbnails[dir] = "/placeholder.png"; // fallback image
      }
    } catch {
      thumbnails[dir] = "/placeholder.png";
    }
  });

  return NextResponse.json(thumbnails);
}
