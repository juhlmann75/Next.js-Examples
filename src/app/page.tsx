import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href={"/examples/server-actions"} className="underline text-blue-500">
            Using Server Action in Client Components Example
          </Link>
        </li>
      </ul>
    </main>
  );
}
