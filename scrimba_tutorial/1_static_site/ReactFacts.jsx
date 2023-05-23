import './static.scss'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

const ReactFacts = () => {
  return ( 
    <div className="react-facts">
      <Header/>
      <Main/>
      <Footer/>
    </div>
   );
}
 
export default ReactFacts;