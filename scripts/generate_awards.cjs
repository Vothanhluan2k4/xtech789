const fs = require('fs');
const path = require('path');

const awards = [
  {
    filename: 'award_marieclaire.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="46" fill="#FAF5F0" stroke="#B76E79" stroke-width="3"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#B76E79" stroke-width="1"/>
      <text x="50" y="32" font-family="serif" font-size="6.5" font-weight="bold" fill="#B76E79" text-anchor="middle" letter-spacing="0.5">PRIX D'EXCELLENCE</text>
      <text x="50" y="42" font-family="sans-serif" font-size="5.5" font-weight="600" fill="#4A4A4A" text-anchor="middle">DE LA BEAUTÉ</text>
      <line x1="30" y1="48" x2="70" y2="48" stroke="#B76E79" stroke-width="1"/>
      <text x="50" y="60" font-family="sans-serif" font-size="7.5" font-weight="900" fill="#1A1A1A" text-anchor="middle">marie claire</text>
      <text x="50" y="72" font-family="sans-serif" font-size="6" font-weight="bold" fill="#B76E79" text-anchor="middle">WINNER 2024</text>
    </svg>`
  },
  {
    filename: 'award_elle.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="46" fill="#000000" stroke="#FFFFFF" stroke-width="2"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#C5A059" stroke-width="2"/>
      <text x="50" y="35" font-family="serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">ELLE</text>
      <text x="50" y="48" font-family="sans-serif" font-size="5.5" font-weight="800" fill="#C5A059" text-anchor="middle" letter-spacing="0.5">INTERNATIONAL</text>
      <text x="50" y="57" font-family="sans-serif" font-size="6.5" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">BEAUTY AWARDS</text>
      <text x="50" y="70" font-family="sans-serif" font-size="6" font-weight="700" fill="#C5A059" text-anchor="middle">WINNER 2023</text>
    </svg>`
  },
  {
    filename: 'award_organics.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="46" fill="#F4FBF7" stroke="#2E7D32" stroke-width="3"/>
      <circle cx="50" cy="50" r="41" fill="none" stroke="#81C784" stroke-width="1.5" stroke-dasharray="3,2"/>
      <path d="M50 20 C42 26 40 36 50 44 C60 36 58 26 50 20 Z" fill="#2E7D32"/>
      <text x="50" y="55" font-family="sans-serif" font-size="6" font-weight="800" fill="#1B5E20" text-anchor="middle" letter-spacing="0.5">ORGANIC BEAUTY</text>
      <text x="50" y="63" font-family="sans-serif" font-size="6" font-weight="800" fill="#2E7D32" text-anchor="middle">GLOBAL AWARDS</text>
      <text x="50" y="73" font-family="sans-serif" font-size="6" font-weight="900" fill="#F57F17" text-anchor="middle">GOLD WINNER 2023</text>
    </svg>`
  },
  {
    filename: 'award_stevie.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="46" fill="#2C2014" stroke="#CD7F32" stroke-width="3"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#E6A15C" stroke-width="1"/>
      <polygon points="50,18 53,26 61,27 55,33 57,41 50,37 43,41 45,33 39,27 47,26" fill="#E6A15C"/>
      <text x="50" y="52" font-family="sans-serif" font-size="7" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">THE STEVIE</text>
      <text x="50" y="60" font-family="sans-serif" font-size="6" font-weight="800" fill="#E6A15C" text-anchor="middle">AWARDS</text>
      <text x="50" y="70" font-family="sans-serif" font-size="5.5" font-weight="700" fill="#CD7F32" text-anchor="middle">BRONZE WINNER</text>
      <text x="50" y="78" font-family="sans-serif" font-size="5" font-weight="600" fill="#E5E7EB" text-anchor="middle">2023</text>
    </svg>`
  },
  {
    filename: 'award_prevention.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="46" fill="#F0F8FF" stroke="#0284C7" stroke-width="3"/>
      <circle cx="50" cy="50" r="41" fill="none" stroke="#38BDF8" stroke-width="1.5"/>
      <text x="50" y="35" font-family="sans-serif" font-size="7.5" font-weight="900" fill="#0369A1" text-anchor="middle">PREVENTION</text>
      <text x="50" y="46" font-family="sans-serif" font-size="6" font-weight="700" fill="#0C4A6E" text-anchor="middle">HEALTHY BEAUTY</text>
      <text x="50" y="55" font-family="sans-serif" font-size="6" font-weight="700" fill="#0284C7" text-anchor="middle">AWARDS</text>
      <rect x="25" y="61" width="50" height="13" rx="3" fill="#0284C7"/>
      <text x="50" y="70" font-family="sans-serif" font-size="5.5" font-weight="bold" fill="#FFFFFF" text-anchor="middle">WINNER 2022</text>
    </svg>`
  },
  {
    filename: 'award_glamour.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="46" fill="#831843" stroke="#F472B6" stroke-width="3"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#FBCFE8" stroke-width="1"/>
      <text x="50" y="36" font-family="sans-serif" font-size="8" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">GLAMOUR</text>
      <text x="50" y="48" font-family="sans-serif" font-size="6" font-weight="700" fill="#FBCFE8" text-anchor="middle">BEAUTY AWARDS</text>
      <line x1="30" y1="54" x2="70" y2="54" stroke="#F472B6" stroke-width="1"/>
      <text x="50" y="65" font-family="sans-serif" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle">CLEAN BEAUTY</text>
      <text x="50" y="75" font-family="sans-serif" font-size="6" font-weight="bold" fill="#FBCFE8" text-anchor="middle">WINNER 2023</text>
    </svg>`
  },
  {
    filename: 'award_nutra.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="46" fill="#0F172A" stroke="#38BDF8" stroke-width="3"/>
      <circle cx="50" cy="50" r="41" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
      <text x="50" y="34" font-family="sans-serif" font-size="5.5" font-weight="800" fill="#38BDF8" text-anchor="middle">NUTRAINGREDIENTS</text>
      <text x="50" y="44" font-family="sans-serif" font-size="7" font-weight="900" fill="#F59E0B" text-anchor="middle" letter-spacing="0.5">USA AWARDS</text>
      <line x1="28" y1="50" x2="72" y2="50" stroke="#38BDF8" stroke-width="1"/>
      <text x="50" y="63" font-family="sans-serif" font-size="6" font-weight="800" fill="#FFFFFF" text-anchor="middle">FINALIST</text>
      <text x="50" y="73" font-family="sans-serif" font-size="5.5" font-weight="700" fill="#94A3B8" text-anchor="middle">2023</text>
    </svg>`
  },
  {
    filename: 'award_harpers.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="46" fill="#171717" stroke="#D4AF37" stroke-width="3"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#F5E6C8" stroke-width="1"/>
      <text x="50" y="34" font-family="serif" font-size="6" font-weight="bold" fill="#D4AF37" text-anchor="middle">HARPER'S BAZAAR</text>
      <text x="50" y="46" font-family="serif" font-size="7" font-weight="900" fill="#FFFFFF" text-anchor="middle">BEST OF BEAUTY</text>
      <line x1="28" y1="52" x2="72" y2="52" stroke="#D4AF37" stroke-width="1"/>
      <text x="50" y="64" font-family="sans-serif" font-size="5.5" font-weight="700" fill="#F5E6C8" text-anchor="middle">LUMINOUS BASE</text>
      <text x="50" y="74" font-family="sans-serif" font-size="6" font-weight="800" fill="#D4AF37" text-anchor="middle">WINNER 2023</text>
    </svg>`
  },
  {
    filename: 'award_cosmo.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="46" fill="#BE123C" stroke="#FDE047" stroke-width="3"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#FECDD3" stroke-width="1"/>
      <text x="50" y="35" font-family="sans-serif" font-size="6.5" font-weight="900" fill="#FFFFFF" text-anchor="middle">COSMOPOLITAN</text>
      <text x="50" y="47" font-family="sans-serif" font-size="6" font-weight="800" fill="#FDE047" text-anchor="middle">BEAUTY AWARDS</text>
      <text x="50" y="60" font-family="sans-serif" font-size="5.5" font-weight="700" fill="#FFFFFF" text-anchor="middle">READERS' CHOICE</text>
      <text x="50" y="72" font-family="sans-serif" font-size="6" font-weight="900" fill="#FDE047" text-anchor="middle">WINNER 2022</text>
    </svg>`
  },
  {
    filename: 'award_seal.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="46" fill="#064E3B" stroke="#10B981" stroke-width="3"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#6EE7B7" stroke-width="1"/>
      <text x="50" y="34" font-family="sans-serif" font-size="9" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">SEAL</text>
      <text x="50" y="46" font-family="sans-serif" font-size="5.5" font-weight="700" fill="#6EE7B7" text-anchor="middle">BUSINESS AWARDS</text>
      <line x1="28" y1="52" x2="72" y2="52" stroke="#10B981" stroke-width="1"/>
      <text x="50" y="64" font-family="sans-serif" font-size="5" font-weight="800" fill="#FFFFFF" text-anchor="middle">SUSTAINABILITY</text>
      <text x="50" y="74" font-family="sans-serif" font-size="6" font-weight="bold" fill="#6EE7B7" text-anchor="middle">LEADER 2023</text>
    </svg>`
  },
  {
    filename: 'award_betternutrition.svg',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
      <circle cx="50" cy="50" r="46" fill="#047857" stroke="#FBBF24" stroke-width="3"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#A7F3D0" stroke-width="1"/>
      <text x="50" y="34" font-family="sans-serif" font-size="5.5" font-weight="800" fill="#A7F3D0" text-anchor="middle">BETTER NUTRITION</text>
      <text x="50" y="45" font-family="sans-serif" font-size="6.5" font-weight="900" fill="#FFFFFF" text-anchor="middle">BEST OF</text>
      <text x="50" y="55" font-family="sans-serif" font-size="6.5" font-weight="900" fill="#FBBF24" text-anchor="middle">SUPPLEMENTS</text>
      <text x="50" y="68" font-family="sans-serif" font-size="5.5" font-weight="800" fill="#FFFFFF" text-anchor="middle">WINNER</text>
      <text x="50" y="76" font-family="sans-serif" font-size="5" font-weight="700" fill="#FBBF24" text-anchor="middle">2022</text>
    </svg>`
  }
];

const targetDir = path.join(__dirname, '..', 'public', 'images', 'awards');
for (const a of awards) {
  fs.writeFileSync(path.join(targetDir, a.filename), a.svg.trim(), 'utf8');
}
console.log('Successfully written ' + awards.length + ' award badges to ' + targetDir);

