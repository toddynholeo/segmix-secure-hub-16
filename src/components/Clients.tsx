export const Clients = () => {
  const clients = [
    {
      name: "Shopping Nova América",
      logo: "/lovable-uploads/61f973ee-7f39-499e-a8be-93d20dc54523.png"
    },
    {
      name: "Ciclus",
      logo: "/lovable-uploads/50fad9a1-cbd6-4b4a-b04a-3cefff33d79b.png"
    },
    {
      name: "Carvalho Hosken",
      logo: "/lovable-uploads/519bb444-2aba-4392-9ea7-c02fadd0a68b.png"
    },
    {
      name: "Florença",
      logo: "/lovable-uploads/f1446bcc-c4ee-4203-a2a7-82609431ae5e.png"
    },
    {
      name: "UFRJ",
      logo: "/lovable-uploads/c9e52635-47d7-4855-ad5b-913119478380.png"
    },
    {
      name: "Colégio Marista",
      logo: "/lovable-uploads/9d66c19d-fd64-405f-93a3-f6277706ccad.png"
    },
    {
      name: "Record TV",
      logo: "/lovable-uploads/644e3f50-382b-4dc7-9c2b-13f44c010099.png"
    },
    {
      name: "Mercury",
      logo: "/lovable-uploads/b4d20cd9-a47d-4808-a702-fbd19728b547.png"
    },
    {
      name: "BRMalls",
      logo: "/lovable-uploads/81b564af-f00a-45bd-8827-83d8871c4893.png"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Confira alguns dos nossos clientes
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-border flex items-center justify-center min-h-[120px]"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};