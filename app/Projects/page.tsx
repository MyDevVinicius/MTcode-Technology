import Header from "../components/Header/Header";
import React from 'react';
import Projeto from '../components/Projeto/Projeto'
const projects = [
  {
    id: 1,
    title: 'E-commerce ',
    description: 'Lojas Online de roupas e calçados',
    imageUrl: 'img/projetosImg/netshoes.jpg',
  },
  {
    id: 2,
    title: 'E-commerce ',
    description: 'Lojas de Moveis e etc..',
    imageUrl: 'img/projetosImg/site-loja-democaracao.jpg',
  },
  {
    id: 3,
    title: 'Blog',
    description: 'Site de Noticias .',
    imageUrl: 'img/projetosImg/noticia.jpg',
  },
  {
    id: 4,
    title: 'E-commerce',
    description: 'Link de pedidos ',
    imageUrl: 'img/projetosImg/comida.jpg',
  },
  {
    id: 5,
    title: 'Link de Agendamento',
    description: 'Agendamentos no salao , barbearia ',
    imageUrl: 'img/projetosImg/salao.jpg',
  },
  {
    id: 6,
    title: 'Desenvolvimento ',
    description: 'Softwares especificos para sua demanda.',
    imageUrl: 'img/projetosImg/dashboard.jpg',
  },
];

const Projects: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Projetos</h1>
        <p className="mt-4">Veja alguns dos nossos projetos recentes.</p>

        <Projeto projects={projects} />
      </main>
    </div>
  );
};

export default Projects;
