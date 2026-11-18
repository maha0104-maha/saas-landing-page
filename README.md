# Nexora – AI SaaS Landing Page

A responsive SaaS landing page built for the Sankar Group front-end internship assignment.
Nexora is an original, made-up product: an AI lead management and customer intelligence platform.
All numbers, prices, brands and reviews are sample content. There is no backend.

## Screenshots
Desktop and mobile screenshots of the working site are in `public/working_screenshots/`.

## Run locally
Requires Node.js 18 or newer.

    npm install
    npm run dev        # open the URL shown in the terminal
    npm run build      # production build in /dist
    npm run preview    # preview the production build

## Deploy
Push the project to GitHub, import the repository on Vercel (framework preset: Vite), and click Deploy.

## Technologies
- React 18 and Vite
- Bootstrap 5 (grid, utilities, built-in dark mode) and Bootstrap Icons
- Google Fonts: Sora (headings) and Inter (body)
- Plain CSS for the theme (`src/index.css`)

## Page sections
Navigation bar, hero, trusted-by logos, statistics, features, product dashboard preview, problem and solution, how it works, integrations, pricing with comparison table, testimonials, FAQ, final call to action, contact form, footer.

## Working interactions
- Light and dark theme toggle (remembers your choice)
- Smooth-scroll navigation and a mobile hamburger menu
- "Get started" and "Log in" open a sign-up / log-in dialog with validation and a success message
- Clickable dashboard tabs, each with its own chart and table
- Monthly / yearly pricing toggle that updates the prices
- FAQ accordion
- Contact form with validation and a success message
- Newsletter signup in the footer with a success message
- Back-to-top button

Forms only validate and show a success message. Nothing is sent or stored.

## Form validation rules
Rules live in `src/validation.js` and each form's `validate` function.
- Name: letters only (any language), spaces, dots, apostrophes and hyphens; at least 2 characters. Numbers are rejected.
- Email: must look like `name@company.com`.
- Company: at least 2 characters and at least one letter.
- Password (sign-up and log-in): at least 8 characters.
- Message: at least 10 characters.

## Project structure

    src/
      main.jsx            entry point, loads Bootstrap and the theme
      App.jsx             page layout, theme state, dialog state
      data.js             all content: features, plans, FAQs, dashboard data
      validation.js       shared name and company rules
      index.css           theme on top of Bootstrap (colors, cards, buttons)
      components/
        Navbar.jsx        navigation, theme toggle, Get started / Log in
        Hero.jsx          headline and call-to-action buttons
        HeroArt.jsx       hero illustration (leads orbiting the Nexora core)
        Logo.jsx          Nexora logo mark and wordmark
        Features.jsx      six feature cards
        Dashboard.jsx     dashboard preview with tabs (used in the Product section)
        Chart.jsx         area, bar, donut, horizontal bar and line charts
        Sections.jsx      trusted-by, stats, problem/solution, how it works,
                          integrations, testimonials, final call to action
        Pricing.jsx       plans, billing toggle, comparison table
        Faq.jsx           accordion
        Contact.jsx       contact form
        RegisterModal.jsx sign-up / log-in dialog
        Footer.jsx        links, newsletter, social icons
    public/favicon.svg    browser tab icon
    public/working_screenshots/   screenshots of the finished site