import Hero from "./components/Hero";

export default async function Home() {
  return ( 
    <layout className="flex min-h-screen flex-col">
        <div className="flex h-screen items-center px-20 py-4">
          <Hero />
        </div>
    </layout>
  );
};