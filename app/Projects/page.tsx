import Header from "../components/Header/Header";

const Projects: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Projetos</h1>
        <p className="mt-4">Veja alguns dos nossos projetos recentes.</p>
      </main>
    </div>
  );
};

export default Projects;
