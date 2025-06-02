
import { Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

interface HeroProps {
  onCtaClick: () => void;
}

const Hero = ({ onCtaClick }: HeroProps) => {
  const { user, signOut } = useAuth();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-offshore-navy to-offshore-navy/90 text-white py-16 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://github.com/GabrielDss2411/homemdearea/blob/main/image/bakground-b1.jpg?raw=true')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      
      <div className="container mx-auto px-4 relative z-10 margin-top:30px">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-offshore-orange/20 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-offshore-orange" />
              <span className="text-sm font-medium">Certificação Oficial</span>
            </div>
            <div className="flex items-center gap-2 bg-offshore-orange/20 px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-offshore-orange" />
              <span className="text-sm font-medium">3 NRs Inclusas</span>
            </div>
            <div className="flex items-center gap-2 bg-offshore-orange/20 px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-offshore-orange" />
              <span className="text-sm font-medium">+3.000 Alunos</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-offshore-orange">TRANSFORME</span> Sua Vida em
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              apenas 60 dias
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            O <strong className="text-white">primeiro curso do Brasil para Homem de Área (Roustabout)</strong> com apoio de <strong className="text-white">Inteligência Artificial</strong> , criado para te preparar completamente e garantir sua vaga no setor offshore. 
          </p>
          <Button 
            onClick={onCtaClick}
            size="lg"
            className="bg-offshore-orange hover:bg-offshore-orange/90 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            QUERO MINHA VAGA AGORA →
          </Button>

          <p className="text-sm text-gray-400 mt-4">
            ✅ Sem taxas ocultas • ✅ Certificação reconhecida • ✅ Suporte total
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
