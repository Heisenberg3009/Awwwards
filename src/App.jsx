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

2. 

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
