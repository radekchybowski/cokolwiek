import Image from '../assets/airbnb_hero.png';

export default function Hero() {
  return (
    <div className="hero">
      <img className="img-hero" src={Image} alt="Herro" />
      <h1>Online experiences</h1>
      <h3>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
    </div>
  );
}