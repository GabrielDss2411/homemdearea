
import { AlertTriangle, TrendingUp, Briefcase } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Problem Identification */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-offshore-navy mb-6">
              Você já se perguntou por que alguns conseguem
              <span className="text-offshore-orange"> trabalhar no mar</span> e outros não?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A verdade é que o mercado offshore está em <strong>constante crescimento</strong>, 
              mas existe uma barreira invisível que impede a maioria das pessoas de entrarem neste setor...
            </p>
          </div>

          {/* The Real Problem */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-offshore-navy mb-2">O Problema Real</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A indústria offshore exige certificações específicas e conhecimentos técnicos que 
                    <strong> não são ensinados em lugar nenhum</strong>. Sem isso, você fica de fora 
                    das melhores oportunidades.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <h4 className="font-semibold text-red-700 mb-2">A Realidade Cruel:</h4>
                <ul className="text-red-600 space-y-1 text-sm">
                  <li>• 87% dos candidatos são rejeitados por falta de qualificação;</li>
                  <li>• Cursos básicos não preparam para a realidade offshore;</li>
                  <li>• Empresas contratam apenas quem tem certificação completa; e</li>
                  <li>• Processo seletivo elimina quem não têm as NRs.</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://github.com/GabrielDss2411/homemdearea/blob/main/image/image2.jpg?raw=true" 
                alt="Trabalhadores offshore qualificados"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-offshore-navy/20 rounded-lg"></div>
            </div>
          </div>

          {/* The Solution Story */}
          <div className="bg-gradient-to-r from-offshore-navy to-offshore-navy/90 text-white rounded-xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <TrendingUp className="w-12 h-12 text-offshore-orange mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                E se eu te mostrasse uma <span className="text-offshore-orange">forma válida</span> de entrar nesse mercado? 
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="bg-offshore-orange w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-bold text-lg">Certificação Completa</h4>
                <p className="text-gray-300 text-sm">
                  Normas Regulamentadoras, óleo e gás e outras
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-offshore-orange w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-bold text-lg">Conhecimento Prático</h4>
                <p className="text-gray-300 text-sm">
                  Exatamente o que você precisa saber para trabalhar offshore
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-offshore-orange w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-bold text-lg">Preparação Total</h4>
                <p className="text-gray-300 text-sm">
                  Rotinas de Trabalho no mar
                </p>
              </div>
            </div>
          </div>

          {/* Market Opportunity */}
          <div className="text-center">
            <Briefcase className="w-16 h-16 text-offshore-orange mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-offshore-navy mb-4">
              O Mercado Offshore Está <span className="text-offshore-orange">Aquecido</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-offshore-orange mb-2">R$ 3.500</div>
                <div className="text-sm text-gray-600">Salário médio inicial</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-offshore-orange mb-2">14/14</div>
                <div className="text-sm text-gray-600">Dias trabalhados/folga</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-offshore-orange mb-2">+3.000</div>
                <div className="text-sm text-gray-600">Vagas abertas/2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
