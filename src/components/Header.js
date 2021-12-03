const Header = () => {
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
      <div><ul>
         {
            navigationLinks.map((item) => (
               <li>{item.title}</li>
            ))
         }
      </ul></div>
   )
}

export default Header;