
import { CheckCircle, Gift, DollarSign, Calendar } from "lucide-react";

const ValueStack = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Gift className="w-12 h-12 text-offshore-orange mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-offshore-navy mb-6">
              O Que Você Recebe <span className="text-offshore-orange">Exatamente</span>
            </h2>
            <p className="text-lg text-gray-600">
              Um pacote completo que vale muito mais do que você vai pagar
            </p>
          </div>

          {/* Value Stack */}
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 mb-8">
            <div className="space-y-6">
              {/* Main Course */}
              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="font-bold text-offshore-navy text-lg">
                      Curso Completo de Homem de Área Offshore
                    </h3>
                    <p className="text-gray-600 text-sm">8 módulos + 120h de conteúdo prático</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-offshore-navy">R$ 1.500</div>
                </div>
              </div>

              {/* NR Certifications */}
              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="font-bold text-offshore-navy text-lg">
                      Certificação NR-33 (Espaços Confinados)
                    </h3>
                    <p className="text-gray-600 text-sm">Obrigatória para trabalhar offshore</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-offshore-navy line-through text-gray-400">R$ 800</div>
                  <div className="text-sm text-green-600 font-semibold">GRÁTIS</div>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="font-bold text-offshore-navy text-lg">
                      Certificação NR-35 (Trabalho em Altura)
                    </h3>
                    <p className="text-gray-600 text-sm">Essencial para atividades em plataformas</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-offshore-navy line-through text-gray-400">R$ 700</div>
                  <div className="text-sm text-green-600 font-semibold">GRÁTIS</div>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="font-bold text-offshore-navy text-lg">
                      Certificação NR-10 (Segurança Elétrica)
                    </h3>
                    <p className="text-gray-600 text-sm">Fundamental para operações elétricas</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-offshore-navy line-through text-gray-400">R$ 600</div>
                  <div className="text-sm text-green-600 font-semibold">GRÁTIS</div>
                </div>
              </div>

              {/* Bonus Items */}
              <div className="flex items-center justify-between py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="font-bold text-offshore-navy text-lg">
                      Manual Completo de Preparação para Exames
                    </h3>
                    <p className="text-gray-600 text-sm">Médicos e psicotécnicos</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-offshore-navy line-through text-gray-400">R$ 300</div>
                  <div className="text-sm text-green-600 font-semibold">GRÁTIS</div>
                </div>
              </div>

              <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                    <h3 className="font-bold text-offshore-navy text-lg">
                      Suporte Direto via WhatsApp
                    </h3>
                    <p className="text-gray-600 text-sm">Até conseguir sua primeira contratação</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-offshore-navy line-through text-gray-400">R$ 500</div>
                  <div className="text-sm text-green-600 font-semibold">GRÁTIS</div>
                </div>
              </div>
            </div>

            {/* Total Value */}
            <div className="border-t-2 border-gray-300 pt-6 mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-offshore-navy">Valor Total:</h3>
                  <p className="text-gray-600 text-sm">Se você comprasse tudo separadamente</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-400 line-through">R$ 4.400</div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Offer */}
          <div className="bg-gradient-to-r from-offshore-orange to-orange-600 text-white rounded-xl p-8 text-center">
            <DollarSign className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Oferta Especial Para Esta Turma
            </h3>
            <div className="mb-6">
              <div className="text-5xl font-bold mb-2">R$ 997</div>
              <div className="text-lg opacity-90">À vista ou em até 12x de R$ 94,70</div>
            </div>
            
            <div className="bg-white/20 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">ATENÇÃO: Vagas Limitadas</span>
              </div>
              <p className="text-sm">
                Apenas 30 vagas por turma. Turma inicia quando completar o número de alunos.
              </p>
            </div>

            <div className="text-sm opacity-90">
              ✅ Acesso imediato ao conteúdo • ✅ Certificações inclusas • ✅ Suporte total
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStack;
