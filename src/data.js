// All page content lives here so components stay small and readable.
export const NAV = [
  { id: "features", label: "Features" },
  { id: "dashboard", label: "Product" },
  { id: "how", label: "How it works" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const FEATURES = [
  { icon: "bullseye", title: "Smart lead discovery", text: "Find prospects that look like your best customers." },
  { icon: "chat-dots", title: "AI follow-ups", text: "Draft personal replies in seconds." },
  { icon: "kanban", title: "Lead pipeline", text: "Move every lead through clear stages." },
  { icon: "person-lines-fill", title: "Customer profiles", text: "Notes, activity, and intent in one view." },
  { icon: "graph-up-arrow", title: "Live analytics", text: "See which campaigns actually convert." },
  { icon: "lightning-charge", title: "Automations", text: "Reminders and tasks that run themselves." },
];

// Sample dashboard data. Each tab has its own chart type and table.
const status = (b) => ({ badge: b });
export const TABS = {
  Overview: {
    kpis: [["Total leads", "12,480", "+12%"], ["Conversion", "6.8%", "+1.4%"], ["Campaigns", "14", "+2"], ["Engagement", "42%", "+5%"]],
    view: "area", title: "Leads, last 8 weeks", chart: [30, 42, 38, 60, 55, 78, 70, 96],
    head: ["Recent lead", "Source", "Status"],
    rows: [["Maya Joshi", "Website", status("Qualified")], ["Sam Verma", "Referral", status("Contacted")], ["Lena Roy", "Ads", status("New")], ["Ishan Rao", "Event", status("Qualified")]],
  },
  Leads: {
    kpis: [["New today", "86", "+9%"], ["Qualified", "1,204", "+7%"], ["Contacted", "3,310", "+4%"], ["Won", "412", "+11%"]],
    view: "bars", title: "Leads by stage", chart: [["New", 420], ["Contacted", 310], ["Qualified", 190], ["Proposal", 96], ["Won", 48]],
    head: ["Lead", "Company", "Lead score"],
    rows: [["Maya Joshi", "Brightloop", { bar: 92 }], ["Sam Verma", "Kestrel", { bar: 78 }], ["Lena Roy", "Orbitly", { bar: 64 }], ["Ishan Rao", "Pinecrest", { bar: 55 }]],
  },
  Campaigns: {
    kpis: [["Running", "14", "+2"], ["Scheduled", "5", "+1"], ["Open rate", "38%", "+3%"], ["Replies", "612", "+8%"]],
    view: "donut", title: "Replies by channel", chart: [["Email", 48], ["WhatsApp", 32], ["Ads", 20]],
    head: ["Campaign", "Channel", "Open rate"],
    rows: [["Diwali offer", "Email", { bar: 61 }], ["Webinar invite", "WhatsApp", { bar: 74 }], ["Retargeting", "Ads", { bar: 38 }], ["Re-engage", "Email", { bar: 45 }]],
  },
  Contacts: {
    kpis: [["Contacts", "9,870", "+6%"], ["Companies", "2,140", "+4%"], ["Tagged", "6,305", "+9%"], ["Duplicates", "23", "-12%"]],
    view: "hbars", title: "Contacts by industry", chart: [["Retail", 3120], ["SaaS", 2540], ["Education", 1780], ["Healthcare", 1240], ["Finance", 1190]],
    head: ["Contact", "Company", "Owner"],
    rows: [["Anita Rao", "Havenly", "Priya"], ["Dev Patel", "Kestrel", "Rohan"], ["Noor Khan", "Orbitly", "Priya"], ["Karthik S", "Pinecrest", "Aarav"]],
  },
  Analytics: {
    kpis: [["Visits", "48K", "+14%"], ["Sign-ups", "3,214", "+9%"], ["Cost / lead", "₹42", "-6%"], ["Revenue", "₹8.2L", "+18%"]],
    view: "lines", title: "Visits vs sign-ups", chart: [["Visits", [30, 45, 40, 62, 58, 80, 76, 95]], ["Sign-ups", [8, 12, 14, 13, 22, 25, 31, 38]]],
    head: ["Source", "Visits", "Sign-ups"],
    rows: [["Organic", "21.4K", "1,420"], ["Referral", "9.8K", "880"], ["Paid ads", "12.1K", "640"], ["Email", "4.7K", "274"]],
  },
  Settings: {
    kpis: [["Seats used", "6 / 10", ""], ["Integrations", "4", "+1"], ["API calls", "18K", "+5%"], ["Plan", "Growth", ""]],
    view: "settings", title: "Workspace",
  },
};

export const TEAM = [["Priya Nair", "Admin"], ["Rohan Das", "Sales"], ["Aarav Mehta", "Sales"], ["Sana Iqbal", "Marketing"]];
export const SWITCHES = [["Slack alerts", true], ["Weekly email report", true], ["Auto follow-ups", false]];

export const STATS = [["50K+", "Leads managed"], ["1,200", "Growing teams"], ["96%", "Customer satisfaction"], ["10h", "Saved weekly"]];

export const STEPS = [
  { icon: "search", title: "Discover", text: "Find potential customers that match your best accounts." },
  { icon: "people", title: "Connect", text: "Organize leads and manage every conversation in one place." },
  { icon: "rocket-takeoff", title: "Grow", text: "Track results and improve your conversion rate." },
];

export const PLANS = [
  { name: "Starter", monthly: 0, yearly: 0, note: "For trying things out", items: ["Basic lead management", "Basic reports", "Email support"] },
  { name: "Growth", monthly: 999, yearly: 799, popular: true, note: "For growing sales teams", items: ["Advanced analytics", "Automation", "Priority support"] },
  { name: "Enterprise", custom: true, note: "For larger organizations", items: ["Custom workflows", "Team management", "Dedicated support"] },
];

export const COMPARE = [
  ["Lead management", "Basic", "Advanced", "Custom"],
  ["Reports", "Basic", "Advanced analytics", "Custom"],
  ["Automation", "—", "Included", "Included"],
  ["Team members", "1", "Up to 10", "Unlimited"],
  ["Support", "Email", "Priority", "Dedicated"],
];

export const TESTIMONIALS = [
  { name: "Aarav Mehta", role: "Founder, Brightloop", text: "Our follow-up time dropped from days to hours.", stars: 5 },
  { name: "Priya Nair", role: "Sales Lead, Kestrel", text: "The dashboard replaced three spreadsheets.", stars: 5 },
  { name: "Rohan Das", role: "Agency Owner, Orbitly", text: "Clients love the campaign reports.", stars: 4 },
];

export const FAQS = [
  ["What is Nexora?", "An AI platform that helps teams find, organize, and convert leads."],
  ["How does Nexora work?", "Discover prospects, manage communication in one place, then track results."],
  ["Can I try Nexora for free?", "Yes. The Starter plan is free and needs no card."],
  ["Can I upgrade my plan?", "Yes. Upgrade anytime from your settings."],
  ["Is my data secure?", "Accounts use role-based access and encrypted storage."],
  ["Can I cancel my subscription?", "Yes, anytime. You keep access until the period ends."],
  ["Does Nexora support teams?", "Yes. Growth and Enterprise include team members and roles."],
];

export const FOOTER = {
  Product: [["Features", "#features"], ["Pricing", "#pricing"], ["Product tour", "#dashboard"]],
  Company: [["About", "#how"], ["Careers", "#contact"], ["Contact", "#contact"]],
  Resources: [["Blog", "#top"], ["Help Center", "#contact"], ["FAQ", "#faq"]],
  Legal: [["Privacy Policy", "#top"], ["Terms", "#top"], ["Cookies", "#top"]],
};
