import { Calendar, Users, CheckCircle } from "lucide-react";

export const Experience = () => {
  const stats = [
    {
      icon: Calendar,
      number: "Mais de 10",
      text: "anos de mercado"
    },
    {
      icon: Users,
      number: "Mais de 1.500",
      text: "clientes satisfeitos"
    },
    {
      icon: CheckCircle,
      number: "Mais de 2.000",
      text: "projetos instalados"
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossa Experiência
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center text-white"
            >
              <div className="w-20 h-20 bg-cta rounded-full flex items-center justify-center mb-6 mx-auto">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold mb-2 text-cta">
                {stat.number}
              </div>
              
              <p className="text-xl text-white/90">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};