# <u> How to start the project? </u>

**<u>What is Vite?</u>**

1.  Vite is a fast and lightweight build tool for frontend development.
2. It’s designed to make development fast with features like hot module replacement (HMR) and instant server startup.
3.  It supports modern JavaScript frameworks like React, Vue, and Svelte.

**First, let's think about why we need Vite?**

The defining features you mentioned, Hot Module Replacement (HMR) and instant server startup, are significant advantages of Vite, but they aren't entirely unique.

## 1. Hot Module Replacement (HMR)
### What it is?
HMR allows a web application to update individual modules (e.g., components or styles) in the browser without requiring a full page reload. This speeds up the feedback loop during development.

**<u>Vite</u>:**
1. Vite’s HMR is blazing fast because it uses ES Modules in the browser during development.
2. Only the parts of your code that change are updated, making the process seamless and almost instant, even for large projects.

**<u>Next.js:</u>**

Next.js also supports HMR, but it’s tied to its server-rendered architecture and Webpack (or Turbopack in the future). While effective, it may not be as fast as Vite’s pure ES Module-based approach for frontend-only projects.

## 2. Instant Server Startup:

### What it is?
Instant server startup means the development server begins almost immediately, even for large projects.

**<u>Vite</u>:**
1. Vite achieves instant startup because it doesn't pre-bundle your entire app during development. It only loads modules on demand using native ES Modules.
2. For large projects, this drastically reduces the time needed to start working after launching the dev server.

**<u>Next.js</u>:**

Next.js takes longer to start the development server because it is optimized for server-side rendering (SSR) and static site generation (SSG), which require additional processing.

### Is This Feature Difficult or Unavailable Elsewhere?
**<u>Not Unavailable:</u>**
1. HMR is a common feature across modern development tools like Webpack, Parcel, and Next.js.
2. Instant server startup is rare and a defining feature of Vite due to its use of native ES Modules and lightweight architecture.

### When to Use Vite vs. Next.js?
**<u>Use Vite if:</u>**

1. You’re building a single-page application (SPA).
2. You prioritize fast development feedback and simple setup.
3. You want framework flexibility (e.g., Vue, React, Svelte).

**<u>Use Next.js if:</u>**
1. You need server-side rendering (SSR) or static site generation (SSG).
2. You want API routes or a full-stack solution.
3. SEO and performance for large websites are priorities.

Now, we know why we chose Vite. Let's proceed:

1. Create a new Vite application:
2. In a new terminal: Run `npm create vite@latest ./`

### What Happens When You Run It?
**<u>Scaffolding the Project:</u>**

1. It downloads the latest Vite starter template.
2. Prompts you to choose a framework (e.g., React, Vue, Svelte, Vanilla JS).
3. Prompts you to choose a variant (e.g., JavaScript or TypeScript).

**<u>2. Creating the Project Structure:</u>**

Generates the necessary files (like index.html, main.js, or App.jsx) and a configuration (vite.config.js).

**<u>3. Installing Dependencies:</u>**
1. After setting up the project structure, it may suggest running npm install to install the required libraries.
2. It will ask whether to run a Vite installer? Give yes, and ride through it.
3. You can check the initialization by running `npm run dev` in the terminal.

### Let's Proceed:

1. Now, let's have a look at the file and folder structure that was generated for us when we installed the Vite application. 
2. Let us start from the `src` folder which is the most important folder. 
3. We notice that we have a lot of stuff we do not need right now such ass App.css, index.css and a lot of boilerplate code in App.jsx.

    **<u>What is boilerplate code you ask?</u>**
    1. "Boilerplate" refers to sections of code that are repeated in multiple places with little or no variation. 
    2. It often involves standardized or template-like code that is necessary to set up a particular framework, language, or project, but doesn’t directly contribute to the unique functionality of the application.
    3. In simpler terms, boilerplate is the default setup or reusable code that developers include to get things up and running.
 4. Let's remove the boilerplate by deleting the code written inside and running `rafce`, which stands for react arrow function export component (If it didn't work for us, we will need to install any kind of react snippets package).
 5. Let's move ahead and delete index.css and App.css as we don't need them. Now we have a bit of cleaner working environment, let's setup tailwind CSS.

**<u>How to install and setup tailwind CSS?</u>**
1. Go to [Tailwind CSS](https://www.tailwindcss.com) -> Get Started.
2. Go to Search -> Type Vite and check if it's the correct installation for Vite.
3. Copy the code `npm install -D tailwindcss postcss autoprefixer`.
4. Paste in a new terminal, within the project.
5. Continue with `npx tailwindcss init -p`.
6. This will initialize a new tailwind config within the project. 
7. As a second part of the installation, we will need to override the default tailwind config by adding 
   ```
   /** @type {import('tailwindcss').Config} */
    export default {
     content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
         ],
        theme: {
         extend: {},
         },
         plugins: [],
    }
    ```
8. Next, we will need to add Tailwind CSS directives into our CSS. So we will create a new file in the source folder and call it `index.css`.
9. Here, we can import the tailwind CSS directives.
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
10. After that, we head over to App.jsx. Refer there to know what we did next.
11. We can also go ahead and delete the existing public and assets folder.
12. In the new public folder from the internet, there will be a new assets folder (Downloaded from the internet). It will contain the audio, fonts, images, and videos which will make landing page more dynamic.
13. Now let's use the fonts in index.css file.