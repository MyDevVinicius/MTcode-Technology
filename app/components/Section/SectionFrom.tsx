"use client";

import React from 'react';
import Form from '../Form/Form';

const SectionWithBackground: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat min-h-screen md:h-screen" style={{ backgroundImage: "url('../../img/orcamento.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full p-8 pb-32 md:pb-8">
        <div className="text-white md:w-1/2 p-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Solicite um Orçamento! </h1>
          <p className="text-base md:text-lg">
            Nosso compromisso é fornecer um serviço excepcional e atender às suas necessidades específicas. Preencha o formulário ao lado para entrar em contato conosco e descobrir como podemos ajudar você a alcançar o sucesso.
          </p>
        </div>
        <div className="bg-transparent rounded-lg shadow-lg p-6 md:w-1/2">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default SectionWithBackground;
