import React, {useEffect, useRef, useState} from 'react'
import Button from "./Button.jsx";
import {TiLocationArrow} from "react-icons/ti";

//We can map over our NavItems within the nav element tag.We can declare an array of objects with title, home, link, etc, but it can messy very soon.
//Instead, we are going to define the navItems at the top.

const navItems = ['Nexus','Vault','Prologue,','About','Contact'];

const Navbar = () => {
    //To check whether the audio is playing
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    //TO check whether indicator is active
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);

    //This div section will be animated later. Hence, we can add a reference to it. We will use useRef at the start equal to null.

    const navContainerRef = useRef(null);
    //We will also create a new Ref, that will allow us to attach audio to this element.
    const audioElementRef = useRef(null);

    //We are now going to create a new function that will allow us to play music.

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);

        setIsIndicatorActive((prev) => !prev);

    }

    useEffect(() => {
        if(isAudioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);

    return (
        //We can also start giving it some class names - 1. fixed: because it will be fixed at the top 2. inset-x-0 3.top-4 4. z-50: so that it appears above other elements 5. h-16 6. border-none 7. transition-all 8. duration-700 9. sm:inset-x-6

        //After coding the div, we can still not see the navbar. This is because we have nothing in it. So within the div tag, we are adding the header component.
        //The header component will contain the following classes: 1.absolute 2. top-1/2: This will give it top 50% 3. w-full: For full width 4. -translate-y-1/2

        //Within this, we can the nav element. This will have the following classes: 1. flex 2. size-full 3. items-center 4. justify-between: So that they (nav components) will show on the left and the right side 5. p-4: padding of 4

        //With this we can start with the left side of the navbar - where we have the logo and the product button.
        //Let's crete a div with the following classes: 1. flex 2. items-center 3. gap-7

        // Right within it, we create an image element. We will give its source, alt and the required CSS className.

        //Down, we will also create a button to play music - yes, we can control the music.
        <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 ">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className = "flex items-center gap-7">
                        <img src="/img/logo.png" alt="logo" className = "w-10" />
                        <Button
                            id = "product-button"
                            title="Product"
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                        />
                    </div>
                    <div className = "flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item) => (
                                //Here, we are use navItems.map to map over the individual items and we can automatically return an anchor tag for each one.
                                //Make sure to use a normal bracket instead of curly bracket, since we are doing an automatic return with this one.
                                //Now, within this anchor tag we can simply render the item.
                                <a key={item} href={`#${item.toLowerCase()}`} className="nav-hover-btn" >
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudioIndicator}>
                            <audio ref={audioElementRef}  className="hidden" src="/audio/loop.mp3" loop / >
                                {[1, 2, 3, 4].map((bar =>
                                    <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{animationDelay: `${bar * 0.1}s`}} />
                                ))}
                        </button>
                    </div>
                </nav>

            </header>

        </div>
    )
}
export default Navbar
