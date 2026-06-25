
# Figma Implementation Rules
* Always treat the provided Figma design as the single source of truth.
* Match the layout, spacing, typography, colors, and component hierarchy as closely as possible.
* Build pixel-perfect implementations whenever practical.
* Do not redesign or change the visual style unless explicitly requested.
* Preserve the original design intent while ensuring responsiveness.
* Use semantic HTML and reusable React components.
* If any design detail is unclear, ask for clarification instead of guessing.
* Keep the implementation clean, maintainable, and scalable.


# Tech Stack
* React
* Vite
* Tailwind CSS
* Framer Motion
* React Router DOM (when routing is required)

# Folder Structure
* Use a scalable folder architecture.
* Keep reusable components inside src/components.
* Create folders only when needed.
* Avoid unnecessary empty folders.

# Code Style
* Use functional components only.
* Use arrow functions.
* Keep components small and reusable.
* Write clean, readable, and maintainable code.
* Avoid duplicate code.
* Use semantic HTML whenever possible.
* Add comments only when necessary.

# Code Comments
* Write clean, meaningful, and beginner-friendly comments.
* Add comments to explain complex logic, important functions, custom hooks, and reusable components.
* Add a short comment before each major section describing its purpose.
* Explain why important code is written, not just what it does.
* Avoid unnecessary comments for obvious or self-explanatory code.
* Keep comments concise, readable, and easy to understand.
* Use comments to help me learn React and modern frontend development.
* Organize code with clear section comments when appropriate.


# Responsive Design
* Follow a mobile-first approach.
* Ensure perfect responsiveness for Mobile, Tablet, Laptop, and Desktop.
* Use Tailwind CSS responsive breakpoints (sm, md, lg, xl, 2xl).
* Prefer responsive utility classes.
* Avoid fixed widths unless necessary.
* Prevent horizontal scrolling.

# UI & Design* Use Tailwind CSS only.
* Avoid inline styles.
* Maintain consistent spacing and typography.
* Follow modern SaaS-quality UI/UX principles.
* Use reusable UI components whenever possible.

# Performance
* Lazy load pages and heavy components when appropriate.
* Optimize images and assets.
* Remove unused code and dependencies.


# Learning Mode
* Assume I am learning React and modern frontend development.
* Explain every important decision before or after implementing it.
* Clearly explain why a library, hook, or component is being used.
* Explain what each file and folder is responsible for.
* When creating new code, briefly describe how it works.
* If you modify existing code, explain what changed and why.
* When using React concepts (props, state, hooks, context, routing, etc.), explain them in simple language.
* When installing a package, explain why it is needed and what problem it solves.
* Do not just generate code—help me understand it.
* When there are multiple possible approaches, briefly explain why you chose one over the others.
* Keep explanations concise but educational.
* If there is a simpler or more beginner-friendly solution, explain it first before using a more advanced approach.



