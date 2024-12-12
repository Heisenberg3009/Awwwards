import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import Story from "./components/Story.jsx";
//How to start the project?

//First, let's think about why we need Vite?
//The defining features you mentioned, Hot Module Replacement (HMR) and instant server startup, are significant advantages of Vite, but they aren't entirely unique.
    //1. Hot Module Replacement (HMR)
        //What It Is:
            //HMR allows a web application to update individual modules (e.g., components or styles) in the browser without requiring a full page reload. This speeds up the feedback loop during development.
        //Vite:
            //1. Vite’s HMR is blazing fast because it uses ES Modules in the browser during development.
            //2. Only the parts of your code that change are updated, making the process seamless and almost instant, even for large projects.
        //Next.js:
            //1. Next.js also supports HMR, but it’s tied to its server-rendered architecture and Webpack (or Turbopack in the future). While effective, it may not be as fast as Vite’s pure ES Module-based approach for frontend-only projects.
        //2. Instant Server Startup:
            //What It Is:
                //Instant server startup means the development server begins almost immediately, even for large projects.
            //Vite:
                //1. Vite achieves instant startup because it doesn't pre-bundle your entire app during development. It only loads modules on demand using native ES Modules.
                //2. For large projects, this drastically reduces the time needed to start working after launching the dev server.
            //Next.js:
                //1. Next.js takes longer to start the development server because it is optimized for server-side rendering (SSR) and static site generation (SSG), which require additional processing.

//Is This Feature Difficult or Unavailable Elsewhere?
    //1. Not Unavailable:
        //1. HMR is a common feature across modern development tools like Webpack, Parcel, and Next.js.
        //2. Instant server startup is rare and a defining feature of Vite due to its use of native ES Modules and lightweight architecture.

//When to Use Vite vs. Next.js?
    //1. Use Vite if:
        //1. You’re building a single-page application (SPA).
        //2. You prioritize fast development feedback and simple setup.
        //3. ou want framework flexibility (e.g., Vue, React, Svelte).
    //2. Use Next.js if:
        //1. You need server-side rendering (SSR) or static site generation (SSG).
        //2. You want API routes or a full-stack solution.
        //3. SEO and performance for large websites are priorities.

//Now, we know why we chose Vite. Let's proceed:

//Create a new Vite application:
//In a new terminal: Run npm create vite@latest ./
    //What is Vite?
        // Vite is a fast and lightweight build tool for frontend development.
        // It’s designed to make development fast with features like hot module replacement (HMR) and instant server startup.
        // It supports modern JavaScript frameworks like React, Vue, and Svelte.
    //What Happens When You Run It?
        // 1. Scaffolding the Project:
            // It downloads the latest Vite starter template.
            // Prompts you to choose a framework (e.g., React, Vue, Svelte, Vanilla JS).
            // Prompts you to choose a variant (e.g., JavaScript or TypeScript).
        // 2. Creating the Project Structure:
            // Generates the necessary files (like index.html, main.js, or App.jsx) and a configuration (vite.config.js).
        // 3. Installing Dependencies:
            // After setting up the project structure, it may suggest running npm install to install the required libraries.
//It will ask whether to run a Vite installer?
    //Give yes, and ride through it.
    //You can check the initialization by running npm run dev in the terminal.

const App = () => {
    return (
        //Bg-zinc-600 added so that we can see the nav links on a white bg - We removed it because it was no longer needed.
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Features />
            <Story />
         <section className="z-0 min-h-screen w-screen overflow-x-hidden "/>





        </main>
    )
}
export default App
