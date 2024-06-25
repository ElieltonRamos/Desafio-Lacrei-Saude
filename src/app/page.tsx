import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";

export default function Home() {
  return (
    <>
    <Header />
    <Main
      title="Bem vindo a Lacrei Saúde"
      text="Uma plataforma para ajudar pessoas da comunidade LGBTQIAPN+"
      image="/ilustracao-saude.avif"
      btnHome={true}
    />
    <Footer />
    </>
  );
}