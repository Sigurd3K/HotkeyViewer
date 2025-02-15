import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Keyboard from "./components/keyboard/Keyboard";

export default function Home() {
  return <main>
    <h1 className="text-3xl">Hotkey viewer</h1>
    <p className="mb-5">This is a work in progress</p>

    <Keyboard/>

    <p className="font-bold text-xl">Menu</p>
    <ul className="pt-5 pb-5 font-semibold">
      <li>
        <Link href="/settings">[[ Settings page ]]</Link>
      </li>
      <li>
        <Link href="/applicationList">[[ Application List ]]</Link>
      </li>
    </ul>

  </main>;
}
