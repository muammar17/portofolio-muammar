// Static portfolio data — edit values here to update the site.

export const profile = {
  name: 'Muammar Bintang Abdillah',
  initials: 'MB',
  role: 'Senior Front End Developer',
  tagline:
    'Building scalable and responsive web applications with React.js, Next.js, Vue.js, and Angular.',
  summary:
    'Senior Front End Developer with 5+ years of experience specializing in building scalable and responsive web applications using React.js, Next.js, Vue.js, and Angular.js. Proven experience in developing enterprise systems for logistics, IoT, and internal management platforms. Skilled in translating UI/UX designs into high-performance interfaces, integrating RESTful APIs, and collaborating with cross-functional teams in Agile environments.',
  location: 'Sidoarjo, East Java, Indonesia',
  email: 'bintangmuammar@gmail.com',
  phone: '+62 895-3393-98112',
  whatsapp: 'https://wa.me/62895339398112',
  linkedin: 'https://www.linkedin.com/in/muammar-bintang-abdillah-6490431aa',
  github: 'https://github.com/muammar17',
  cvFile: `${import.meta.env.BASE_URL}CV-Muammar-Bintang-Abdillah.pdf`,
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  tools: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Smart IT Indonesia',
    role: 'Front End Developer — Full Time',
    period: 'Oct 2021 – Sep 2026',
    location: 'Surabaya, East Java, Indonesia',
    bullets: [
      'Frontend development for enterprise applications including ORIN Logistics Platform, Admin ORIN Panel, Seller Panel, and KAMSELINDO system using React.js and Next.js.',
      'Led frontend of Admin ORIN Panel — a 80+ module enterprise dashboard (orders, sales orders, invoicing, sellers, partners, IoT device monitoring) built with Redux, redux-saga, and reselect on a route-based code-split architecture.',
      'Built geospatial features with Google Maps: real-time device tracking with marker clustering and route polylines, plus operational dashboards using amCharts and Chart.js.',
      'Implemented document generation (PDF invoices via jsPDF, Excel exports via xlsx) and push notifications with OneSignal.',
      'Designed and implemented scalable, reusable UI components based on Figma designs and business requirements.',
      'Improved application performance and usability by implementing pagination, route-level code splitting, and component optimization, reducing UI-related issues and improving load time.',
      'Collaborated closely with backend engineers, UI/UX designers, and product teams in Agile (Scrum) development cycles.',
      'Provided technical guidance and code reviews for junior frontend developers to maintain code quality and best practices.',
    ],
    tools: ['React JS', 'Next JS', 'Redux Saga', 'Google Maps', 'Figma'],
  },
  {
    company: 'Smart IT Indonesia',
    role: 'Front End Developer — Full Time',
    period: 'Nov 2018 – May 2020',
    location: 'Surabaya, East Java, Indonesia',
    bullets: [
      'Built and maintained web applications such as UPFIELD logistics system and FINDSTOCK stock analysis platform using React.js and Angular.js.',
      'Enhanced UI/UX through responsive layouts, improved navigation, and performance optimization.',
      'Integrated backend APIs and resolved UI bugs to ensure stable and scalable applications.',
    ],
    tools: ['Angular JS', 'Wordpress', 'React JS'],
  },
  {
    company: 'Wowrack Indonesia',
    role: 'Front End Developer — Full Time',
    period: 'Jun 2020 – Nov 2020',
    location: 'Surabaya, East Java, Indonesia',
    bullets: [
      'Developed frontend interfaces for IoT management platforms using Vue.js.',
      'Translated UI/UX designs into responsive and user-friendly web applications.',
      'Participated in feature planning and UI improvements to enhance user experience.',
    ],
    tools: ['Vue JS'],
  },
  {
    company: 'Track ID',
    role: 'Android Developer — Full Time',
    period: 'Aug 2018 – Sep 2018',
    location: 'Surabaya, East Java, Indonesia',
    bullets: [
      'Developed and maintained Android Native application features.',
      'Worked closely with product and business teams to improve usability.',
    ],
    tools: ['Android Studio', 'Android Native'],
  },
]

