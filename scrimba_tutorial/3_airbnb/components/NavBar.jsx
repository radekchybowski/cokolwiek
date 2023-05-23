import Logo from '../assets/airbnb_logo.svg';

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" />
    </nav>
  );
}