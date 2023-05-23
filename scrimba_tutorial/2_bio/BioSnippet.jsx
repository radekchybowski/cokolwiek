import './assets/bio.scss'
import Image from './assets/img/profil.jpg';
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Interests from './components/Interests';

export default function BioSnippet() {
  return (
    <div className="body">
      <div className="bio-snippet-wrapper">
      <img className="profile-pic" src={Image} alt="Zdjecie profilowe" />
      <div className="content-wrapper">
      <Info/>
      <About/>
      <Interests/>
      </div>
      <Footer/>
    </div>
    </div>
  );
};