import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-lg border border-dashed border-gray-400 p-40 text-5xl">
      <p>About page</p>
      <Link
        className="rounded-md border border-white/10 px-3 py-3  text-xl font-medium  transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-white/10"
        href="/about/insideAbout"
      >
        Inside About
      </Link>
      <Link
        className="rounded-md border border-white/10 px-3 py-3  text-xl font-medium  transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-white/10"
        href="/"
      >
        Go Back
      </Link>
    </div>
  );
}
