/* ==========================================================================
   All the content of the site lives here. Edit text, add projects, change
   links. You should rarely need to touch the components.
   ========================================================================== */

export const EMAIL = 'siddharthgupta1556@gmail.com';

// Where the contact form sends messages. FormSubmit emails them straight to you.
// The first message you send makes it email you an activation link: click it once.
// To use another service (Formspree, Web3Forms...), replace this URL.
export const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

// Add your profile URLs here. They only show on the site when filled in.
export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/siddharthgupta555',
  github: 'https://github.com/siddharthguptaa',
};

// Shown on the contact section. Leave PHONE empty ('') to hide it.
export const PHONE = '+91 6391063555';

// WhatsApp uses the same number (digits only, with country code). Clear PHONE to hide WhatsApp too.
export const WHATSAPP = PHONE.replace(/\D/g, '');
export const WHATSAPP_GREETING = 'Hi Siddharth, I saw your portfolio and would like to talk.';

// The resume visitors can download. The file lives in the public folder.
export const RESUME_FILE = 'Siddharth_Gupta_Resume.pdf';

// Photos live in the public folder. Replace the files (same names) to change them.
export const PHOTOS = {
  avatar: 'siddharth-avatar.jpg',
  portrait: 'siddharth-portrait.jpg',
};

export const ABOUT = [
  'I’m Siddharth, a full-stack developer in Noida with 5+ years of experience building React and .NET applications for fintech and automotive teams.',
  'I like to lead a project from the first requirement to the last release: I learn the business, set the architecture, build the APIs, and keep the team and the client on the same page.',
  'I’m good at looking after clients, and I’m open to freelance projects and full-time roles. If you have a problem to solve, send me a message.',
];

export const PROFILE = {
  name: 'Siddharth Gupta',
  location: 'Noida, India',
};

export const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const HERO = {
  before: 'I turn business problems into ',
  highlight: 'clear logic',
  after: ', then into working software.',
  intro:
    'I’m a full-stack developer in Noida working in fintech and automotive. I like a messy business problem: I reduce it to rules anyone can check, then build the React and .NET application that carries them out. I’ve shipped since 2020 and led offshore teams as a senior engineer.',
  status: 'Open to freelance projects and full-time roles.',
  proof: {
    stats: [
      { value: '500,000+', label: 'users' },
      { value: '5 lakh+', label: 'API hits a day, on average' },
      { value: '₹10+ crore', label: 'handled a day, on average' },
    ],
    text: 'RBM is a B2B fintech app. I built the API and maintained the database behind it. It covers BBPS bill payments, IRCTC rail booking, AePS, loans and credit cards.',
  },
};

/* ---------- Hero stack illustration (top layer first) ---------- */
export const LAYERS = [
  { tag: 'react', short: 'React 18', name: 'React 18', text: 'Interfaces, built with Tailwind CSS or Chakra UI.' },
  { tag: 'webapi', short: '.NET API', name: '.NET Web API', text: 'Business rules, with JWT, OAuth 2.0 and SSO.' },
  { tag: 'ef', short: 'EF Core', name: 'EF Core', text: 'Data access, plus ADO.NET where speed matters.' },
  { tag: 'sql', short: 'SQL', name: 'SQL', text: 'Procedures, indexes, views and query tuning.' },
];

/* ---------- Why teams can rely on me ---------- */
export const HABITS = [
  { icon: 'users', title: 'One picture across teams', text: 'I coordinated several offshore application teams and guided them through every phase of each project.' },
  { icon: 'list', title: 'A daily list of open questions', text: 'Issues and queries went into one sheet every day, so the client and the team always knew what was waiting.' },
  { icon: 'doc', title: 'Written down first', text: 'I prepared the functional and high-level technical documents for each application.' },
  { icon: 'cal', title: 'Releases planned weekly', text: 'I mapped implementation dates each week so releases never collided with other activities.' },
  { icon: 'chat', title: 'Clients stay in the loop', text: 'I handle client and user support and keep a clear record of every open question, so clients always know where things stand.' },
  { icon: 'eye', title: 'Business first, then code', text: 'I learn the client’s business and requirements first, then turn them into software with the team.' },
];

/* ---------- Problems I like to take on ---------- */
export const PROBLEM_GROUPS = [
  { id: 'biz', label: 'For your business' },
  { id: 'fintech', label: 'Fintech' },
  { id: 'auto', label: 'Automotive' },
  { id: 'software', label: 'Software delivery' },
  { id: 'everyday', label: 'Everyday systems' },
];

