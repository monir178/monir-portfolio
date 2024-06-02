import Banner from "@/pages/home/Banner";

import { SparklesPreview } from "../pages/home/SparklesPreview";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Banner />
        <SparklesPreview />
      </div>
    </main>
  );
}
