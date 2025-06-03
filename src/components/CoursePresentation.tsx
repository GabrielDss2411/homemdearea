
import { CheckCircle, Star, Clock, Book } from "lucide-react";

const CoursePresentation = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Course Introduction */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-offshore-orange/10 px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 text-offshore-orange" />
              <span className="text-offshore-orange font-semibold">CURSO COMPLETO</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-offshore-navy mb-6">
              Conheça o curso que irá <span className="text-offshore-orange">transformar vidas</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Este não é apenas mais um curso de qualificação. É o primeiro que unirá instrutores de alta qualificação e vasta experiência à tecnologia da Inteligência Artificial (IA). Uma fusão Físico-Digital ou, neologicamente falando, uma fusão Fígital.
            </p>
          </div>

          {/* Course Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-offshore-navy">
                O Que Torna Este Curso <span className="text-offshore-orange">Único</span>?
              </h3>
              <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-offshore-navy">Mentoria Personalizada com Inteligência Artificial</h4>
                    <p className="text-gray-600 text-sm">
                      Com a ProfessorAI, você tira dúvidas e avança com segurança
                    </p>
                  </div>
                </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-offshore-navy">Metodologia Exclusiva</h4>
                    <p className="text-gray-600 text-sm">
                      Desenvolvida por profissionais que viveram mais de 15 anos no mar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-offshore-navy">Certificações Incluídas</h4>
                    <p className="text-gray-600 text-sm">
                      NR-11, NR-33 e NR-35 já incluídas (valor de R$ 900,00 GRÁTIS)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-offshore-navy">Preparação Completa</h4>
                    <p className="text-gray-600 text-sm">
                      Adaptação à vida no mar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-offshore-navy">Suporte Especializado</h4>
                    <p className="text-gray-600 text-sm">
                      Acompanhamento direto até conseguir sua primeira contratação
                    </p>
                  </div>
                </div>
                
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://github.com/GabrielDss2411/homemdearea/blob/main/image/happy.jpg?raw=true" 
                alt="Profissional offshore certificado"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-offshore-orange">98%</div>
                  <div className="text-xs text-gray-600">Taxa de aprovação</div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Stats */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <Clock className="w-8 h-8 text-offshore-orange mx-auto" />
                <div className="text-2xl font-bold text-offshore-navy">80h</div>
                <div className="text-sm text-gray-600">Conteúdo</div>
              </div>

              <div className="space-y-2">
                <Book className="w-8 h-8 text-offshore-orange mx-auto" />
                <div className="text-2xl font-bold text-offshore-navy">15</div>
                <div className="text-sm text-gray-600">Módulos teóricos</div>
              </div>

              <div className="space-y-2">
                <CheckCircle className="w-8 h-8 text-offshore-orange mx-auto" />
                <div className="text-2xl font-bold text-offshore-navy">3</div>
                <div className="text-sm text-gray-600">Certificações NR</div>
              </div>

              <div className="space-y-2">
                <Star className="w-8 h-8 text-offshore-orange mx-auto" />
                <div className="text-2xl font-bold text-offshore-navy">3.000+</div>
                <div className="text-sm text-gray-600">Alunos formados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePresentation;
