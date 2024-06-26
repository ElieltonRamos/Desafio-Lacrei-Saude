'use client';
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import * as s from "@/components/buttons";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const buttonUser = <s.buttonPrimary onClick={() => router.push('/users')}>Usuários</s.buttonPrimary>;
  const buttonProfessionals = <s.buttonPrimary onClick={() => router.push('/professionals')}>Profissionais</s.buttonPrimary>;

  return (
    <>
    <Header />
    <Main
      title="Bem vindo a Lacrei Saúde"
      text="Uma plataforma para ajudar pessoas da comunidade LGBTQIAPN+"
      image="/ilustracao-saude.avif"
      btns={[buttonUser, buttonProfessionals]}
    />
    <Footer />
    </>
  );
}