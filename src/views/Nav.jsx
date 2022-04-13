import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return <div className='navbar'>
        <ul className='nav-list'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/products'>Products</Link>
            </li>
            <li>
                <Link to='/counter'>Counter</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/todo'>Todo</Link>
            </li>
        </ul>
    </div>
}

export default Nav