export const PROBLEMS = [
  // For your business
  { group: 'biz', icon: 'ui', title: 'I need a web app but don’t know where to start', text: 'We turn the idea into plain rules and a short list of screens, agree what to build first, and ship a working first version.' },
  { group: 'biz', icon: 'gauge', title: 'Our website or app is slow', text: 'I measure where the time goes, then fix the slowest query, call or screen first.' },
  { group: 'biz', icon: 'list', title: 'Spreadsheets and manual reports take hours', text: 'Replace the repeated steps with a small application and automatic reports, so nobody re-types the same data.' },
  { group: 'biz', icon: 'plug', title: 'Our systems don’t talk to each other', text: 'Build an API between them, with clear rules for what moves, when, and what happens if something fails.' },
  { group: 'biz', icon: 'branch', title: 'The developer who built this has left', text: 'Read the code, write down how it works, add tests around the risky parts, then improve it safely.' },
  { group: 'biz', icon: 'data', title: 'We can’t see what’s happening in the business', text: 'Pull the numbers from your database into one live page that shows what matters.' },
  { group: 'biz', icon: 'cal', title: 'The project keeps slipping', text: 'Break the work into small deliveries, keep one list of open questions, and plan releases every week.' },
  { group: 'biz', icon: 'lock', title: 'We’re worried about security', text: 'Check sign-in, roles and data access, scan for known weaknesses, and fix the gaps in order of risk.' },
  { group: 'biz', icon: 'users', title: 'My team needs a technical lead for a while', text: 'I join to build, review and coordinate, and keep the plans and documents in order.' },
  // Fintech
  { group: 'fintech', icon: 'card', title: 'Payments that must never be charged twice', text: 'Design every request so it is safe to retry, so a timeout or a double tap never moves money twice.' },
  { group: 'fintech', icon: 'eye', title: 'Fraud checks that don’t block real customers', text: 'Layer simple rules, send borderline cases to a review queue, and track both missed fraud and wrongly blocked customers.' },
  { group: 'fintech', icon: 'match', title: 'Records that don’t match across banks and ledgers', text: 'Match records automatically and show people only the exceptions, with the reason each one didn’t match.' },
  { group: 'fintech', icon: 'doc', title: 'Audits and changing regulations', text: 'Keep a clear trail of who changed what and why, and keep rules in one place so a policy change is a small, reviewed edit.' },
  // Automotive
  { group: 'auto', icon: 'trace', title: 'Tracing a faulty part back to its source', text: 'Record each part’s journey from supplier to vehicle as linked data, so a quality issue points to the affected batch instead of everything.' },
  { group: 'auto', icon: 'gear', title: 'Hundreds of product variants', text: 'Express options and compatibility as rules in one place, not as copies of code for every variant.' },
  { group: 'auto', icon: 'plug', title: 'Plants and suppliers that all report differently', text: 'Agree on one clean data shape, convert at the edges, and validate every feed on the way in.' },
  // Software delivery
  { group: 'software', icon: 'check', title: 'Releases that break something else', text: 'Automate the tests that matter, release in small steps, and make rollback boring.' },
  { group: 'software', icon: 'list', title: 'Requirements that mean different things to different people', text: 'Write each rule as a concrete example that the business and the developers can both check.' },
  { group: 'software', icon: 'gauge', title: 'Systems that fall over under real load', text: 'Load-test before launch, find the bottleneck with measurements, and fix that first.' },
  { group: 'software', icon: 'lock', title: 'Security holes found after launch', text: 'Build secure coding and automated vulnerability scans into the pipeline, not into a last-minute review.' },
  { group: 'software', icon: 'doc', title: 'Knowledge that lives in one person’s head', text: 'Write functional and technical documents as the work happens, so anyone can pick it up.' },
  // Everyday systems
  { group: 'everyday', icon: 'copy', title: 'Work copied by hand between systems', text: 'Map each step, find the rule that repeats, automate it, and keep a person in the loop only where judgment is needed.' },
  { group: 'everyday', icon: 'bolt', title: 'Slow screens and reports', text: 'Measure first, then fix the query, index or API call that costs the most.' },
  { group: 'everyday', icon: 'layers', title: 'Old systems nobody dares to change', text: 'Add tests around how it behaves today, then move one piece at a time.' },
  { group: 'everyday', icon: 'mail', title: 'Requests stuck in email', text: 'Turn the approval path into clear states and rules, so everyone can see where each request is.' },
  { group: 'everyday', icon: 'sync', title: 'Data that disagrees between systems', text: 'Decide which system owns each fact, and enforce that in one place.' },
  { group: 'everyday', icon: 'alert', title: 'Errors found too late', text: 'Check at the point of entry, with messages that tell the user exactly what to fix.' },
];

