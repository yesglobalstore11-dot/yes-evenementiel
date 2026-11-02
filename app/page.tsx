
"use client";

import { useState } from "react";

const packs = [
  { places: 50, prix: "90 000", chaises: 50, tables: 5, ventilateurs: 1 },
  { places: 100, prix: "175 000", chaises: 100, tables: 10, ventilateurs: 2 },
  { places: 150, prix: "275 000", chaises: 150, tables: 15, ventilateurs: 3 },
  { places: 200, prix: "375 000", chaises: 200, tables: 20, ventilateurs: 4 },
];

const services = [
  { titre: "Tentes simples", details: "50 places : 15 000 FCFA • 100 places : 25 000 FCFA", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800" },
  { titre: "Chaises", details: "Simple : 100 F • VIP : 500 F • VVIP : 1 000 F", image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800" },
  { titre: "Sonorisation", details: "Sono : 20 000 F • Animateur : 15 000 F", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800" },
  { titre: "Décoration", details: "Décoration personnalisée sur devis.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800" },
];

const photos = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900",
];

const whatsapp = "22665924619";

function reservation(message: string) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [date, setDate] = useState("");
  const [lieu, setLieu] = useState("");
  const [invites, setInvites] = useState("100");
  const [offre, setOffre] = useState("Pack 100 places");

  const envoyerReservation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `Bonjour YES Événementiel, je souhaite réserver.\nNom : ${nom}\nTéléphone : ${telephone}\nDate : ${date}\nLieu : ${lieu}\nNombre d'invités : ${invites}\nOffre : ${offre}`;
    window.open(reservation(message), "_blank");
  };

  const bouton = {
    display: "inline-block",
    background: "#6b16a0",
    color: "white",
    padding: "14px 22px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
  } as const;

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#251331", background: "#fff", margin: 0 }}>
      <header style={{ background: "#310052", color: "white", padding: "18px 6%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div>
          <strong style={{ fontSize: 24 }}>YES ÉVÉNEMENTIEL</strong>
          <div style={{ fontSize: 12 }}>Nous faisons de votre événement une réussite !</div>
        </div>
        <a href={reservation("Bonjour YES Événementiel, je souhaite obtenir des informations.")} style={{ ...bouton, background: "#20bd68" }}>Nous contacter</a>
      </header>

      <section style={{ minHeight: 390, padding: "65px 7%", background: "linear-gradient(#25003c88,#25003cbb), url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600') center/cover", color: "white", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ fontSize: "clamp(32px,6vw,54px)", margin: "0 0 15px" }}>Faites de votre événement un moment inoubliable !</h1>
        <p style={{ fontSize: 18, maxWidth: 650, lineHeight: 1.6 }}>Location de chapiteaux, chaises VIP, tables, sonorisation et décoration à Ouagadougou.</p>
        <a href="#packs" style={bouton}>Découvrir nos offres</a>
      </section>

      <section id="packs" style={{ padding: "55px 6%", background: "#f8f3fc", textAlign: "center" }}>
        <h2 style={{ fontSize: 32 }}>Nos packs chapiteaux</h2>
        <p>Tarifs par jour • Gazon inclus dans tous les packs</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18, marginTop: 30 }}>
          {packs.map((p) => (
            <article key={p.places} style={{ background: "white", borderRadius: 16, padding: 23, boxShadow: "0 4px 18px #00000010", textAlign: "left" }}>
              <h3>Pack {p.places} places</h3>
              <strong style={{ color: "#6b16a0", fontSize: 25 }}>{p.prix} FCFA</strong>
              <p>✓ 1 chapiteau</p>
              <p>✓ {p.chaises} chaises VIP</p>
              <p>✓ {p.tables} tables</p>
              <p>✓ {p.ventilateurs} ventilateur(s)</p>
              <p>✓ {p.ventilateurs} tréteau(x)</p>
              <p>✓ Gazon inclus</p>
              <a href={reservation(`Bonjour, je souhaite réserver le Pack ${p.places} places à ${p.prix} FCFA.`)} style={{ ...bouton, width: "100%", boxSizing: "border-box", textAlign: "center" }}>Réserver ce pack</a>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "50px 6%", textAlign: "center" }}>
        <h2 style={{ fontSize: 30 }}>Nos autres services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20, marginTop: 28 }}>
          {services.map((s) => (
            <article key={s.titre} style={{ border: "1px solid #eadfee", borderRadius: 16, overflow: "hidden", textAlign: "left" }}>
              <img src={s.image} alt={s.titre} style={{ width: "100%", height: 160, objectFit: "cover" }} />
              <div style={{ padding: 18 }}>
                <h3>{s.titre}</h3>
                <p>{s.details}</p>
                <a href={reservation(`Bonjour, je souhaite des informations sur : ${s.titre}.`)} style={bouton}>Demander un devis</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "45px 6%", background: "#f8f3fc", textAlign: "center" }}>
        <h2>Quelques inspirations pour vos événements</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14 }}>
          {photos.map((photo) => <img key={photo} src={photo} alt="Décoration événementielle" style={{ width: "100%", height: 190, objectFit: "cover", borderRadius: 14 }} />)}
        </div>
      </section>

      <section id="reservation" style={{ padding: "55px 6%", textAlign: "center" }}>
        <h2>Réservez votre événement</h2>
        <p>Remplissez les informations et envoyez votre demande directement sur WhatsApp.</p>
        <form onSubmit={envoyerReservation} style={{ maxWidth: 520, margin: "25px auto", display: "grid", gap: 13, textAlign: "left" }}>
          <input required placeholder="Votre nom" value={nom} onChange={(e) => setNom(e.target.value)} style={champ} />
          <input required placeholder="Votre numéro de téléphone" value={telephone} onChange={(e) => setTelephone(e.target.value)} style={champ} />
          <label>Date de l'événement<input required type="date" value={date} onChange={(e) => setDate(e.target.value)} style={champ} /></label>
          <input required placeholder="Lieu de l'événement" value={lieu} onChange={(e) => setLieu(e.target.value)} style={champ} />
          <input required type="number" min="1" placeholder="Nombre d'invités" value={invites} onChange={(e) => setInvites(e.target.value)} style={champ} />
          <select value={offre} onChange={(e) => setOffre(e.target.value)} style={champ}>
            <option>Pack 50 places</option>
            <option>Pack 100 places</option>
            <option>Pack 150 places</option>
            <option>Pack 200 places</option>
            <option>Autres services</option>
          </select>
          <button type="submit" style={{ ...bouton, background: "#20bd68", fontSize: 17 }}>Envoyer ma réservation sur WhatsApp</button>
        </form>
      </section>

      <footer style={{ background: "#310052", color: "white", padding: "42px 6%", textAlign: "center" }}>
        <h2>YES ÉVÉNEMENTIEL</h2>
        <p>Qualité • Ponctualité • Professionnalisme</p>
        <h2>WhatsApp : 65 92 46 19</h2>
        <a href={reservation("Bonjour YES Événementiel, je souhaite réserver.")} style={{ ...bouton, background: "#20bd68" }}>Contacter YES sur WhatsApp</a>
        <p>Ouagadougou – Burkina Faso</p>
        <p>
          <a href="https://www.facebook.com/share/1Eb5sWVh61/" style={lien}>Facebook</a> {" • "}
          <a href="https://www.tiktok.com/@yes.evenementiel?_r=1&_t=ZS-9B2nq8svQdK" style={lien}>TikTok</a> {" • "}
          <a href="https://www.instagram.com/yes.evenementiel?rpxt=MW5keHdjYWs4cjNreA==" style={lien}>Instagram</a>
        </p>
        <small>© 2026 YES Événementiel. Tous droits réservés.</small>
      </footer>
    </main>
  );
}

const champ = {
  width: "100%",
  padding: 14,
  border: "1px solid #d8cadd",
  borderRadius: 9,
  fontSize: 16,
  boxSizing: "border-box" as const,
};

const lien = { color: "white", textDecoration: "underline" };
