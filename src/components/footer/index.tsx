import Image from 'next/image';
import * as s from './style';

function Footer() {
  return (
    <s.footer>
      <Image src="/logo.svg" alt="logo" width={202} height={24} />
      <s.div>
        <s.link href='https://www.facebook.com/lacrei.saude'>
          <Image src="/facebook.svg" alt="facebook" width={32} height={32} />
        </s.link>
        <s.link href='https://www.instagram.com/lacrei.saude/'>
          <Image src="/instagram.svg" alt="instagram" width={32} height={32} />
        </s.link>
        <s.link href='mailto: suporte@lacreisaude.com.br'>
          <Image src="/email.svg" alt="email" width={32} height={32} />
        </s.link>
        <s.link href='https://www.linkedin.com/company/lacrei/mycompany/'>
          <Image src="/linkedin.svg" alt="linkedin" width={32} height={32} />
        </s.link>
      </s.div>
    </s.footer>
  );
}

export default Footer;