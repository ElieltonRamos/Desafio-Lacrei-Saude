import Image from "next/image";
import * as s from "./style";
import * as b from "@/components/buttons";

type MainProps = {
  title: string;
  text: string;
  image: string;
  btnHome: boolean;
};

function Main({ title, text, image, btnHome }: MainProps) {
  return (
    <main>
      <s.div>
        <div>
          <article>
            <s.h1>{title}</s.h1>
            <s.text>{text}</s.text>
          </article>
          {btnHome ? <section>
            <b.buttonPrimary>Usuarios</b.buttonPrimary>
            <b.buttonPrimary>Profissionais</b.buttonPrimary>
          </section> : null}
        </div>
        <Image src={image} alt="logo" width={458} height={458} />
      </s.div>
    </main>
  );
}

export default Main;