import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>The home page</h1>
      <li>
        <Link href={"/portfolio"}>Portfolio</Link>
      </li>
      <li>
        <Link href={"/clients"}>Clients</Link>
      </li>
    </div>
  );
}
