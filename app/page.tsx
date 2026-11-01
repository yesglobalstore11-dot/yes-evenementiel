
const packs = [
  {
    name: "Pack 50 places",
    price: "90 000",
    items: ["1 chapiteau", "50 chaises VIP", "5 tables", "1 ventilateur", "1 tréteau", "Gazon inclus"]
  },
  {
    name: "Pack 100 places",
    price: "175 000",
    items: ["1 chapiteau", "100 chaises VIP", "10 tables", "2 ventilateurs", "2 tréteaux", "Gazon inclus"]
  },
  {
    name: "Pack 150 places",
    price: "275 000",
    items: ["1 chapiteau", "150 chaises VIP", "15 tables", "3 ventilateurs", "3 tréteaux", "Gazon inclus"]
  },
  {
    name: "Pack 200 places",
    price: "375 000",
    items: ["1 chapiteau", "200 chaises VIP", "20 tables", "4 ventilateurs", "4 tréteaux", "Gazon inclus"]
  }
];

const services = [
  ["Tentes simples", "50 places : 15 000 F", "100 places : 25 000 F"],
  ["Chaises", "Simple : 100 F", "VIP : 500 F", "VVIP : 1 000 F"],
  ["Cambuses", "15 caisses : 7 500 F", "30 caisses : 15 000 F"],
  ["Sonorisation", "Sono : 20 000 F", "Animateur : 15 000 F"],
  ["Décoration", "Sur devis"],
  ["Services traiteur", "Sur devis"]
];

export default function Home() {
  return (
    <main style={{fontFamily:"Arial", color:"#24102f", background:"#fff"}}>
      <header style={{background:"#35005e", color:"white", padding:"25px 6%", textAlign:"center"}}>
        <h1 style={{fontSize:32, margin:0}}>YES ÉVÉNEMENTIEL</h1>
        <p>Nous faisons de votre événement une réussite !</p>
        <a href="#packs" style={{background:"#f5bd28", color:"#30004f", padding:"13px 22px", borderRadius:30, display:"inline-block", textDecoration:"none", fontWeight:"bold"}}>
          Découvrir nos offres
        </a>
      </header>

      <section style={{padding:"45px 6%", textAlign:"center"}}>
        <h2>Bienvenue chez YES Événementiel</h2>
        <p>Votre partenaire pour la location de chapiteaux, chaises VIP, tables, équipements, sonorisation et décoration à Ouagadougou.</p>
        <p>Mariages • Baptêmes • Anniversaires • Cérémonies • Événements divers</p>
      </section>

      <section id="packs" style={{padding:"35px 6%", background:"#f8f4fc"}}>
        <h2 style={{textAlign:"center"}}>Nos packs chapiteaux</h2>
        <p style={{textAlign:"center"}}>Tarifs calculés par jour – Gazon inclus dans tous les packs.</p>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:18}}>
          {packs.map(pack => (
            <article key={pack.name} style={{background:"white", padding:22, borderRadius:15, border:"1px solid #eadcf5"}}>
              <h3>{pack.name}</h3>
              <h2 style={{color:"#6500a0"}}>{pack.price} FCFA</h2>
              <ul>
                {pack.items.map(item => <li key={item}>{item}</li>)}
              </ul>
              <a href={`https://wa.me/22665924619?text=${encodeURIComponent("Bonjour YES Événementiel, je souhaite réserver le "+pack.name)}`} style={{display:"block", textAlign:"center", padding:12, background:"#35005e", color:"white", borderRadius:8, textDecoration:"none"}}>
                Réserver ce pack
              </a>
            </article>
          ))}
        </div>
      </section>

      <section style={{padding:"35px 6%"}}>
        <h2 style={{textAlign:"center"}}>Nos autres services et tarifs</h2>
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:15}}>
          {services.map(service => (
            <article key={service[0]} style={{padding:18, border:"1px solid #e6d9ed", borderRadius:12}}>
              <h3>{service[0]}</h3>
              {service.slice(1).map(line => <p key={line}>{line}</p>)}
            </article>
          ))}
        </div>
      </section>

      <section style={{background:"#35005e", color:"white", textAlign:"center", padding:35}}>
        <h2>Réservez votre événement dès maintenant !</h2>
        <p>Qualité • Ponctualité • Professionnalisme</p>
        <h2>WhatsApp : 65 92 46 19</h2>
        <a href="https://wa.me/22665924619" style={{display:"inline-block", background:"#20bd65", color:"white", padding:"15px 25px", borderRadius:30, textDecoration:"none", fontWeight:"bold"}}>
          Contacter YES sur WhatsApp
        </a>
        <p>Ouagadougou – Burkina Faso</p>
        <p>
          <a href="https://www.facebook.com/share/1Eb5sWVh61/" style={{color:"white"}}>Facebook</a>{" | "}
          <a href="https://www.tiktok.com/@yes.evenementiel" style={{color:"white"}}>TikTok</a>{" | "}
          <a href="https://www.instagram.com/yes.evenementiel/" style={{color:"white"}}>Instagram</a>
        </p>
        <p>© 2026 YES Événementiel. Tous droits réservés.</p>
      </section>
    </main>
  );
}
