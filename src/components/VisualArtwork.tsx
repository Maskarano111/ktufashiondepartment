import React from 'react';
import { PortfolioItem } from '../types';

interface VisualArtworkProps {
  item: PortfolioItem;
  className?: string;
  isDetailed?: boolean;
}

export const VisualArtwork: React.FC<VisualArtworkProps> = ({ item, className = '', isDetailed = false }) => {
  const [imageError, setImageError] = React.useState(false);
  const { motif, accentColor, secondaryColor, badge } = item.visualTheme;

  // Real editorial & runway photography rendering with high-definition display
  if (item.image && !imageError) {
    return (
      <div
        className={`relative w-full h-full overflow-hidden select-none bg-neutral-900 group ${className}`}
        role="img"
        aria-label={`${item.title} - Visual showcase`}
      >
        <img
          src={item.image}
          alt={`${item.title} by ${item.studentName}`}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Editorial overlay scrim to highlight text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-blue-950/10 pointer-events-none mix-blend-multiply" />

        {/* Floating Category/Badge Pill */}
        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase bg-black/70 backdrop-blur-md text-white border border-white/20 shadow-sm">
            <span
              className="w-1.5 h-1.5 rounded-full shadow-xs"
              style={{ backgroundColor: accentColor || '#ea580c' }}
            />
            {badge || item.category}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full overflow-hidden flex items-center justify-center select-none bg-neutral-950 ${className}`}
      role="img"
      aria-label={`${item.title} - Visual showcase`}
    >
      {/* Editorial Mesh Gradient Background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 75% 25%, ${accentColor}33 0%, transparent 60%), radial-gradient(circle at 20% 80%, ${secondaryColor}88 0%, transparent 70%)`,
        }}
      />

      {/* Subtle Fine Registration Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {motif === 'haute-couture' && (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="hc-orange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FED7AA" />
              <stop offset="35%" stopColor="#EA580C" />
              <stop offset="70%" stopColor="#C2410C" />
              <stop offset="100%" stopColor="#7C2D12" />
            </linearGradient>
            <radialGradient id="spotlight" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#080E1E" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="600" fill="#080E1E" />
          <rect width="800" height="600" fill="url(#spotlight)" />

          {/* Geometric Kente Architecture in Orange & Blue */}
          <g opacity="0.3">
            <pattern id="kente-mesh" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,0 60,30 30,60 0,30" fill="none" stroke="#EA580C" strokeWidth="1" />
              <line x1="0" y1="30" x2="60" y2="30" stroke="#1D4ED8" strokeWidth="0.7" strokeDasharray="3 3" />
            </pattern>
            <rect width="800" height="600" fill="url(#kente-mesh)" />
          </g>

          {/* Couture Silhouette (Architectural Gown) */}
          <g transform="translate(400, 310)">
            {/* Mannequin / Model Head & Neckline */}
            <ellipse cx="0" cy="-180" rx="24" ry="32" fill="#EA580C" opacity="0.9" />
            <path d="M-10 -150 C-6 -120 -4 -110 0 -110 C4 -110 6 -120 10 -150" stroke="#EA580C" strokeWidth="3" fill="none" />

            {/* Architectural Winged Shoulders */}
            <path
              d="M-130 -100 C-60 -115 0 -85 0 -85 C0 -85 60 -115 130 -100 C150 -30 60 50 40 210 L-40 210 C-60 50 -150 -30 -130 -100 Z"
              fill="url(#hc-orange)"
              stroke="#FDBA74"
              strokeWidth="1.5"
            />

            {/* Pleated Fan Origami Accents in KTU Blue */}
            <polygon points="-130,-100 -200,60 -90,80" fill="#1D4ED8" opacity="0.85" />
            <polygon points="130,-100 200,60 90,80" fill="#1D4ED8" opacity="0.85" />
            <line x1="-130" y1="-100" x2="-90" y2="80" stroke="#FFF" strokeWidth="1" opacity="0.5" />
            <line x1="130" y1="-100" x2="90" y2="80" stroke="#FFF" strokeWidth="1" opacity="0.5" />

            {/* Vertical Boning Channels */}
            <line x1="0" y1="-85" x2="0" y2="210" stroke="#FFF" strokeWidth="2" opacity="0.7" />
            <line x1="-20" y1="-75" x2="-25" y2="210" stroke="#FFF" strokeWidth="1" opacity="0.4" />
            <line x1="20" y1="-75" x2="25" y2="210" stroke="#FFF" strokeWidth="1" opacity="0.4" />
          </g>

          {/* Editorial Watermark Coordinates */}
          <text x="50" y="550" fill="#EA580C" opacity="0.8" fontFamily="JetBrains Mono" fontSize="12" letterSpacing="4">
            KTU // APHRODITE RUNWAY ARCHIVE
          </text>
          <text x="750" y="550" textAnchor="end" fill="#60A5FA" opacity="0.6" fontFamily="JetBrains Mono" fontSize="11">
            HAUTE COUTURE SPEC 01
          </text>
        </svg>
      )}

      {motif === 'branding-pack' && (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="amber-glass" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2e1403" />
              <stop offset="35%" stopColor="#8d4008" />
              <stop offset="70%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#1a0b02" />
            </linearGradient>
            <linearGradient id="cyan-foil" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          <rect width="800" height="600" fill="#080D15" />

          {/* Modern Editorial Packaging Stage */}
          <line x1="120" y1="80" x2="120" y2="520" stroke="#1E293B" strokeWidth="1" />
          <line x1="680" y1="80" x2="680" y2="520" stroke="#1E293B" strokeWidth="1" />
          <line x1="120" y1="480" x2="680" y2="480" stroke="#06B6D4" strokeWidth="1" opacity="0.3" />

          {/* Amber Bottle Studio Shot */}
          <g transform="translate(400, 280)">
            {/* Wooden/Orange Stopper */}
            <rect x="-30" y="-190" width="60" height="28" rx="4" fill="#EA580C" stroke="#C2410C" strokeWidth="1.5" />
            <rect x="-20" y="-162" width="40" height="45" fill="url(#amber-glass)" />

            {/* Heavy Glass Body */}
            <path
              d="M-85 -117 C-85 -70 -80 -50 -80 160 C-80 180 -60 185 0 185 C60 185 80 180 80 160 C80 -50 85 -70 85 -117 C50 -125 25 -120 0 -120 C-25 -120 -50 -125 -85 -117 Z"
              fill="url(#amber-glass)"
              stroke="#06B6D4"
              strokeWidth="1.5"
            />

            {/* Embossed Glass Highlights */}
            <path d="M-70 -80 L-70 140" stroke="#FFFFFF" strokeWidth="3" opacity="0.15" />

            {/* High-Texture Paper Label */}
            <rect x="-60" y="-30" width="120" height="150" rx="4" fill="#F8FAFC" />
            <rect x="-55" y="-25" width="110" height="140" rx="2" fill="none" stroke="#0F172A" strokeWidth="1" />
            <text x="0" y="8" textAnchor="middle" fill="#0F172A" fontFamily="Cinzel" fontSize="15" fontWeight="bold" letterSpacing="3">
              VOLTA
            </text>
            <text x="0" y="30" textAnchor="middle" fill="#0891B2" fontFamily="Plus Jakarta Sans" fontSize="8" fontWeight="700" letterSpacing="4">
              PURE BOTANICAL
            </text>
            <circle cx="0" cy="58" r="16" fill="none" stroke="#EA580C" strokeWidth="1.5" />
            <path d="M-8 58 L8 58 M0 50 L0 66" stroke="#EA580C" strokeWidth="1.5" />
            <text x="0" y="98" textAnchor="middle" fill="#475569" fontFamily="Plus Jakarta Sans" fontSize="8">
              Koforidua Reserve
            </text>
            <text x="0" y="112" textAnchor="middle" fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="7">
              43% VOL · 750 ML
            </text>
          </g>

          <text x="50" y="550" fill="#06B6D4" opacity="0.6" fontFamily="JetBrains Mono" fontSize="12" letterSpacing="4">
            PACKAGING LAB // SPEC 02
          </text>
        </svg>
      )}

      {motif === 'typography-grid' && (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover">
          <rect width="800" height="600" fill="#0A0B10" />
          <g transform="translate(100, 130)">
            <text x="0" y="120" fill="#2563EB" fontFamily="Cinzel" fontSize="140" fontWeight="800" opacity="0.9">
              AKAN
            </text>
            <text x="16" y="215" fill="#F8FAFC" fontFamily="Playfair Display" fontSize="72" fontStyle="italic" fontWeight="600">
              Glyph // 26
            </text>
            <line x1="16" y1="260" x2="600" y2="260" stroke="#EA580C" strokeWidth="2" />
            <text x="16" y="300" fill="#94A3B8" fontFamily="JetBrains Mono" fontSize="13" letterSpacing="4">
              VARIABLE WEIGHT SPECTRUM [100 - 900]
            </text>
            <text x="16" y="330" fill="#38BDF8" fontFamily="JetBrains Mono" fontSize="11" letterSpacing="2">
              ORAL LINGUISTIC SEMIOTICS · KTU GRAPHIC LAB
            </text>
          </g>
          {/* Adinkra Vector Geometry */}
          <g transform="translate(620, 400)">
            <circle cx="0" cy="0" r="85" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="6 4" />
            <circle cx="0" cy="0" r="60" fill="none" stroke="#EA580C" strokeWidth="2" />
            <path d="M-40 -40 L40 40 M-40 40 L40 -40" stroke="#F8FAFC" strokeWidth="3" />
          </g>
        </svg>
      )}

      {motif === 'sustainable-denim' && (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover">
          <rect width="800" height="600" fill="#0C1322" />
          {/* Runway Perspective Grid */}
          <polygon points="340,0 460,0 650,600 150,600" fill="#111B30" stroke="#EA580C" strokeWidth="1" opacity="0.6" />
          <line x1="400" y1="0" x2="400" y2="600" stroke="#EA580C" strokeWidth="2" strokeDasharray="16 12" opacity="0.4" />

          {/* Upcycled Denim Silhouette */}
          <g transform="translate(400, 310)">
            <ellipse cx="0" cy="-170" rx="22" ry="30" fill="#E2E8F0" opacity="0.8" />
            <path
              d="M-90 -90 L-140 25 L-80 50 L-50 200 L50 200 L80 50 L140 25 L90 -90 Z"
              fill="#1D4ED8"
              stroke="#60A5FA"
              strokeWidth="2"
            />
            {/* Tessellated Geometric Origami Facets */}
            <polygon points="-90,-90 0,-115 -80,50" fill="#1E40AF" opacity="0.9" />
            <polygon points="90,-90 0,-115 80,50" fill="#2563EB" opacity="0.9" />
            <polygon points="0,-115 0,200 50,200" fill="#1D4ED8" opacity="0.8" />
            <polygon points="0,-115 0,200 -50,200" fill="#1E3A8A" opacity="0.8" />

            {/* Orange Stitching Rivets */}
            <circle cx="-80" cy="50" r="4" fill="#EA580C" />
            <circle cx="80" cy="50" r="4" fill="#EA580C" />
          </g>

          <text x="50" y="550" fill="#EA580C" opacity="0.8" fontFamily="JetBrains Mono" fontSize="12" letterSpacing="4">
            ZERO-WASTE UPCYCLING // SPEC 03
          </text>
        </svg>
      )}

      {motif === 'textile-weave' && (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover">
          <rect width="800" height="600" fill="#081024" />
          {/* Indigo dye contours */}
          <path d="M0,160 C200,280 500,70 800,190 L800,600 L0,600 Z" fill="#162E66" opacity="0.8" />
          <path d="M0,300 C250,200 550,380 800,280 L800,600 L0,600 Z" fill="#1D4ED8" opacity="0.6" />
          <path d="M0,430 C240,520 560,370 800,450 L800,600 L0,600 Z" fill="#3B82F6" opacity="0.4" />
          {/* Cassava resist cracks */}
          <path d="M160,110 L270,220 L240,330 M430,140 L400,250 L480,360" stroke="#F8FAFC" strokeWidth="2" opacity="0.6" strokeDasharray="8 6" fill="none" />
          <text x="50" y="550" fill="#60A5FA" opacity="0.6" fontFamily="JetBrains Mono" fontSize="12" letterSpacing="4">
            TEXTILE CHEMISTRY // SPEC 05
          </text>
        </svg>
      )}

      {motif === 'ui-design' && (
        <svg viewBox="0 0 800 600" className="w-full h-full object-cover">
          <rect width="800" height="600" fill="#090E17" />
          <circle cx="400" cy="300" r="180" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="10 8" opacity="0.5" />
          <circle cx="400" cy="300" r="120" fill="none" stroke="#34D399" strokeWidth="1.5" opacity="0.7" />
          <line x1="160" y1="300" x2="640" y2="300" stroke="#10B981" strokeWidth="3" />
          <line x1="400" y1="120" x2="400" y2="480" stroke="#10B981" strokeWidth="3" />
          <circle cx="400" cy="300" r="18" fill="#10B981" />
          <circle cx="240" cy="300" r="10" fill="#F8FAFC" />
          <circle cx="560" cy="300" r="10" fill="#F8FAFC" />
          <text x="425" y="190" fill="#F8FAFC" fontFamily="Plus Jakarta Sans" fontSize="14" fontWeight="700">
            KOFORIDUA CIVIC TRANSIT
          </text>
          <text x="425" y="215" fill="#A7F3D0" fontFamily="Plus Jakarta Sans" fontSize="11">
            BILINGUAL SPATIAL UI // SPEC 06
          </text>
        </svg>
      )}

      {/* Vignette / Film Grain Lighting */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

      {/* Floating Accent Tag */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/15 rounded-md text-[11px] font-medium text-white shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
        <span>{badge}</span>
      </div>
    </div>
  );
};