export interface Project {
  name: string
  description: string
  link: string
  tools: string[]
  gradient: string
  /** Optional deep-dive content rendered in a detail modal. */
  modules?: { title: string; items: string[] }[]
  features?: string[]
}

export const projects: Project[] = [
  {
    name: 'ORIN',
    description:
      'Fleet management and GPS tracking platform for real-time vehicle monitoring, live camera streaming, geofencing, and logistics analytics — connecting fleet operators to their vehicles and drivers in real time.',
    link: 'https://app.orin.id/',
    tools: ['Next JS', 'Redux Toolkit', 'Redux Saga', 'MQTT', 'React Leaflet', 'Google Maps', 'Ant Design', 'Tailwind CSS'],
    gradient: 'from-blue-500 to-indigo-600',
    modules: [
      {
        title: 'Real-Time Device Tracking',
        items: [
          'Live vehicle monitoring dashboard with real-time location updates over MQTT',
          'Multi-map view (multi-map) for monitoring several fleets simultaneously',
          'Interactive maps with React Leaflet & Google Maps: marker clustering, motion markers, and route replay',
        ],
      },
      {
        title: 'Camera & Video Monitoring',
        items: [
          'Live camera feeds with a custom video player (FFmpeg-based streaming)',
          'Camera alerts, history playback, and media management (photos & videos)',
          'Camera dashboard and media sharing for fleet evidence documentation',
        ],
      },
      {
        title: 'Reports & Analytics',
        items: [
          'Comprehensive trip reports: journey (perjalanan), stops, raw data, ringkasan (summary), and detail per unit',
          'Operational reports: fuel expense, hour meter, temperature, passenger, PTO, door, POI activity, and incidents',
          'Data visualization with Chart.js, ApexCharts, and D3.js',
        ],
      },
      {
        title: 'Geofencing & Alerts',
        items: [
          'Geofence management with drawing tools for virtual boundaries and violation alerts',
          'Route fences (pagar rute) and zone fences (pagar zona) configuration',
          'Alert type management and push notifications via OneSignal',
        ],
      },
      {
        title: 'Fleet Data Management',
        items: [
          'Management of devices, vehicles, drivers, and maintenance logs',
          'Schedules, reminders, queues, and multiple links configuration',
          'Device command center for remote two-way communication',
        ],
      },
      {
        title: 'Users, Access & Billing',
        items: [
          'User and user-group administration with sub-user management',
          'License management: purchase, renewal, invoices, and payment flow',
          'Profile settings, AI-powered chat integration, and app changelog',
        ],
      },
    ],
    features: [
      'Next.js 13 App Router with static export for flexible deployment',
      'Redux Toolkit + redux-saga (ducks pattern) with 50+ feature reducers and reselect selectors',
      'Real-time MQTT integration for live device tracking and WebSocket support',
      'Dual mapping engines: React Leaflet (clustering, drawing, motion markers) and Google Maps API',
      'Video streaming pipeline with FFmpeg processing and custom media player',
      'Enterprise UI with Ant Design, PrimeReact, and Tailwind CSS design system',
      'Token-based authentication with encrypted local storage and protected routes',
      'Multi-environment API support (staging/production) via centralized Axios client',
    ],
  },
  {
    name: 'Admin ORIN Panel',
    description:
      "Flagship internal ERP-style dashboard used by Vastel's employees across the ORIN logistics ecosystem — 80+ modules covering orders, sales orders, invoicing, seller/partner management, and real-time IoT device monitoring with maps, charts, and PDF/Excel reporting.",
    link: 'https://admin.orin.id/',
    tools: ['React JS', 'Redux Saga', 'PrimeReact', 'Google Maps', 'amCharts', 'jsPDF'],
    gradient: 'from-cyan-500 to-blue-600',
    modules: [
      {
        title: 'Dashboard & Analytics',
        items: [
          'Operational dashboards for users, devices, and visitation activity',
          'Online/offline device charts, new-user growth, and active-user trends (amCharts / Chart.js)',
          'Role-specific dashboards for admins and sellers',
        ],
      },
      {
        title: 'GPS / IoT Device Monitoring',
        items: [
          'Real-time device tracking on Google Maps with marker clustering and route polylines',
          'Raw data inspection, bulk downloads, fuel logs, device ports, and QR-code label printing',
          'Offline-device alerts and remote command replies',
        ],
      },
      {
        title: 'Orders & Invoicing',
        items: [
          'Order and sales-order management with 8+ form workflows (regular, split, reseller, maintenance, manual, status)',
          'Invoice generation with multiple PDF invoice templates rendered via jsPDF',
          'Excel exports (xlsx) and payment/mutation tracking',
        ],
      },
      {
        title: 'Sales, Sellers & Partners',
        items: [
          'Seller management with tiers, withdrawal approval, and per-seller dashboards',
          'Partner management with partner invoicing and sales targets',
          'Kanban board for pipeline tracking',
        ],
      },
      {
        title: 'Field Operations (Visitation)',
        items: [
          'Customer visitation (visited) workflows for admins and technicians',
          'Geolocation-based visit forms and printable visitation PDF reports',
          'Multi-step wizard flows for complex data entry',
        ],
      },
      {
        title: 'System & Access Control',
        items: [
          'Role-based access: admin types, admin access matrices, user roles, and sub-users',
          'Master data: products, brands, models, packages, vehicle & device types',
          'Email template management and app settings',
        ],
      },
    ],
    features: [
      'Route-level code splitting with injected reducers & sagas (react-boilerplate architecture)',
      'Redux + redux-saga side-effect management with reselect memoized selectors',
      'RESTful API integration with centralized auth & error handling',
      'Multilingual UI via react-intl (i18n)',
      'Push notifications with OneSignal',
      'Document generation: PDF (jsPDF) & Excel (xlsx)',
      'Reusable UI component library built on PrimeReact & styled-components',
      'Pagination, lazy loading, and component memoization for data-heavy tables',
    ],
  },
  {
    name: 'Seller ORIN Panel',
    description:
      "Seller-facing portal of the ORIN logistics ecosystem — used by Vastel's sellers to place and track orders, manage invoices and commissions, monitor GPS/IoT devices, and handle withdrawals, built on the same scalable architecture as the Admin ORIN Panel.",
    link: 'https://seller.orin.id/',
    tools: ['React JS', 'Redux Saga', 'PrimeReact', 'Google Maps', 'amCharts', 'styled-components'],
    gradient: 'from-violet-500 to-purple-600',
    modules: [
      {
        title: 'Dashboard & Analytics',
        items: [
          'Role-specific seller dashboard with operational overviews',
          'Online/offline device charts and activity trends (amCharts 5 / Chart.js)',
        ],
      },
      {
        title: 'Orders & Invoicing',
        items: [
          'Order requests with dedicated order form and status workflows',
          'Invoice management with invoice forms and printable PDF invoices',
          'Mutation tracking for payments and balance changes',
        ],
      },
      {
        title: 'Seller Commission & Withdrawal',
        items: [
          'Seller commission overview and calculation',
          'Withdrawal requests with approval flow',
          'Per-seller detail pages with transaction history',
        ],
      },
      {
        title: 'GPS / IoT Device Monitoring',
        items: [
          'Device monitoring on Google Maps with raw data inspection and bulk downloads',
          'Device fuels, device types, and offline-device alerts',
          'Vastel device & GSM management (device units and SIM inventory)',
        ],
      },
      {
        title: 'Master Data & Packages',
        items: [
          'Product, package, and package-form management',
          'Vehicle and device type master data',
        ],
      },
      {
        title: 'Users, Access & Settings',
        items: [
          'Sub-user management, user roles, and admin access matrices',
          'Profile settings and email template management',
          'Multilingual UI via react-intl (i18n)',
        ],
      },
    ],
    features: [
      'Route-level code splitting with injected reducers & sagas (react-boilerplate architecture)',
      'Redux + redux-saga side-effect management with reselect memoized selectors',
      'Reusable UI component library built on PrimeReact & styled-components',
      'RESTful API integration with centralized Axios client and auth handling',
      'Multilingual UI via react-intl (i18n)',
      'Printable invoices via react-to-print and rich text with TinyMCE',
      'Interactive maps with google-map-react and charts with amCharts 5',
      'Toast notifications (react-toastify) and alert dialogs (sweetalert)',
    ],
  },
  {
    name: 'TMS ZEND',
    description:
      'Transportation Management System for logistics operations — shipment and task management, driver & fleet operations, gate checking, live tracking on Google Maps, master data, and reporting, built for both web and mobile web.',
    link: 'https://tms.zend.id/',
    tools: ['React JS', 'Redux Saga', 'Google Maps', 'ApexCharts', 'FullCalendar', 'styled-components'],
    gradient: 'from-emerald-500 to-teal-600',
    modules: [
      {
        title: 'Shipment Management',
        items: [
          'Shipment list, data forms, confirmation, and change requests',
          'Scan & check shipment flows with barcode/QR scanning (web camera)',
          'Bulk creation for shipments, parcels, and jobs',
          'Shipment data feed and shipment mapping on Google Maps',
        ],
      },
      {
        title: 'Tasks & Jobs',
        items: [
          'Task creation, task lists, and task detail with status workflow',
          'Job summary reports and job tracking detail pages',
          'Gate checker and checker list operations at warehouse gates',
        ],
      },
      {
        title: 'Driver & Fleet Operations',
        items: [
          'Driver management with expense input, batch processing, splitting, and SAP-format forms',
          'Vehicle maintenance requests and transporter management',
          'Transportation rates, detention rates, and truck type master data',
        ],
      },
      {
        title: 'Maps & Live Tracking',
        items: [
          'Interactive tracking on Google Maps with places autocomplete',
          'Gate locations mapped on Google Maps (Gates Google Map)',
          'Map-based shipment monitoring (Map Shipment)',
        ],
      },
      {
        title: 'Master Data',
        items: [
          'Masters for areas, routes, ports, vessels, ship points, and transport clusters',
          'Cost centers, items, sales teams, customers, and customer addresses',
        ],
      },
      {
        title: 'Dashboard, Reports & Admin',
        items: [
          'Operational dashboards with ApexCharts visualizations',
          'Custom form reports, job summaries, and scheduled calendar view (FullCalendar)',
          'Top-up balance management, user management, user types, and access control',
          'API integration pages incl. Orin integration and notifications',
        ],
      },
    ],
    features: [
      'Route-level code splitting with injected reducers & sagas (react-boilerplate architecture)',
      'Redux + redux-saga side-effect management with reselect memoized selectors',
      'Barcode/QR shipment scanning via camera (react-qr-barcode-scanner)',
      'Interactive Google Maps with places autocomplete (use-places-autocomplete)',
      'Charts with ApexCharts, kanban board (@lourenci/react-kanban), and horizontal shipment timeline',
      'Calendar & scheduling with FullCalendar (day-grid & time-grid)',
      'Rich text forms with draft-js / react-draft-wysiwyg and drag-and-drop with react-beautiful-dnd',
      'Google/Facebook login with reCAPTCHA, OneSignal notifications, and react-intl (i18n)',
    ],
  },
  {
    name: 'FINDSTOCK',
    description:
      'Web-based stock analyst platform for the Indonesian market — stock screener, interactive price charts, backtesting, trading signals, and market overview, presented in an easy-to-use interface for retail investors.',
    link: 'https://findstock.io/',
    tools: ['Angular JS', 'jQuery', 'Bootstrap', 'CanvasJS', 'Gulp'],
    gradient: 'from-amber-500 to-orange-600',
    modules: [
      {
        title: 'Stock Screener & Explorer',
        items: [
          'Basic screener with filterable stock criteria (Select2-powered multi-select filters)',
          'Stock explorer with sortable, sticky-header result tables',
          'Stock detail pages with fundamental data',
        ],
      },
      {
        title: 'Charts & Market Overview',
        items: [
          'Interactive price charts rendered with CanvasJS',
          'Market overview dashboard for index and sector movements',
          'Backtesting module to test strategies against historical data',
        ],
      },
      {
        title: 'Signals & Research',
        items: [
          'Trading signals list with dedicated signal creation form',
          'Research section for stock analysis content',
        ],
      },
      {
        title: 'Education & Help',
        items: [
          'Tutorial, glossary, and user guide pages for new investors',
          'Guided onboarding tour (intro.js)',
        ],
      },
      {
        title: 'Accounts & Monetization',
        items: [
          'Register, login, and password recovery flows (separate auth app)',
          'Subscription plans with cart, payment, upgrade, and payment confirmation pages',
          'User profile editing',
        ],
      },
    ],
    features: [
      'AngularJS 1.6 with structured controller / service / factory / directive / filter layers',
      'Multi-page architecture with Gulp-bundled per-page scripts',
      'Interactive CanvasJS charts for price history and backtest results',
      'jQuery + Bootstrap UI with Select2 filter components and sticky table headers',
      'Separate AngularJS auth app handling cookies-based sessions (angular-cookies)',
      'SweetAlert dialogs and intro.js onboarding tour',
    ],
  },
]

