
import { HelpCircle, CheckCircle, AlertCircle } from "lucide-react";

const Objections = () => {
  const objections = [
    {
      question: "\"Não tenho experiência, será que vou conseguir?\"",
      answer: "Nosso curso foi desenvolvido especialmente para adultos que desejam iniciar uma nova carreira no Mar, mesmo sem nenhuma experiência prévia, 87% dos nossos alunos também começaram do zero — e hoje atuam com sucesso no setor marítimo.Você vai aprender de forma progressiva, no seu ritmo, com apoio total de nossa Inteligencia artificial."
    },
    {
      question: "\"E se eu não conseguir embarcar depois do curso?\"",
      answer: "Nossa taxa de colocação é de 85% em até 90 dias após a conclusão. Oferecemos suporte por meio parceiros que orientam sobre processos seletivos até você conseguir sua primeira vaga."
    },
    {
      question: "\"Quando a turma vai começar?\"",
      answer: "O curso inicia assim que a turma de 30 alunos for completada. Isso garante atenção personalizada para cada aluno. O curso é presencial e acontece ao longo de 3 sábados."
    },
    {
      question: "\"Vale a pena investir sem garantia?\"",
      answer: "O curso inclui R$ 2.100 em certificações NRs que você precisaria fazer de qualquer forma. Só isso já justifica o investimento. Além disso, nosso histórico de 2.500+ alunos formados comprova a eficácia do método."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <HelpCircle className="w-12 h-12 text-offshore-orange mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-offshore-navy mb-6">
              Respondendo Suas <span className="text-offshore-orange">Principais Dúvidas</span>
            </h2>
            <p className="text-lg text-gray-600">
              Estas são as perguntas mais frequentes que recebemos de futuros alunos
            </p>
          </div>

          {/* Objections List */}
          <div className="space-y-6 mb-12">
            {objections.map((objection, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-offshore-orange">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-offshore-orange mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold text-offshore-navy text-lg mb-3">
                      {objection.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {objection.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance Box */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <h3 className="text-xl font-bold text-green-700">Você Está Fazendo a Escolha Certa</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm text-green-700">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Método testado e aprovado por 2.500+ alunos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Certificações obrigatórias já incluídas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>98% de taxa de aprovação nos exames</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Suporte até conseguir sua primeira vaga</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Conteúdo atualizado com normas vigentes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Instrutores com 19 anos de experiência offshore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objections;
