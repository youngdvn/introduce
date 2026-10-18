# MASTER PROMPT — FULL STACK DEVELOPER PORTFOLIO

## 1. Role & Objective

Act as a Senior Frontend Engineer, UI/UX Designer, and Software Architect.

Your task is to design and build a complete, production-ready personal portfolio website for a Full Stack Developer.

The website should feel premium, modern, minimal, fast, and professional.

This is a real portfolio intended for job applications, recruiters, technical interviewers, and potential collaborators.

Do not create a generic portfolio template. Build a cohesive, distinctive visual identity with carefully considered typography, layout, spacing, interaction, and content hierarchy.

## 2. Developer Information

- Name: Cao Tan Duy
- Preferred display name: YoungD
- Role: Full Stack Developer
- GitHub: https://github.com/duycao04
- Location: Vietnam
- Primary focus: React, Next.js, TypeScript, Node.js, PostgreSQL
- Career direction: Full Stack Web Development
- Portfolio language: English

Use configurable placeholders for information that has not been provided, such as email, LinkedIn, resume URL, education, and professional experience.

Never invent personal achievements, employment history, statistics, or technical experience.

## 3. Technology Stack

Use the following stack:

- Next.js with App Router
- TypeScript with strict mode
- Tailwind CSS
- shadcn/ui, Ant Design
- Framer Motion
- Lucide React for icons
- next-themes for dark/light mode
- React Hook Form + Zod if a contact form is implemented
- pnpm as the package manager

Use modern Next.js conventions and current stable compatible dependencies.

Prefer React Server Components. Only use Client Components when interaction is required.

Avoid unnecessary dependencies, backend services, databases, and overengineering.

## 4. Design Direction

Design style: Modern Minimal Developer Portfolio.

Visual identity:

- Dark-first design with full light-mode support
- Background: deep neutral / near-black
- Primary text: soft white
- Secondary text: muted gray
- Accent: subtle electric blue
- Clean typography
- Strong visual hierarchy
- Generous whitespace
- Subtle borders and gradients
- Consistent spacing and corner radius
- Responsive bento-grid compositions
- Smooth but restrained animations

Typography:

- Use Geist, Inter, or another high-quality modern sans-serif font.
- Use a monospace font selectively for technical labels.
- Large, confident headings.
- Readable body text.

Avoid:

- Excessive glow effects
- Distracting animations
- Generic stock photos
- Overly colorful gradients
- Excessive glassmorphism
- Unnecessary 3D scenes
- Cluttered layouts

The result should look like a carefully crafted personal brand, not an AI-generated template.

## 5. Website Structure

### 5.1 Navigation

Create a responsive sticky navigation bar.

Include:

- Personal logo / YoungD
- Home
- About
- Skills
- Projects
- Experience
- Contact
- Theme toggle

Requirements:

- Smooth section navigation
- Active section indication
- Mobile navigation menu
- Keyboard accessibility
- Appropriate sticky-header offset

### 5.2 Hero Section

Create a visually compelling hero section.

Include:

- Small availability/status label, configurable and hidden unless confirmed
- Main heading with developer name
- Role: Full Stack Developer
- Short professional introduction
- Primary CTA: View My Work
- Secondary CTA: Contact Me
- GitHub social link
- Subtle animated background decoration

Suggested headline:

"Building thoughtful digital experiences, from frontend to backend."

The hero should immediately communicate who I am, what I do, and what value I can provide.

### 5.3 About Me

Create a concise personal introduction.

Focus on:

- Interest in full stack development
- Building practical web applications
- Clean and maintainable code
- User experience and performance
- Continuous learning
- Problem-solving mindset

Avoid exaggerated claims or generic motivational statements.

Include a resume download button only when a valid resume file is available.

### 5.4 Technical Skills

Organize skills into meaningful categories:

Frontend:
- HTML
- CSS
- JavaScript
- TypeScript
- React
- Next.js
- Tailwind CSS

Backend:
- Go
- REST APIs
- Authentication
- API design

Database:
- PostgreSQL

Tools & Deployment:
- Git
- GitHub
- Vercel
- Render
- pnpm

Make all skills configurable and easy to update.

Design a clean grid with recognizable technology icons where suitable.

Do not use fake skill percentages or arbitrary proficiency scores.

### 5.5 Featured Projects

This is the most important section of the website.

Build reusable project cards.

Each card should support:

- Project name
- Project thumbnail
- Short description
- Technology tags
- Main features
- GitHub URL
- Live Demo URL
- Project detail page

Featured project:

Name: ChiNex

Type: Chinese Vocabulary Learning Web Application

Description:
A web application for organizing, learning, and managing Chinese vocabulary.

Technology:
- Next.js
- TypeScript
- Go
- PostgreSQL
- Tailwind CSS
- PWA

Relevant features:
- Vocabulary management
- Search and filtering
- Authentication
- Chinese pronunciation using Web Speech API
- Responsive interface
- Progressive Web App support

Project status and feature completeness must be verified before being described as finished.

Include additional projects only when real project information is provided.

Do not invent project names, metrics, screenshots, or testimonials.

### 5.6 Project Detail Pages

Create a dynamic route:

/projects/[slug]

