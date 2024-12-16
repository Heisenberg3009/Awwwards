import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import Story from "./components/Story.jsx";

/*

1. After creating rafce, our structure will look like this:

import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App

2. Now we turn the <div> into <main> tag. 
3. Within it create <h1 className = "text-5xl text-orange-500 font-bold">Welcome to Awwwards</h1>
    -> What do the class names stand for? 
        1. text-5xl
            1. Purpose: Sets the text size to 5xl.
            2. Meaning: This specifies a predefined font size in Tailwind's scale.
            3. By default, in Tailwind CSS: text-5xl corresponds to a font size of 3rem (48px) and a line height of 1 (48px).
        2. text-orange-500
            1. Purpose: Sets the text color to a specific shade of orange.
            2. Meaning: 
            text- sets the color of the text.
            orange-500 refers to a specific orange shade in Tailwind's color palette.
            The 500 is a mid-range intensity of orange. Lower numbers (e.g., 100) are lighter, and higher numbers (e.g., 900) are darker.
        3. font-bold
            Purpose: Sets the font weight to bold.
            Meaning:
            font- controls the font weight.
            bold corresponds to font-weight: 700 in CSS.
        4. Tailwind Text Size Classes:
                Class	Font Size	Line Height
                text-xs	0.75rem (12px)	1rem (16px)
                text-sm	0.875rem (14px)	1.25rem (20px)
                text-base	1rem (16px)	1.5rem (24px)
                text-lg	1.125rem (18px)	1.75rem (28px)
                text-xl	1.25rem (20px)	1.75rem (28px)
                text-2xl	1.5rem (24px)	2rem (32px)
                text-3xl	1.875rem (30px)	2.25rem (36px)
                text-4xl	2.25rem (36px)	2.5rem (40px)
                text-5xl	3rem (48px)	1 (48px)
                text-6xl	3.75rem (60px)	1 (60px)
                text-7xl	4.5rem (72px)	1 (72px)
                text-8xl	6rem (96px)	1 (96px)
                text-9xl	8rem (128px)	1 (128px)
        5. Changing text-5xl
            For example:

            To make the text smaller, use text-xl or text-2xl.
            To make the text larger, use text-6xl or text-7xl.
            html
    4. Now, we have setup the react application successfully and added tailwindCSS to it.


*/

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
