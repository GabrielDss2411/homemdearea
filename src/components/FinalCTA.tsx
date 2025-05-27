import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Rocket, Clock, Users, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos do formulário.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone
          }
        ]);

      if (error) {
        console.error('Error inserting lead:', error);
        toast({
          title: "Erro ao enviar",
          description: "Ocorreu um erro ao processar sua inscrição. Tente novamente.",
          variant: "destructive"
        });
        return;
      }

      console.log("Lead successfully created:", data);

      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Entraremos em contato em breve para concluir sua inscrição.",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "" });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Erro inesperado",
        description: "Ocorreu um erro inesperado. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-offshore-navy to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Final Hook */}
          <div className="mb-12 animate-fade-in">
            <Rocket className="w-16 h-16 text-offshore-orange mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Sua <span className="text-offshore-orange">Nova Carreira</span> Está
              <br />
              A Apenas Um Clique de Distância
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Mais de 2.500 homens já transformaram suas vidas com este curso.{" "}
              <strong className="text-white"> Não deixe esta oportunidade passar.</strong>
            </p>
          </div>

          {/* Urgency Box */}
          <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-bold text-lg">ÚLTIMA CHAMADA</span>
            </div>
            <p className="text-lg font-medium mb-2">
              Restam apenas <span className="text-offshore-orange font-bold">7 vagas</span> para esta turma
            </p>
            <p className="text-gray-300 text-sm">
              Turma fecha quando atingir 30 alunos. Não perca sua chance!
            </p>
          </div>

          {/* Benefits Summary */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-offshore-orange mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">3 Certificações NRs</h3>
              <p className="text-gray-300 text-sm">Valor de R$ 2.100 incluído gratuitamente</p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Users className="w-8 h-8 text-offshore-orange mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Suporte Completo</h3>
              <p className="text-gray-300 text-sm">Até conseguir sua primeira contratação</p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Rocket className="w-8 h-8 text-offshore-orange mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Método Comprovado</h3>
              <p className="text-gray-300 text-sm">98% de aprovação nos exames</p>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-xl p-8 max-w-md mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold text-offshore-navy mb-6">
              Garanta Sua Vaga Agora
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full text-black"
                disabled={isSubmitting}
              />

              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full text-black"
                disabled={isSubmitting}
              />

              <Input
                type="tel"
                placeholder="WhatsApp (DDD + número)"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full text-black"
                disabled={isSubmitting}
              />

              <Button
                type="submit"
                className="w-full bg-offshore-orange hover:bg-offshore-orange/90 text-white font-bold text-lg py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? "ENVIANDO..." : "QUERO MINHA VAGA POR R$ 997 →"}
              </Button>
            </form>

            <p className="text-offshore-navy text-sm mt-4 font-medium">
              ✅ Entraremos em contato para concluir a inscrição na turma.
            </p>
          </div>

          {/* Final Reassurance */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              🔒 Seus dados estão seguros • ✅ Sem spam • ⚡ Resposta rápida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
