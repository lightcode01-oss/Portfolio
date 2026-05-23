import Hero3D from "@/components/Hero3D";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <PageLoader />
      <Hero3D />
    </main>
  );
}
