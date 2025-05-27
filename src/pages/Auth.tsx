
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Anchor, Shield, Users } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        if (data.user) {
          toast({
            title: "Login realizado com sucesso!",
            description: "Bem-vindo de volta.",
          });
          window.location.href = '/';
        }
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            }
          }
        });

        if (error) throw error;

        if (data.user) {
          toast({
            title: "Conta criada com sucesso!",
            description: "Você já pode fazer login.",
          });
          setIsLogin(true);
        }
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Ocorreu um erro inesperado.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-offshore-navy to-black flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <Anchor className="w-12 h-12 text-offshore-orange mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">
            {isLogin ? "Acesse sua conta" : "Criar conta"}
          </h1>
          <p className="text-gray-400">
            {isLogin ? "Entre para gerenciar suas informações" : "Cadastre-se para começar"}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl p-8 shadow-2xl">
          <form onSubmit={handleAuth} className="space-y-4">
            {!isLogin && (
              <Input
                type="text"
                placeholder="Nome completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full"
                required
              />
            )}
            
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              required
            />
            
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              required
            />
            
            <Button
              type="submit"
              className="w-full bg-offshore-orange hover:bg-offshore-orange/90 text-white font-bold py-3"
              disabled={loading}
            >
              {loading ? "Carregando..." : (isLogin ? "Entrar" : "Criar conta")}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-offshore-orange hover:underline"
            >
              {isLogin ? "Não tem conta? Cadastre-se" : "Já tem conta? Faça login"}
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="text-white">
            <Shield className="w-6 h-6 mx-auto mb-2 text-offshore-orange" />
            <p className="text-xs">Dados Seguros</p>
          </div>
          <div className="text-white">
            <Users className="w-6 h-6 mx-auto mb-2 text-offshore-orange" />
            <p className="text-xs">+2.500 Alunos</p>
          </div>
          <div className="text-white">
            <Anchor className="w-6 h-6 mx-auto mb-2 text-offshore-orange" />
            <p className="text-xs">Certificado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