Each project detail page should support:

1. Project overview
2. Problem and motivation
3. Proposed solution
4. Tech stack
5. Main features
6. Technical architecture
7. Engineering challenges
8. Lessons learned
9. Screenshots
10. GitHub and live demo links

The page should emphasize engineering decisions and problem-solving, not just visual presentation.

Use a data-driven structure so new projects can be added without rewriting page components.

### 5.7 Experience & Education

Create a timeline-based section.

Support:

- Professional experience
- Education
- Personal learning milestones
- Relevant achievements

Do not fabricate any data.

If information is missing, create configurable data placeholders and hide empty sections from the public website.

### 5.8 Contact Section

Create a clean, professional contact area.

Include:

- Short collaboration message
- Email link
- GitHub
- LinkedIn when provided
- Copy email interaction when an email is configured

If a contact form is included, it must have:

- Client-side validation
- Accessible error messages
- Loading and success states
- A real delivery mechanism

Never show a fake success message without sending the message.

### 5.9 Footer

Include:

- Name / personal brand
- Copyright with current year
- GitHub
- Back to top
- Minimal design consistent with the rest of the site

## 6. Animations & Interactions

Use Motion selectively.

Implement:

- Subtle entrance animations
- Smooth hover transitions
- Staggered project-card reveals
- Navigation transitions
- Small interactive feedback
- Optional scroll progress indicator

Requirements:

- Respect prefers-reduced-motion
- Avoid animation-related layout shifts
- Keep interactions responsive
- Do not sacrifice accessibility or performance

## 7. Responsive Design

Build mobile-first.

Support:

- Mobile: 320px and above
- Tablet: 768px and above
- Desktop: 1024px and above
- Large desktop: 1440px and above

Ensure:

- No horizontal overflow
- Readable typography
- Touch-friendly controls
- Responsive images
- Appropriate spacing
- Mobile navigation usability

## 8. Architecture

Use a maintainable feature-oriented structure.

Suggested structure:

src/
  app/
    layout.tsx
    page.tsx
    projects/
      [slug]/
        page.tsx
  components/
    layout/
    shared/
    ui/
  features/
    home/
    about/
    skills/
    projects/
    experience/
    contact/
  data/
    profile.ts
    projects.ts
    skills.ts
  lib/
    utils.ts
  types/
  styles/

public/
  images/
    projects/
  resume/

Keep personal information and project data separate from presentation components.

Use reusable components without creating unnecessary abstractions.

## 9. SEO & Performance

Implement:

- Metadata API
- Dynamic project metadata
- Open Graph metadata
- Twitter/X cards
- sitemap.xml
- robots.txt
- Canonical URLs
- Semantic HTML
- Accessible headings
- Optimized images with next/image
- Optimized fonts with next/font
- Lazy loading where appropriate
- JSON-LD Person structured data when information is verified

Target strong Core Web Vitals and Lighthouse results.

Do not make unsupported claims about achieved performance scores.

## 10. Accessibility

Follow WCAG 2.2 AA principles.

Include:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Accessible contrast
- Screen reader labels
- Reduced-motion support
- Correct form labels
- Appropriate alt text

## 11. Development Workflow

Do not implement the entire website immediately.

Follow these phases:

Phase 1 — Planning
- Analyze requirements
- Propose architecture
- Define page structure
- Identify missing personal information
- Establish design tokens

Phase 2 — Design System
- Typography
- Colors
- Spacing
- Components
- Dark/light themes
- Responsive rules

Phase 3 — Foundation
- Initialize project
- Install dependencies
- Configure global styles
- Build layout and navigation

Phase 4 — Main Sections
- Hero
- About
- Skills
- Projects
- Experience
- Contact

Phase 5 — Project Detail Pages
- Dynamic routing
- Data-driven content
- SEO metadata

Phase 6 — Polish
- Animations
- Responsive improvements
- Accessibility
- Performance optimization

Phase 7 — Verification
- Type checking
- Linting
- Production build
- Responsive testing
- Accessibility review
- Broken-link review

## 12. Working Rules

Before writing code:

1. Inspect the existing repository if one exists.
2. Explain the proposed implementation plan.
3. Identify missing requirements.
4. Ask for approval before major architectural decisions.

During implementation:

1. Work in small, logical steps.
2. Explain important technical decisions briefly.
3. Write maintainable, production-quality TypeScript.
4. Avoid unnecessary packages.
5. Reuse existing components.
6. Do not introduce fake personal information.
7. Run relevant checks after each major phase.
8. Report errors and fix them before proceeding.
9. Do not claim a feature is complete without verification.

## 13. Expected Deliverables

Provide:

- Complete working Next.js portfolio
- Responsive design
- Dark/light theme
- Reusable components
- Configurable personal data
- Project detail pages
- SEO setup
- Accessibility improvements
- Deployment instructions
- README documentation

## 14. First Task

Start with Phase 1 only.

Analyze the requirements and provide:

1. Proposed architecture
2. Website sitemap
3. Component breakdown
4. Design system proposal
5. Suggested project structure
6. Missing information needed from me
7. Step-by-step implementation plan

Do not write implementation code yet.

Wait for my approval before starting Phase 2.
