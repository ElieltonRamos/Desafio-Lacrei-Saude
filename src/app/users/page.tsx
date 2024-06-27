"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import * as b from "@/components/buttons"
import { useRouter } from 'next/navigation';

function Patient() {
  const router = useRouter();

  const buttonReturnHome = <b.buttonPrimary key={1} onClick={() => router.back()}>Retornar</b.buttonPrimary>
  const buttonRedirectService = <b.buttonPrimary key={2} onClick={() => router.push('https://paciente.lacreisaude.com.br/')}>Buscar Atendimento</b.buttonPrimary>

  return (
    <>
      <Header />
      <Main
        title="Para Usuários"
        text="Conecte-se a profissionais da saúde que estudam as necessidades da comunidade LGBTQIAPN+."
        image="/users.svg"
        btns={[buttonReturnHome, buttonRedirectService]}
      />
      <Footer />
    </>
  );
}

export default Patient;