# EMtech — Software Engineering & Development Studio

> **High-Performance Web Applications, Mobile Platforms & University Capstone Systems**  
> Based in Accra, Ghana 🇬🇭 • Powered by Three.js WebGL, GSAP ScrollTrigger & Vanilla Architecture.

---

## ⚡ Overview

**EMtech** is a cutting-edge software development studio based in Accra, Ghana. We build custom, dependable software solutions tailored for two core audiences:

1. **Ghanaian Students & Academia:** Stress-free, defense-ready final-year university capstone projects across Computer Science, Information Technology, and Computer Engineering. Complete working code, Chapter 1 to 5 SRS documentation, and viva defense walkthroughs.
2. **Growing Businesses & SMEs:** High-converting business web portals, custom mobile applications, and automated Mobile Money payment integrations (MTN MoMo, Telecel Cash, AT Money, and card gateways).

The landing page provides an immersive, interactive **"scrollytelling"** experience in a stealth **Cyber Black (`#040605`) & Neon Green (`#00ff88`)** visual theme, featuring real-time WebGL graphics, kinetic card physics, live project showcases, and dual WhatsApp routing.

---

## 🚀 Key Highlights & Features

- **Dynamic 3D WebGL Matrix Backdrop:** Built with **Three.js**, featuring 1,000 glowing ambient particles, a wireframe cyber torus knot, floating algorithmic data cubes, and mouse-reactive camera parallax.
- **Scrollytelling Engine:** Smooth inertia scrolling driven by **Lenis** with section tracking orchestrated by **GSAP ScrollTrigger**.
- **Demonstrable Real Portfolio:** Inspect live case studies with real deployed platform links:
  - **Damars Drive** — Luxury car rental fleet showcase (*Next.js 14, React, Tailwind CSS, Netlify*).
  - **UniWallet** — Smart student allowance & personal budgeting application (*React, Vite, Recharts, LocalStorage*).
  - **EK GearFlow** — Cloud media equipment registry & rental inventory manager (*JavaScript ES6+, AWS CloudFront, Lucide*).
- **Popular Capstone Domains Explorer:** Interactive 3x2 matrix covering in-demand academic project tracks:
  - AI & Computer Vision (Attendance, Plant Disease Detection, Plate Recognition).
  - FinTech & Mobile Money (MoMo API Integrations, Wallets, Savings).
  - Web & Cloud Portals (Hostel Finders, Hospital EHRs, E-Voting Systems).
  - Mobile Apps (Flutter, React Native, Real-Time Transit Tracking).
  - IoT & Embedded Telemetry (RFID Access, GSM Automation, Smart Irrigation).
  - Cybersecurity & Auth Systems (Tamper-Proof Certificates, Encrypted Data).
- **Dual WhatsApp Direct Channels & Instant Email Copy:**
  - **WhatsApp Line 1:** `+233 55 529 8484`
  - **WhatsApp Line 2:** `+233 53 029 2379`
  - **Email 1:** `edwingligah124@gmail.com` (1-click clipboard copy with toast feedback)
  - **Email 2:** `michealkumi922@gmail.com` (1-click clipboard copy with toast feedback)
- **Quick Inquiry Form Routing:** Visitors can select which WhatsApp line receives their pre-formatted project inquiry.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Structure** | Semantic HTML5, Clean Hierarchy, Accessible Forms & Modals |
| **Styling** | Vanilla CSS (CSS Grid, Flexbox, Custom Design Tokens, Glassmorphism, 3D Hover Tilt) |
| **Logic & Interactivity** | Vanilla JavaScript (ES6+ Modules, Clipboard API, Dynamic Routing) |
| **3D WebGL Graphics** | [Three.js (r128)](https://threejs.org/) |
| **Animation & Scroll** | [GSAP 3.12.5](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/) |
| **Smooth Inertia Scroll** | [Lenis 1.1.18](https://lenis.darkroom.engineering/) |
| **Typography** | `Outfit`, `Space Grotesk`, and `JetBrains Mono` via Google Fonts |

---

## 📁 Repository Structure

```text
EMtech/
├── assets/
│   └── images/
│       ├── damars_drive.jpg    # Damars Drive luxury mobility preview
│       ├── ek_gearflow.jpg     # EK GearFlow cloud inventory preview
│       ├── quantpulse.jpg      # High-tech system thumbnail
│       └── uniwallet.jpg       # UniWallet student fintech preview
├── index.html                  # Main application markup & sections
├── main.js                     # Three.js engine, GSAP triggers, modal logic & WhatsApp handlers
├── style.css                   # Global design tokens, responsive layouts & cyber animations
└── README.md                   # Complete project documentation
```

---

## 💻 Getting Started (Local Development)

Because EMtech is built using modern native web standards, it requires zero build steps or package compilation. You can run it instantly using any local HTTP server:

### Option A: Using Python (Recommended)
```bash
# Navigate to the project root
cd /home/ekafui07/EMtech

# Launch a local server on port 3000
python3 -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Option B: Using Node.js / npx
```bash
# Using 'serve'
npx serve -l 3000 .

# Or using 'live-server' (with live reload)
npx live-server --port=3000
```

---

## ⚙️ Configuration & Customization

### 1. Updating Contact Credentials & WhatsApp Lines
All contact channels are centralized at the top of `main.js`:

```javascript
// main.js (Lines 15-18)
const WHATSAPP_LINE_1 = '233555298484'; // Primary Line (Country code + phone)
const WHATSAPP_LINE_2 = '233530292379'; // Alternate Line
const CONTACT_EMAIL_1 = 'edwingligah124@gmail.com';
const CONTACT_EMAIL_2 = 'michealkumi922@gmail.com';
```

### 2. Updating Color Palette & Visual Theme
The design tokens are defined in `:root` in `style.css`:

```css
/* style.css (Lines 16-36) */
:root {
  --bg-primary: #040605;          /* Stealth deep cyber black */
  --accent-primary: #00ff88;      /* Neon emerald green */
  --accent-secondary: #10b981;    /* Vibrant mint green */
  --accent-glow: rgba(0, 255, 136, 0.4);
  --card-bg: rgba(10, 16, 12, 0.75);
  --text-primary: #f0f6f2;
  --text-secondary: #94a3b8;
}
```

### 3. Adding or Updating Portfolio Projects
Projects displayed in the portfolio modal are configured in `main.js`:

```javascript
// main.js (Lines 290-320)
const projectsData = {
  damars: {
    title: 'Damars Drive',
    category: 'LUXURY MOBILITY & RENTALS',
    image: 'assets/images/damars_drive.jpg',
    liveUrl: 'https://damars-drive.netlify.app/',
    desc: '...',
    tech: ['Next.js 14', 'React', 'Tailwind CSS', 'Netlify'],
  },
  // Add more projects here...
};
```

---

## 🚢 Deployment

The repository is production-ready for immediate zero-configuration deployment to any modern static host:

- **Netlify:** Drag and drop the folder or connect via GitHub. Set publish directory to `.`.
- **Vercel:** Run `vercel` or link repository. Root directory: `.`.
- **Cloudflare Pages:** Connect repository with Build Command `None` and output directory `.`.
- **GitHub Pages:** Enable GitHub Pages in repository settings pointing to the `main` branch root.

---

## 📄 License & Credits

- Designed & engineered by **EMtech** • Accra, Ghana.
- All rights reserved © 2026.
