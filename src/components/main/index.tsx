import Header from "@/components/header";
import Image from "next/image";
import * as s from "./style";

function Main() {
  return (
    <main>
      <Header />
      <s.div>
        <div>
          <article>
            <h1>Bem vindo a Lacrei Saúde</h1>
            <h2>Uma plataforma para ajudar pessoas da comunidade LGBTQIAPN+</h2>
          </article>
          <section>
            <button>Usuarios</button>
            <button>Profissionais</button>
          </section>
        </div>
        <Image src="/ilustracao-saude.avif" alt="logo" width={558} height={558} />
      </s.div>
    </main>
  );
}

export default Main;