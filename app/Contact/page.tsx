import Header from "../components/Header/Header";

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold">Contato</h1>
        <p className="mt-4">Entre em contato conosco através das redes sociais ou pelo formulário abaixo.</p>
      </main>
    </div>
  );
};

export default Contact;
