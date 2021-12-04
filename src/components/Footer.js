import '../styles/Footer.css'
import { ReactComponent as FacebookLogo} from '../assets/Facebook.svg'
import { ReactComponent as InstaLogo } from '../assets/Insta.svg'
import{ ReactComponent as YouTubeLogo } from '../assets/YouTube.svg'

const Footer = () => {

   return (
      <>
         <div className="blueDiv">
            <footer>
               <div className="footerItems">
                  <p>Company information</p>
                  <ul>
                     <li>About Us</li>
                     <li>Contact Us</li>
                     <li>Careers</li>
                  </ul>
               </div>
               <div className="footerItems">
                  <p>Help Centre</p>
                  <ul>
                     <li>Help & FAQs</li>
                     <li>Using My Account</li>
                     <li>Ordering</li>
                     <li>Shipping & Delivery</li>
                     <li>Returns</li>
                     <li>Store Finder</li>
                  </ul>
               </div>
               <div className="footerItems">
                  <p>Shopping</p>
                  <ul>
                     <li>Terms & Conditions</li>
                     <li>Privacy Policy</li>
                     <li>Membership Teams</li>
                     <li>Sales Terms</li>
                     <li>Click & Collect</li>
                     <li>Repeat Delivery</li>
                     <li>Autoship</li>
                  </ul>
               </div>
               <div className="footerItems">
                  <p>Pet information</p>
                  <ul>
                     <li>Blog</li>
                     <li>Features</li>
                  </ul>
               </div>
               <div className="footerItems">
                  <p>Follow Us</p>
                  <div>
                  <FacebookLogo className="icon"/>
                  <InstaLogo className="icon"/>
                  <YouTubeLogo className="icon"/>
                  </div>
                  <br/>
                  <br/>
                  <p>Subscribe to Our Newsletter</p>
                  <input type="text" placeholder="Your Email Address " />
               </div>
            </footer>
         </div>
         <div className="mellowDiv">
         </div>
      </>
   )
}

export default Footer;