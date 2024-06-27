"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import * as b from "@/components/buttons"
import { useRouter } from 'next/navigation';

function Professionals() {
  const router = useRouter();

  const buttonReturnHome = <b.buttonPrimary key={1} onClick={() => router.back()}>Retornar</b.buttonPrimary>
  const buttonRedirectService = <b.buttonPrimary key={2} onClick={() => router.push('https://profissional.lacreisaude.com.br/')}>Faça Parte</b.buttonPrimary>
  return (
    <>
      <Header />
      <Main
        title="Para Profissionais"
        text="Buscamos profissionais da saúde qualificados que priorizam o bem-estar físico e mental de pessoas LGBTQIAPN+.."
        image="/professionals.jpg"
        btns={[buttonReturnHome, buttonRedirectService]}
      />
      <Footer />
    </>
  )
}

export default Professionals;