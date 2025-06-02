import { Quote, Star, Award } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Rogério 'Maninho'",
      role: "Soldador Offshore - Petrobras",
      content: "Estava desempregado há 8 meses. Depois do curso, consegui minha vaga em 45 dias. Hoje ganho R$ 12.000 por mês trabalhando offshore.",
      rating: 5,
      image: "https://github.com/GabrielDss2411/homemdearea/blob/main/image/maninho.jpg?raw=true"
    },
    {
      name: "Julio 'Julinho'",
      role: "Técnico de Segurança - BW Offshore",
      content: "O curso me deu toda base que eu precisava. As certificações incluídas foram fundamentais. Recomendo para quem quer mudar de vida.",
      rating: 5,
      image: "https://github.com/GabrielDss2411/homemdearea/blob/main/image/julio.jpg?raw=true"
    },
    {
      name: "Sidney Ricardo 'Trovão'",
      role: "Operador de Plataforma - Equinor",
      content: "Sem experiência nenhuma no mar, hoje sou operador em uma das maiores empresas do setor. O curso realmente funciona!",
      rating: 5,
      image: "https://github.com/GabrielDss2411/homemdearea/blob/main/image/trovao.png?raw=true"
    }
  ];

  return (
    <section className="py-16 bg-offshore-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Award className="w-12 h-12 text-offshore-orange mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Veja o Que Nossos <span className="text-offshore-orange">Alunos Estão Dizendo</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Mais de 3.000 profissionais já transformaram suas carreiras com nosso método. 
              Conheça algumas histórias reais de sucesso:
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-6 h-6 text-offshore-orange mb-3" />
                
                <p className="text-gray-100 mb-4 leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-white/20 pt-4 flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border border-offshore-orange"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-offshore-orange text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instructor Authority */}
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-2xl font-bold mb-4">
                  <span className="text-offshore-orange">MetaSystem</span>
                </h1>
                
                <div className="space-y-3 text-gray-300">

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full"></div>
                    <span className="text-justify">A MetaSystem, antes System Offshore, traz mais de uma década de excelência em treinamentos marítimos, agora potencializada por tecnologias como Metaverso, Inteligência Artificial e Realidade Virtual. Com mais de 3.800 profissionais formados, revolucionamos a capacitação com experiências imersivas, seguras e gamificadas.<br /><br />

                    Nosso compromisso é democratizar o acesso à educação de qualidade, utilizando celulares e metodologias inovadoras para alcançar até as regiões mais remotas. Estamos criando o primeiro Metaverso Marítimo Offshore do Brasil e o futuro começa aqui.</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://github.com/GabrielDss2411/metasystem/blob/main/logo/logo.png?raw=true" 
                  alt="Ivan Instrutor"
                  className="rounded-lg w-full opacity-90 bg-white"
                />
                <div className="absolute bottom-4 left-4 bg-offshore-orange text-white px-3 py-1 rounded text-sm font-semibold">
                  +3.000 Alunos Formados
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/image/amob.png" 
                  alt="Ivan Instrutor"
                  className="rounded-lg w-full opacity-90 bg-white"
                />
               
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-4">
                  <span className="text-offshore-orange">Associação de Marítimos e Offshore do Brasil  (AMOB)</span>
                </h1>
                
                <div className="space-y-3 text-gray-300">

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full text-align:justify"></div>
                    <span className="text-justify">A AMOB é uma sociedade técnico-científica sem fins lucrativos dedicada ao desenvolvimento e à valorização dos profissionais do setor marítimo e offshore. Atuamos promovendo formação técnica, inclusão social e representatividade, tanto no Brasil quanto no exterior, sempre com foco no crescimento coletivo e na excelência do setor aquaviário.<br /><br />

                    Oferecemos aos nossos associados benefícios como assessoria jurídica gratuita, serviços de despachante especializado, treinamentos, desenvolvimento de carreira e acesso a uma rede colaborativa de networking e conhecimento. Nosso compromisso é fomentar a qualificação, a segurança e a inovação por meio de iniciativas que transformam vidas e fortalecem toda a comunidade marítima e offshore.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Numbers & Credibility */}
          <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
            <div>
              <div className="text-3xl font-bold text-offshore-orange mb-2">98%</div>
              <div className="text-sm text-gray-300">Taxa de aprovação nos exames</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-offshore-orange mb-2">3.000+</div>
              <div className="text-sm text-gray-300">Alunos certificados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-offshore-orange mb-2">85%</div>
              <div className="text-sm text-gray-300">Conseguem vaga em 60 dias</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-offshore-orange mb-2">4.9/5</div>
              <div className="text-sm text-gray-300">Avaliação dos alunos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
