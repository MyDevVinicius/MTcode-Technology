import { FC } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import Card from "./components/Card/Card";

import SectionWithBackground from "./components/Section/SectionFrom";

const Home: React.FC = () => {

  return (
    <div>
      <Header />
      <Banner
        imageUrl="/img/fundo.webp"
        title="MTCode Tecnologia"
        description="Inovação que Conecta o Futuro ."
        buttons={[
          { text: 'Saiba Mais', href: '/About' },
          { text: 'Nossos Projetos', href: '/Projects' },
        ]}
      />
      
      <Section
  title="Já pensou em ter seu propio site ?"
  description=" Sua empresa precisa estar presente na internet, onde seus clientes possam acessar facilmente seus produtos e serviços. "
  imageUrl="../img/Section2.svg"
  buttons={[
    { text: 'Saiba Mais', href: '/mais-info' },
    { text: 'Compre Agora', href: '/comprar' },
  ]}
  advantages={[
    "Aumento de produtividade",
    "Melhoria na qualidade de Atendimento",
    "Economia de tempo e recursos",
    "Facilidade para seus Clientes ",
  ]}
/>
<section className="mt-50 mb-50 bg-gray-100">
<div className="p-4 bg-gray-100">
      <h4 className="font-semibold text-lg mb-4">Alguns Serviços que Oferecemos</h4>
      <hr className="mb-4 " />
      <div className="flex flex-wrap gap-4">
       </div></div> 
<div className="p-10 flex flex-wrap gap-4 bg-gray-100 justify-center">


      <Card
        imageSrc="../img/cpu.jpg"
        title="Desenvolvimento de Sites"
        text="Equipe experiente e capacitada para criar
         soluções confiáveis e estáveis que atendem ao 
         seu negócio."
      />
      <Card
        imageSrc="../img/suporte.jpg"
        title="Suporte em TI"
        text="Temos a solução em TI ideal para a sua empresa,
         Realizamos instalação de Softwares, Treinamentos, 
         Planejamentos de Instalação"
      />
      <Card
        imageSrc="../img/manuntenção.jpg"
        title="Manuntenção em CPU's"
        text="Serviços de Limpeza Preventiva, Recuperação de placa , Upgrade, Formatação e Muito mais.... "
      />
    </div>
    </section>

    
    <SectionWithBackground/>
      
   




      

      <Footer />
    </div>
  );
};

export default Home;
