import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
   <nav>
     <Link to='/'>HOME</Link>
     <Link to='/About'>ABOUT </Link>
     <Link to='/Profile'>LOGIN </Link>
     <Link to='/School'>SCHOOLS</Link>
     <Link to='/College'>COLLEGES</Link>
   </nav>
  )
}