/* ---------- Work ---------- */
export const EMPLOYERS = {
  mts: {
    name: 'Motherson Technologies Services',
    short: 'Motherson',
    role: 'Lead Engineer',
    dates: 'Apr 2023 – present',
    points: [
      { text: 'Led Prozeus: planned the backend (onion architecture) and the React front end, and delivered it with a team of 4.', only: ['prozeusng'] },
      { text: 'Led ODIN, a financial tool for mold costing and project financial tracking, as lead and backend developer: set the architecture, built the APIs and handled client and user support, with a team of 4.', only: ['odin'] },
      'Design the user interface in React and work through every agile phase: requirements, architecture, development, testing, deployment and ongoing support.',
      'Plan and manage deployments, coordinating with the company’s partner teams.',
    ],
  },
  rbm: {
    name: 'Redmil Business Mall',
    short: 'Redmil',
    role: 'Senior Engineer',
    dates: 'Dec 2021 – Apr 2023',
    points: [
      { text: 'Built the Web API behind RBM Android App and maintained its SQL database, serving more than 500,000 users and over 5 lakh API hits a day on average with accurate data.', only: ['rbmapp'] },
      { text: 'Kept the API fast and the data correct with database indexes, caching and checks against duplicate payments.', only: ['rbmapp'] },
      'Coordinated offshore application teams and guided them through every phase of each project.',
      'Kept a daily query-tracking sheet so the client and the offshore team always knew which issues were open.',
      'Wrote the functional and high-level technical documents, and mapped implementation dates each week so releases never collided with other activities.',
    ],
  },
  opt: {
    name: 'Opticodes Technologies',
    short: 'Opticodes',
    role: 'Backend Engineer',
    dates: 'Nov 2020 – Dec 2021',
    points: [
      'Built ASP.NET Web APIs that let first-time users file GST transactions and generate e-invoices and e-way bills.',
      'Wrote and maintained the database scripts, stored procedures, triggers and views that carry the business logic.',
    ],
  },
};

// A bullet can be a plain string (shown on every project of that employer) or
// { text, only: ['project-id'] } to show it on those projects only.
export const LAYER_LABELS = ['Interface', 'API', 'Data access', 'Database'];

/* layers = [interface, api, data access, database]; use '' when not part of the stack.
   Optional fields: purpose (what it is for) and result (what it achieved). */
export const PROJECTS = [
  { id: 'prozeusng', name: 'Prozeus', emp: 'mts', role: 'I led this project. I planned every technical topic, from the backend onion architecture to the React front end, and delivered it with a team of 4.', purpose: 'A project management tool for the automotive industry. Motherson, a Tier-1 supplier, plans its projects in it from RFQ (request for quotation) to part supply. It covers the PPAP (Production Part Approval Process), change management, risk management and every gate review from GR-1 to GR-8.', layers: ['React 18', 'Web API (.NET 8)', 'EF Core', 'SQL'], tags: ['react', 'webapi', 'ef', 'sql'] },
  { id: 'odin', name: 'ODIN (Financial Tool)', emp: 'mts', role: 'I led this project as lead and backend developer. I set the architecture and built the APIs, handled client and user support, and turned the business requirements into software with a team of 4.', purpose: 'A financial tool used for mold costing and for tracking the finances of projects. It helps the Sales, Finance and Engineering departments work together seamlessly.', layers: ['React 18', 'Web API (.NET 8)', 'EF Core', 'SQL'], tags: ['react', 'webapi', 'ef', 'sql'] },
  { id: 'rbmapp', name: 'RBM Android App', emp: 'rbm', purpose: 'A B2B fintech Android app offering BBPS bill payments, IRCTC rail booking, AePS (Aadhaar-enabled payments), loans and credit card applications.', result: 'Used by more than 5 lakh (500,000) people, with more than 5 lakh (500,000) API hits and ₹10+ crore handled every day on average. I built the Web API behind the app and maintained its SQL database, keeping the data accurate under that load.', layers: ['', 'Web API 2.0', '', 'SQL'], tags: ['webapi', 'sql'] },
  { id: 'rbmadmin', name: 'RBM Admin Panel', emp: 'rbm', role: 'I worked on this project as a full-stack developer.', purpose: 'The admin panel for the RBM Android App. Internal teams such as accounts, business and support use it to manage the overall functions of the app.', layers: ['Web Forms', 'Web API 2.0', 'ADO.NET', 'SQL'], tags: ['webforms', 'webapi', 'adonet', 'sql'] },
  { id: 'gst', name: 'GST API App', emp: 'opt', purpose: 'Helping first-time users make GST transactions.', layers: ['', 'Web API 2.0', 'ADO.NET', 'SQL'], tags: ['webapi', 'adonet', 'sql'] },
  { id: 'eway', name: 'E-Way Bill API App', emp: 'opt', purpose: 'Helping users generate e-way bills.', layers: ['', 'Web API 2.0', 'ADO.NET', 'SQL'], tags: ['webapi', 'adonet', 'sql'] },
  { id: 'einv', name: 'E-Invoice API App', emp: 'opt', purpose: 'Helping users generate e-invoices.', layers: ['', 'Web API 2.0', 'ADO.NET', 'SQL'], tags: ['webapi', 'adonet', 'sql'] },
  { id: 'mygst', name: 'MyGSTCafe', emp: 'opt', purpose: 'A website for making GST transactions and generating e-invoices and e-way bills.', layers: ['Web Forms, MVC', 'Web API 2.0', 'ADO.NET', 'SQL'], tags: ['webforms', 'mvc', 'webapi', 'adonet', 'sql'] },
];

