import Header from "../components/Header/Header";
const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Sobre Nós</h1>
        <p className="mt-4">Informações sobre a empresa MTCode Technology.</p>
      </main>
    </div>
  );
};

export default About;
