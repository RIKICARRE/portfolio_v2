# portfolio_v2

## 🚀 Overview
Welcome to the `portfolio_v2` project! This is a modern web portfolio built with React, TypeScript, and Vite. It showcases my skills, projects, and experiences in a visually appealing and interactive way. Whether you're a developer looking to showcase your work or a student looking to build a portfolio, this project is designed to help you stand out.

## ✨ Features
- 🌟 Interactive and responsive design
- 📈 Smooth animations and transitions
- 🔍 Dark mode support
- 📊 Customizable components
- 🌐 Built with modern web technologies

## 🛠️ Tech Stack
- **Programming Language:** TypeScript
- **Frameworks and Libraries:**
  - React
  - Vite
  - Tailwind CSS
  - Framer Motion
  - Lucide React
- **Tools:**
  - ESLint
  - Prettier
  - TypeScript
- **System Requirements:**
  - Node.js (v16 or later)
  - npm (v7 or later)

## 📦 Installation

### Prerequisites
- Node.js (v16 or later)
- npm (v7 or later)

### Quick Start
```bash
# Clone the repository
git clone https://github.com/RIKICARRE/portfolio_v2.git

# Navigate to the project directory
cd portfolio_v2

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Alternative Installation Methods
- **Using Yarn:**
  ```bash
  yarn install
  yarn dev
  ```

- **Using Docker:**
  ```bash
  docker-compose up
  ```

## 🎯 Usage

### Basic Usage
```typescript
// Import the necessary components
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Home, Sun, Moon, Github, Linkedin, Mail, FileText } from "lucide-react";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { ThemeProvider, useTheme } from "@/components/theme-provider";
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { LinkPreview } from "@/components/ui/link-preview";
import HomePage from "@/components/pages/Home";
import Estudios from "@/components/pages/Estudios";
import Tecnologias from "@/components/pages/Tecnologias";
import Proyectos from "@/components/pages/Proyectos";
import "@/styles/global-cursor.css";

// Main App component
function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <div className="relative min-h-screen w-full overflow-x-hidden">
          <RetroGrid lightLineColor='green' darkLineColor='green' className="fixed inset-0 w-full h-full -z-10" />
          <div className="relative z-10">
            {/* Aquí irá el contenido principal del portfolio */}
          </div>
          <div className="fixed bottom-0 left-0 w-full flex justify-center z-20 pb-4">
            <Dock className="shadow-lg">
              <DockIcon>
                <Link to="/" aria-label="Inicio">
                  <Home className="w-7 h-7" />
                </Link>
              </DockIcon>
              <span className="mx-2 h-8 w-px bg-gray-200 dark:bg-gray-700" aria-hidden="true"></span>
              <DockIcon>
                <LinkPreview url="https://github.com/RIKICARRE" width={300} height={200}>
                  <a href="https://github.com/RIKICARRE" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-7 h-7" />
                  </a>
                </LinkPreview>
              </DockIcon>
              <DockIcon>
                <LinkPreview url="https://www.linkedin.com/in/ricardo-carreno-939b78338" width={300} height={200}>
                  <a href="https://www.linkedin.com/in/ricardo-carreno-939b78338" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-7 h-7" />
                  </a>
                </LinkPreview>
              </DockIcon>
              <DockIcon>
                <a href="mailto:ricardocarremar@icloud.com" aria-label="Email">
                  <Mail className="w-7 h-7" />
                </a>
              </DockIcon>
            </Dock>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
```

### Advanced Usage
- Customize the theme by modifying the `ThemeProvider` component.
- Add new pages and components by following the existing structure.
- Use the `LinkPreview` component to display links with previews.

## 📁 Project Structure
```
portfolio_v2/
├── .gitignore
├── index.html
├── package.json
├── README.md
├── src/
│   ├── components/
│   │   ├── magicui/
│   │   │   ├── aurora-text.tsx
│   │   │   ├── blur-fade.tsx
│   │   │   ├── box-reveal.tsx
│   │   │   ├── dock.tsx
│   │   │   ├── globe.tsx
│   │   │   ├── interactive-hover-button.tsx
│   │   │   ├── rainbow-button.tsx
│   │   │   ├── retro-grid.tsx
│   │   │   ├── scroll-based-velocity.tsx
│   │   │   ├── shine-border.tsx
│   │   │   ├── word-rotate.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Estudios.tsx
│   │   │   ├── Tecnologias.tsx
│   │   │   ├── Proyectos.tsx
│   │   ├── theme-provider.tsx
│   │   ├── ui/
│   │   │   ├── 3d-card.tsx
│   │   │   ├── apple-cards-carousel.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── link-preview.tsx
│   │   │   ├── logo-carousel.tsx
│   │   │   ├── PageNav.tsx
│   │   │   ├── smooth-cursor.tsx
│   │   │   ├── timeline.tsx
│   ├── hooks/
│   │   ├── use-outside-click.tsx
│   ├── lib/
│   │   ├── utils.ts
│   ├── main.tsx
│   ├── styles/
│   │   ├── global-cursor.css
│   ├── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── package-lock.json
```

## 🔧 Configuration
- **Environment Variables:** Configure environment variables in a `.env` file.
- **Configuration Files:** Modify `vite.config.ts` for Vite configuration.
- **Customization Options:** Customize the theme and styles by modifying the `ThemeProvider` component and CSS files.

## 🤝 Contributing
- Fork the repository
- Create a new branch (`git checkout -b feature/your-feature`)
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin feature/your-feature`)
- Create a new Pull Request

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors & Contributors
- **Riki Carreño** - [@RIKICARRE](https://github.com/RIKICARRE)

## 🐛 Issues & Support
- Report issues on the [GitHub Issues page](https://github.com/RIKICARRE/portfolio_v2/issues).
- For support, please contact [ricardocarremar@icloud.com](mailto:ricardocarremar@icloud.com).

## 🗺️ Roadmap
- Add more interactive components
- Improve SEO and accessibility
- Add more projects and experiences
- Implement a blog section

---

**Additional Guidelines:**
- Use modern markdown features (badges, collapsible sections, etc.)
- Include practical, working code examples
- Make it visually appealing with appropriate emojis
- Ensure all code snippets are syntactically correct for TypeScript
- Include relevant badges (build status, version, license, etc.)
- Make installation instructions copy-pasteable
- Focus on clarity and developer experience
