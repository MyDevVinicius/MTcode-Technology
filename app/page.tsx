import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Banner
        imageUrl="/img/fundo.webp"
        title="Bem-vindo à MTCode Technology"
        description="Sua solução em tecnologia e desenvolvimento de software."
        buttons={[
          { text: 'Saiba Mais', href: '/About' },
          { text: 'Nossos Projetos', href: '/Projects' },
        ]}
      />
      {/* Outros conteúdos da página */}

      <Footer />
    </div>
  );
};

export default Home;
