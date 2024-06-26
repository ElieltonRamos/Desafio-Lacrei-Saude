"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import * as b from "@/components/buttons"
import { useRouter } from 'next/navigation';

function Professionals() {
  const router = useRouter();

  const buttonReturnHome = <b.buttonPrimary onClick={() => router.back}>Retornar</b.buttonPrimary>
  const buttonRedirectService = <b.buttonPrimary onClick={() => router.push('https://profissional.lacreisaude.com.br/')}>Buscar Atendimento</b.buttonPrimary>
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