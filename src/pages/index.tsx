import { Header } from "../Components/Header";
import { ContentBox, HomeContainer, InfoContainer } from "../styles/pages/home";
import iconsGroup from "../assets/Icons Group.png"
import Image from "next/image";
import Link from "next/link";

export default function Home() {



  return (
    <>
      <Header />
      <HomeContainer>
        <InfoContainer>
          <ContentBox>
            <h2>
              Veja como é <span>fácil</span> saber como está
              o clima com My Climate!
            </h2>

            <p>
              A plataforma My Climate visa sempre buscar o simples e objetivo para que o usuário consiga navegar pelo aplicativo sem nenhum problema e interferência.
            </p>
            <p>
              Com o My Climate, é possível saber como está o clima da sua região com apenas uma única pesquisa simples e objetiva, basta apenas clicar no botão <span>Entrar</span> para poder fazer sua busca.
            </p>


          </ContentBox>
          <Image src={iconsGroup} width={480} height={335} alt='' />
        </InfoContainer>
        <Link href={'/consult'} prefetch={false}>Entrar</Link>
      </HomeContainer>
    </>
  )
}
