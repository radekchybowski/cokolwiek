import Image from '../assets/image_card.png';

export default function Card(props) {
  return (
    <div className="bnb-card">
      {props.openSpots === 0 && <div className="sold-out">SOLD OUT</div>}
      <img className="img-card" src={props.img} alt="card image" />
      <div className="card-stats">
        <i className="bi bi-star-fill"></i> 
        <span className="">{props.rating}</span>  
        <span className="gray"> ({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      
      <h4 className="card-name">{props.title}</h4>
      <p className="card-price"><b>From {props.price}$</b> / person</p>
    </div>
  );
}