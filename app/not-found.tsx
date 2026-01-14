import Link from 'next/link';

/**
 * A Next.js page component that displays a 404 error page.
 * @returns A JSX element representing the 404 error page.
 */
export default function NotFound() {
  return (
    <div className="m-0 p-0 h-screen w-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <h1 className="text-9xl leading-none m-0">404</h1>
      <p className="text-xl mt-2 mb-4">This page was not found.</p>
      <Link className="self-center mx-auto transform-none" href="/">Go Home</Link>
    </div>
  );
}