export const TECH = [
  ['all', 'All'],
  ['react', 'React'],
  ['webapi', 'Web API'],
  ['ef', 'EF Core'],
  ['adonet', 'ADO.NET'],
  ['webforms', 'Web Forms'],
  ['mvc', 'MVC'],
  ['sql', 'SQL'],
];

/* ---------- Services ---------- */
export const SERVICES = [
  { icon: 'ui', title: 'Full-stack web applications', text: 'React 18 front ends on a .NET 8 Web API with EF Core and SQL, taken from requirements through testing and deployment.' },
  { icon: 'api', title: 'APIs and integrations', text: 'REST and SOAP services, secured with JWT, OAuth 2.0 and SSO. Early in my career I built the GST, e-invoice and e-way bill APIs that filing apps depend on.' },
  { icon: 'data', title: 'Database and performance work', text: 'Stored procedures, triggers, views, indexes and query optimization, with monitoring to catch slow queries before users do.' },
  { icon: 'layers', title: 'Older .NET codebases', text: 'I’ve worked in Web Forms, WCF and ADO.NET as well as .NET 8, so I’m comfortable maintaining or migrating systems built across .NET 3.5 to .NET 8.' },
  { icon: 'users', title: 'Delivery leadership', text: 'Coordinating teams, writing functional and technical documents, and planning releases so work lands on the dates promised, and staying close to clients and users with support.' },
];

/* ---------- Skills ---------- */
export const SKILLS = [
  { icon: 'ui', group: 'Front end', items: ['React 18', 'JavaScript', 'jQuery', 'HTML', 'CSS', 'Tailwind CSS', 'Chakra UI'] },
  { icon: 'api', group: 'Back end', items: ['C#', '.NET 3.5 to .NET 8', 'ASP.NET Web API', 'MVC', 'Web Forms', 'WCF', 'REST and SOAP', 'LINQ'] },
  { icon: 'data', group: 'Data', items: ['SQL', 'MySQL', 'Entity Framework', 'EF Core', 'ADO.NET'] },
  { icon: 'cloud', group: 'Cloud and delivery', items: ['Azure', 'Azure DevOps', 'CI/CD pipelines', 'Git', 'GitHub', 'Bitbucket', 'TFS', 'SVN', 'JIRA', 'IIS'] },
  { icon: 'lock', group: 'Quality and security', items: ['Jest', 'TDD', 'BDD', 'JMeter', 'Postman', 'Swagger', 'Secure coding', 'Vulnerability scans'] },
  { icon: 'branch', group: 'Design and process', items: ['SOLID', 'Design patterns', 'Microservices', 'Onion architecture', 'Agile and Scrum'] },
  { icon: 'spark', group: 'AI development', items: ['GitHub Copilot', 'Claude', 'AI-assisted development', 'LLM and API integration', 'Prompt design'] },
  { icon: 'users', group: 'Team management', items: ['Team building', 'IT recruitment and hiring', 'Coordinating offshore teams', 'Guiding teams through every phase', 'Cross-functional collaboration'] },
  { icon: 'cal', group: 'Project management', items: ['Agile and Scrum delivery', 'Release and sprint planning', 'Task and calendar management', 'Issue and query tracking', 'Functional and technical documentation', 'Client communication', 'Client relationship management', 'Client and user support'] },
  { icon: 'chat', group: 'Soft skills', items: ['Problem solving', 'Strategic planning', 'Effective communication', 'Creativity and innovation'] },
];

export const EDUCATION = [
  { degree: 'Master’s in Computer Application', dates: 'Aug 2018 – Aug 2021' },
  { degree: 'Bachelor’s in Computer Application', dates: 'Aug 2015 – Aug 2018' },
];

/* ---------- Testimonials: add { quote, name, role } to show the section ---------- */
export const QUOTES = [
  // { quote: 'Short quote here.', name: 'Full Name', role: 'Role, Company' },
];

export const INTENTS = ['Freelance project', 'Full-time role', 'Technical lead or consulting', 'Something else'];
