import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Home() {
  return (
    <div>
      <h1>Hello world!</h1>
      <Button variant="destructive">CLick me</Button>
      <Image src={Logo} height={50} width={50} alt="logo" />
    </div>
  );
}