export interface Education {
  degree: string
  school: string
  period: string
  detail: string
}

export const education: Education[] = [
  {
    degree: "Bachelor's Degree (D4) in Informatics Engineering",
    school: 'Electronic Engineering Polytechnic Institute of Surabaya',
    period: 'Feb 2019 – Oct 2021',
    detail: 'GPA 3.56',
  },
  {
    degree: "Associate's Degree (D3) in Informatics Engineering",
    school: 'Electronic Engineering Polytechnic Institute of Surabaya',
    period: 'Aug 2015 – Aug 2018',
    detail: 'GPA 3.43',
  },
]

export const skillGroups = [
  {
    label: 'Frontend Technologies',
    skills: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript (ES6+)'],
  },
  {
    label: 'UI Frameworks & Styling',
    skills: ['PrimeReact', 'Bootstrap', 'Tailwind CSS', 'styled-components'],
  },
  {
    label: 'State Management',
    skills: ['Redux Toolkit', 'Redux Saga', 'Reselect', 'Vuex'],
  },
  {
    label: 'Maps, Charts & Documents',
    skills: ['Google Maps API', 'React Leaflet', 'MQTT', 'amCharts', 'Chart.js', 'jsPDF', 'xlsx (Excel export)'],
  },
  {
    label: 'Architecture & API',
    skills: [
      'Route-based code splitting',
      'Component-based design',
      'Reusable UI systems',
      'RESTful APIs',
      'react-intl (i18n)',
    ],
  },
  {
    label: 'Tools & Services',
    skills: ['Git', 'Figma', 'Postman', 'OneSignal (push notifications)', 'TypeScript', 'Vite'],
  },
  {
    label: 'Methodologies & Soft Skills',
    skills: ['Agile (Scrum)', 'Team collaboration', 'Mentoring', 'Problem-solving', 'Communication'],
  },
]

