import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Notre Équipe',
  description: "Découvrez l'équipe pédagogique et les coachs de l'Université Militante ODAS.",
}

const equipe = [
  { nom: 'Dr. Béniel Agossou',      role: 'Directeur',                 organisation: 'Le Centre ODAS',                       pays: '🌍 Afrique',      photo: '/equipe/beniel-agossou.png',    categorie: 'odas' },
  { nom: 'M. Noël Adanlao',         role: 'Coordinateur de programme', organisation: 'Le Centre ODAS',                       pays: '🌍 Afrique',      photo: '/equipe/noel-adanlao.png',      categorie: 'odas' },
  { nom: 'Dr. Ginette Hounkanrin',  role: 'Facilitatrice',             organisation: 'Pathfinder International',             pays: '🇧🇫 Burkina Faso', photo: '/equipe/ginette-hounkanrin.png', categorie: 'facilitation' },
  { nom: 'Mme Cécile Yougbaré',     role: 'Facilitatrice',             organisation: 'Médecins du Monde',                   pays: '🇫🇷 France',      photo: '/equipe/cecile-yougbare.png',   categorie: 'facilitation' },
  { nom: 'Mme Moinsalima Hassane',  role: 'Facilitatrice',             organisation: 'ANJSR',                               pays: '🇸🇳 Sénégal',     photo: '/equipe/moinsalima-hassane.png', categorie: 'facilitation' },
  { nom: 'Dr. Melchie Ibula Bwanga',role: 'Facilitatrice',             organisation: 'AJCAF-AS',                            pays: '🌍 Afrique',      photo: '/equipe/melchie-ibula.png',     categorie: 'facilitation' },
  { nom: 'Saskia Hüsken',           role: 'Facilitatrice',             organisation: 'Rutgers International',               pays: '🇳🇱 Pays-Bas',    photo: '/equipe/saskia-husken.png',     categorie: 'facilitation' },
  { nom: 'Souwaiba Ibrahim',        role: 'Facilitatrice',             organisation: 'Ligue Nigérienne des Droits des Femmes', pays: '🇳🇪 Niger',    photo: '/equipe/souwaiba-ibrahim.png',  categorie: 'facilitation' },
  { nom: 'Dr. Raqibat Idris',       role: 'Éditrice',                  organisation: 'GFMER',                               pays: '🌍 Afrique',      photo: '/equipe/raqibat-idris.png',     categorie: 'edition' },
  { nom: 'Prof. Aldo Campana',      role: 'Éditeur',                   organisation: 'GFMER',                               pays: '🇨🇭 Suisse',      photo: '/equipe/aldo-campana.png',      categorie: 'edition' },
]

function MembreCard({ membre }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ border: '2px solid rgba(98,46,209,0.1)' }}>
      <div className="relative overflow-hidden" style={{ height: '240px', background: '#f3ebff' }}>
        <Image
          src={membre.photo}
          alt={`Photo de ${membre.nom}`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: 'linear-gradient(to top, rgba(98,46,209,0.75), transparent)' }} />
        <div className="absolute bottom-3 left-3 text-sm">{membre.pays}</div>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-bold text-base leading-tight mb-1" style={{ color: '#321b45' }}>{membre.nom}</h3>
        <p className="font-heading font-semibold text-sm mb-1" style={{ color: '#34b7ad' }}>{membre.role}</p>
        <p className="text-gray-400 text-xs">{membre.organisation}</p>
      </div>
    </div>
  )
}

function SectionTitle({ color, label }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-1.5 h-9 rounded-full" style={{ background: color }} />
      <h2 className="font-heading font-black text-2xl" style={{ color: '#321b45' }}>{label}</h2>
    </div>
  )
}

export default function EquipePage() {
  const equipeOdas    = equipe.filter(m => m.categorie === 'odas')
  const facilitateurs = equipe.filter(m => m.categorie === 'facilitation')
  const editeurs      = equipe.filter(m => m.categorie === 'edition')

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-28 pb-16"
        style={{ background: 'linear-gradient(135deg, #321b45 0%, #622ed1 100%)' }}>
        {/* Déco */}
        <div className="absolute top-8 right-8 opacity-15 animate-float">
          <Image src="/pictos/picto-04.png" alt="" width={70} height={70} className="object-contain" />
        </div>
        <div className="absolute bottom-12 left-8 opacity-15 animate-float-slow">
          <Image src="/pictos/picto-07.png" alt="" width={55} height={55} className="object-contain" />
        </div>
        <div className="absolute top-12 right-1/3 opacity-10 font-black text-white select-none" style={{ fontSize: '100px' }}>♀</div>

        <div className="section-container text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full mb-5 text-xs font-heading font-bold tracking-widest uppercase"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)' }}>
            <span>♀</span> L&apos;équipe
          </div>
          <h1 className="font-heading font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
            Des expert·es au service<br />
            <span style={{ color: '#ecc92f' }}>de votre formation</span>
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
            Facilitatrices, coordinateurs et éditeurs engagés pour la formation militante
            sur l&apos;avortement sécurisé en Afrique.
          </p>
        </div>

        {/* Vague bas */}
        <svg viewBox="0 0 1440 50" className="w-full mt-10 block">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="white" />
        </svg>
      </section>

      {/* Bande picto-10 */}
      <div className="overflow-hidden bg-white border-b border-gray-100">
        <Image src="/pictos/picto-10.png" alt="" width={1400} height={60}
          className="w-full object-cover" style={{ height: '40px', objectPosition: 'center' }} unoptimized />
      </div>

      {/* ── MEMBRES ── */}
      <section className="py-16 bg-white">
        <div className="section-container">

          {/* Équipe ODAS */}
          <SectionTitle color="#ecc92f" label="Équipe Centre ODAS" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {equipeOdas.map((m, i) => <MembreCard key={i} membre={m} />)}
          </div>

          {/* Facilitatrices */}
          <SectionTitle color="#622ed1" label="Facilitatrices" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {facilitateurs.map((m, i) => <MembreCard key={i} membre={m} />)}
          </div>

          {/* Éditeurs */}
          <SectionTitle color="#34b7ad" label="Éditeurs scientifiques" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {editeurs.map((m, i) => <MembreCard key={i} membre={m} />)}
          </div>

        </div>
      </section>

      {/* Bande picto-10 */}
      <div className="overflow-hidden bg-white border-y border-gray-100">
        <Image src="/pictos/picto-10.png" alt="" width={1400} height={60}
          className="w-full object-cover" style={{ height: '40px', objectPosition: 'center' }} unoptimized />
      </div>

      {/* ── CTA ── */}
      <section className="py-14 bg-white text-center relative overflow-hidden">
        <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <Image src="/pictos/picto-05.png" alt="" width={52} height={52} className="object-contain" />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <Image src="/pictos/picto-07.png" alt="" width={52} height={52} className="object-contain" />
        </div>
        <div className="section-container fade-up">
          <h2 className="font-heading font-black mb-3" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', lineHeight: 1.15, color: '#622ed1' }}>
            Vous aussi, rejoignez<br />l&apos;aventure
          </h2>
          <p className="text-gray-500 text-sm mb-7 max-w-sm mx-auto">
            Postulez à la Cohorte 3 et apprenez aux côtés de ces expert·es engagé·es.
          </p>
          <Link href="/candidature"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-heading font-bold text-base transition-all duration-300 hover:-translate-y-1"
            style={{ background: '#ecc92f', color: '#321b45', boxShadow: '0 6px 20px rgba(236,201,47,.4)' }}>
            Candidatez ——→
          </Link>
        </div>
      </section>
    </>
  )
}
