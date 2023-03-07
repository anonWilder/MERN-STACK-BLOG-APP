import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header>
        <a href='' className='logo'>MyBlog</a>
        <nav>
          <Link href='/login'>Login</Link>
          <Link href='/register'>Register</Link>
        </nav>
      </header>
    );
}