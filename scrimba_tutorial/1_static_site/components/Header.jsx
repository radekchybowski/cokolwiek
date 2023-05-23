import ReactLogo from '../../../assets/react.svg';

const Header = () => {
  return ( 
    <header>
    <nav className="nav">
      <div className="logo">
        <img src={ReactLogo} alt="amm" />
        <h1>ReactLove</h1>
      </div>
      
      <ul className="nav-list">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
  );
}
 
export default Header;