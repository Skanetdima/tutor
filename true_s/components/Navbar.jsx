import Link from "next/link";
import "../app/globals.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link className="" href={"/"}>
        Task Creator
      </Link>
      <Link className="AddTopic" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
