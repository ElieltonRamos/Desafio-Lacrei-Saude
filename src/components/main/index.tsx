import Header from "@/components/header";
import Image from "next/image";
import * as s from "./style";
import * as b from "@/components/buttons";

function Main() {
  return (
    <main>
      <Header />
      <s.div>
        <div>
          <article>
            <s.h1>Bem vindo a Lacrei Saúde</s.h1>
            <s.text>Uma plataforma para ajudar pessoas da comunidade LGBTQIAPN+</s.text>
          </article>
          <section>
            <b.buttonPrimary>Usuarios</b.buttonPrimary>
            <b.buttonPrimary>Profissionais</b.buttonPrimary>
          </section>
        </div>
        <Image src="/ilustracao-saude.avif" alt="logo" width={558} height={558} />
      </s.div>
    </main>
  );
}

export default Main;