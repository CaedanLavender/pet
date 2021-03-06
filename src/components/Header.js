import '../styles/Header.css'
import { useState } from 'react'
import { ReactComponent as PetLogo } from '../assets/pet-logo.svg'
import { ReactComponent as AccountLogo } from '../assets/account.svg'
import { ReactComponent as CartLogo } from '../assets/cart.svg'
import { Link } from 'react-router-dom'


const Header = ({poshMode, setPoshMode}) => {
   const [bannerIsOpen, setBannerIsOpen] = useState(true)

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
      {
         title: "bird",
         posh: 'Avian',
         link: "#"
      }
   ]

   return (
      <header>
         <div className={`callToActionSuper ${bannerIsOpen || 'gone'}`}>
            <div className="callToAction">
               we're open for all your pet needs | <span className='bold'>more {poshMode ? "Spanish Flu" : "covid-19"} info here</span>
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
                        <Link to="/">
                           <li>{poshMode ? item.posh : item.title}</li>
                        </Link>
                     ))
                  }
               </ul>
               <div className="inputContainer"><input type="text" placeholder="Can't find your pet?"/></div>
               <aside>
                  <Link to="/account">
                     <AccountLogo />
                  </Link>
                  <Link to="/cart">
                     <CartLogo />
                  </Link>
               </aside>
            </nav>
         </div>
      </header>
   )
}

export default Header;