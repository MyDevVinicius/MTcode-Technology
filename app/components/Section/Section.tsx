"use client";


interface Button {
  text: string;
  href: string;
}

interface SectionProps {
  title: string;
  description: string;
  imageUrl: string;
  buttons: Button[];
  advantages: string[]; // Lista de vantagens
}

const HorizontalSection: React.FC<SectionProps> = ({
  title,
  description,
  imageUrl,
  buttons,
  advantages, // Recebendo as vantagens como prop
}) => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <img src={imageUrl} alt={title} className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h3 className="text-5xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4 text-xl">{description}</p>
          {/* Lista de vantagens */}
          <ul className="list-none space-y-2">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {advantage}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HorizontalSection;
