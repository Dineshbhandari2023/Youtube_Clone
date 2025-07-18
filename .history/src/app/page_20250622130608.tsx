import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Home() {
  return (
    <div>
      <div>
        <Image src={Logo} height={40} width={70} alt="logo" />
        <p className="font-bold text-xl">Youtube</p>
      </div>
    </div>
  );
}
