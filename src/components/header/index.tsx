import Image from "next/image";
import * as s from "./style";
import * as b from "@/components/buttons";

function Header() {
  return (
    <s.header>
      <Image src="/logo.svg" alt="logo" width={202} height={24} />
      <b.buttonSecundary>Ajuda</b.buttonSecundary>
    </s.header>
  );
}

export default Header;