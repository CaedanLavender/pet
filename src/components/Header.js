import '../styles/Header.css'
import { useState } from 'react'
import { ReactComponent as PetLogo } from '../assets/pet-logo.svg'
import { ReactComponent as AccountLogo } from '../assets/account.svg'
import { ReactComponent as CartLogo } from '../assets/cart.svg'


const Header = () => {
   const [bannerIsOpen, setBannerIsOpen] = useState(true)

   const toggleBanner = () => setBannerIsOpen(!bannerIsOpen);

   const navigationLinks = [
      {
         title: "home",
         link: '#'
      },
      {
         title: "cat",
         link: '#'
      },
      {
         title: "dog",
         link: '#'
      },
      {
         title: "horse",
         link: '#'
      },
      {
         title: "rodent",
         link: '#'
      },
      {
         title: "reptile",
         link: '#'
      },
      {
         title: "fish",
         link: '#'
      },
   ]

   return (
      <header>
         <div className={`callToActionSuper ${bannerIsOpen || 'gone'}`}>
            <div className="callToAction">
               we're open for all your pet needs | <span className='bold'>more covid-19 info here</span>
               <div className='dismiss' onClick={toggleBanner}>x</div>
            </div>
         </div>
         <div className="headerInner">
            <nav>
               <aside>
                  <div className='logo'>
                     <PetLogo />
                  </div>
               </aside>
               <ul>
                  {
                     navigationLinks.map((item) => (
                        <li>{item.title}</li>
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