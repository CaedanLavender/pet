import '../styles/Header.css'
import { useState } from 'react'
import { ReactComponent as PetLogo } from '../assets/pet-logo.svg'
import { ReactComponent as AccountLogo } from '../assets/account.svg'
import { ReactComponent as CartLogo } from '../assets/cart.svg'


const Header = () => {
   const [bannerIsOpen, setBannerIsOpen] = useState(true)
   const [poshMode, setPoshMode] = useState(false)

   const togglePosMode = () => setPoshMode(!poshMode);

   const toggleBanner = () => setBannerIsOpen(!bannerIsOpen);

   const navigationLinks = [
      {
         title: "Home",
         posh: "Abode",
         link: '#'
      },
      {
         title: "cat",
         posh: "mouser",
         link: '#'
      },
      {
         title: "dog",
         posh: "pooch",
         link: '#'
      },
      {
         title: "horse",
         posh: "equus",
         link: '#'
      },
      {
         title: "rodent",
         posh: "Rodentia",
         link: '#'
      },
      {
         title: "reptile",
         posh: "Reptus",
         link: '#'
      },
      {
         title: "fish",
         posh: "Piscis",
         link: '#'
      },
   ]

   return (
      <header>
         <div className={`callToActionSuper ${bannerIsOpen || 'gone'}`}>
            <div className="callToAction">
               we're open for all your pet needs | <span className='bold'>more {poshMode?"Spanish Flu":"covid-19"} info here</span>
               <div className='dismiss' onClick={toggleBanner}>x</div>
            </div>
         </div>
         <div className="headerInner">
            <nav>
               <aside>
                  <div className='logo' onClick={togglePosMode}>
                     <PetLogo />
                  </div>
               </aside>
               <ul>
                  {
                     navigationLinks.map((item) => (
                        <li>{poshMode?item.posh:item.title}</li>
                        ))
                     }
               </ul>
               <aside>
                     <AccountLogo />
                     <CartLogo />
               </aside>
            </nav>
         </div>
      </header>
   )
}

export default Header;