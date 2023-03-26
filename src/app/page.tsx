import Hero from "./Hero";

export default function Home() {
  return (
    <main>
      <div className="container space-y-24">
        <Hero />

        <div className="space-y-16">
          <h2 className="font-[700] text-4xl text-center">Features</h2>

          <div className="flex justify-center items-center">
            <img
              src="assets/images/mock-photo-2.jpg"
              alt="Mock photo 2"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