export const strengths = [
  'Strong experience in building enterprise-scale web systems',
  'Ability to translate business needs into technical frontend solutions',
  'Experienced in mentoring junior developers and performing code reviews',
  'Strong collaboration with backend and UI/UX teams',
  'Passionate about clean code, performance optimization, and UI consistency',
]

export const highlights = [
  {
    title: 'Enterprise-Scale Architecture',
    text: 'Built and maintained an 80+ module admin platform using Redux, redux-saga, and reselect with route-level code splitting and injected reducers/sagas.',
  },
  {
    title: 'Complex Domain Expertise',
    text: 'Deep experience in logistics and IoT: order management, multi-role workflows (admin, seller, partner, technician), and real-time device monitoring.',
  },
  {
    title: 'Geospatial & Data Visualization',
    text: 'Google Maps integrations with marker clustering and route polylines, plus operational dashboards with amCharts and Chart.js.',
  },
  {
    title: 'Performance Optimization',
    text: 'Pagination, lazy loading, and component optimization to keep large data-heavy dashboards fast and responsive.',
  },
  {
    title: 'Mentorship & Code Quality',
    text: 'Performed code reviews and mentored junior developers, enforcing clean code, reusable UI systems, and best practices.',
  },
  {
    title: 'Cross-Team Collaboration',
    text: 'Worked in Agile (Scrum) with backend engineers, UI/UX designers, and product teams to translate business needs into frontend solutions.',
  },
]

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
