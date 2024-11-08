import Header from "../components/Header/Header";
import React from 'react';
import Projeto from '../components/Projeto/Projeto'
const projects = [
  {
    id: 1,
    title: 'Projeto A',
    description: 'Descrição do Projeto A.',
    imageUrl: '/images/project-a.jpg',
  },
  {
    id: 2,
    title: 'Projeto B',
    description: 'Descrição do Projeto B.',
    imageUrl: '/images/project-b.jpg',
  },
  {
    id: 3,
    title: 'Projeto C',
    description: 'Descrição do Projeto C.',
    imageUrl: '/images/project-c.jpg',
  },
  {
    id: 4,
    title: 'Projeto D',
    description: 'Descrição do Projeto A.',
    imageUrl: '/images/project-a.jpg',
  },
  {
    id: 5,
    title: 'Projeto E',
    description: 'Descrição do Projeto B.',
    imageUrl: '/images/project-b.jpg',
  },
  {
    id: 6,
    title: 'Projeto F',
    description: 'Descrição do Projeto C.',
    imageUrl: '/images/project-c.jpg',
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
