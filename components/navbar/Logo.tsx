import Link from "next/link";
import { LuTentTree } from "react-icons/lu";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <LuTentTree className="w-6 h-6 text-gray-100" />
      </Link>
    </Button>
  );
}

export default Logo;
