import { useEffect } from "react";

const destination = "https://benjaminmuhoya.github.io/";

export default function RedirectSite() {
  useEffect(() => {
    window.location.replace(`${destination}${window.location.hash}`);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fbfaf4] px-6 text-center text-[#20231f]">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-[#8a6f2c]">Benjamin Muhoya</p>
        <h1 className="mt-4 text-4xl font-semibold">This website has moved.</h1>
        <p className="mt-5 text-lg text-[#4c5348]">
          Continue to <a className="font-semibold underline" href={destination}>benjaminmuhoya.github.io</a>.
        </p>
      </div>
    </main>
  );
}
