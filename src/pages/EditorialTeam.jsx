// src/pages/EditorialTeam.jsx
const EditorialTeam = () => {
  const team = [
    { name: "Muhammad Yusuf El-Badri", role: "Editor-in-Chief", affiliation: "Universitas Negeri Padang, Indonesia" },
    { name: "Yosi Nofa", role: "Managing Editor", affiliation: "STAI YDI Lubuk Sikaping, Pasaman, Sumatera Barat, Indonesia" },
    { name: "Rifki Ramadani", role: "Associate Editor", affiliation: "Universitas Brawijaya Malang, Indonesia" },    
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-textmain mb-4">Editorial Team</h1>
        <p className="text-lg text-textmain/70 max-w-2xl mx-auto">
          Tim editorial kami terdiri dari para ahli dan akademisi berpengalaman dari berbagai institusi global.
        </p>
      </header>

      <div className="space-y-12">
        {/* Editor in Chief Section */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-accent mb-6 border-b border-secondary pb-2">Editor-in-Chief</h2>
          <div className="bg-white border border-secondary p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-textmain">{team[0].name}</h3>
            <p className="text-textmain/70 mt-1">{team[0].affiliation}</p>
          </div>
        </section>

        {/* Board Section */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-accent mb-6 border-b border-secondary pb-2">Editorial Board</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.slice(1).map((member, idx) => (
              <div key={idx} className="bg-white border border-secondary p-6 rounded-lg hover:border-accent hover:shadow-md transition-all duration-200">
                <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">{member.role}</span>
                <h3 className="text-lg font-bold text-textmain">{member.name}</h3>
                <p className="text-sm text-textmain/70 mt-2">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditorialTeam;