import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section/Section";

import SectionWithBackground from "../components/Section/SectionFrom";



const About: React.FC = () => {
  return (
    <div>
      <Header />
      <Section
        title="Sobre Nossa Cultura!"
        description="Na MTCode Tecnologia, nossa cultura é fundamentada em inovação, colaboração e excelência. Acreditamos que a tecnologia tem o poder de transformar vidas e negócios, e trabalhamos incansavelmente para criar soluções que façam a diferença."
        imageUrl="../img/Section2.svg"
        buttons={[
          { text: 'Saiba Mais', href: '/mais-info' },
          { text: 'Compre Agora', href: '/comprar' },
        ]}
        advantages={[]}
      />
     
      <SectionWithBackground />
      <Footer />
    </div>
  );
};

export default About;
