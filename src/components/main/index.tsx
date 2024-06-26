import Image from "next/image";
import * as s from "./style";

type MainProps = {
  title: string;
  text: string;
  image: string;
  btns?: JSX.Element[];
};

function Main({ title, text, image, btns }: MainProps) {
  return (
    <main>
      <s.div>
        <div>
          <article>
            <s.h1>{title}</s.h1>
            <s.text>{text}</s.text>
          </article>
          {btns}
        </div>
        <Image src={image} alt="logo" width={458} height={458} />
      </s.div>
    </main>
  );
}

export default Main;