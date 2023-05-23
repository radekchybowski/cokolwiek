import Image from './assets/image_card.png';
import data from './assets/data';
import './assets/air.scss'
import Card from './components/Card';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

export default function Airbnb() {
  return (
    <div className="wrapper">
      <header>
        <NavBar/>
      </header>
      
      <main className="content-wrapper">
        <Hero/>
        <div className="card-wrapper">
        {data.map(item => <Card 
          key={item.id}
          img={Image}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          country={item.location}
          title={item.title}
          price={item.price}
          openSpots={item.openSpots}
          {...item}
        />)}
        </div>
      </main>
    </div>
  );
}