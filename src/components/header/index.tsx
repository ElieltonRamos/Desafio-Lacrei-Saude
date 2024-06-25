import Image from "next/image";
import * as s from "./style";

function Header() {
  return (
    <s.header>
      <Image src="/logo.svg" alt="logo" width={202} height={24} />
      <s.button>Ajuda</s.button>
    </s.header>
  );
}

export default Header;