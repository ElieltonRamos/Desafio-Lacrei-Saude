"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import * as b from "@/components/buttons"
import { useRouter } from 'next/navigation';

function Patient() {
  const router = useRouter();

  const buttonReturnHome = <b.buttonPrimary onClick={() => router.back}>Retornar</b.buttonPrimary>
  return (
    <>
      <Header />
      <Main
        title=""
        text=""
        image="/images/patient.jpg"
        btns={[buttonReturnHome]}
      />
      <Footer />
    </>
  );
}

export default Patient;