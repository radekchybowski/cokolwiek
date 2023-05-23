import {useState, useEffect} from 'react';

export default function Form() {

  const [allMemes, setAllMemes] = useState({});

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    image: 'http://i.imgflip.com/1bij.jpg'
  });

  useEffect( () => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json() )
      .then(data => setAllMemes(data.data.memes) );
  }, []);

  

  function getMeme() {
    const meme = allMemes[Math.round(Math.random() * allMemes.length)];
    setMeme(prev => ({...prev, image: meme.url}));
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prev => {
        return {
            ...prev,
            [name]: value
        }
    })
  }

  return (
      <main>
          <div className="form">
              <input 
                  type="text"
                  name="topText"
                  placeholder="Top text"
                  className="form--input"
                  value={meme.topText}
                  onChange={handleChange}
              />
              <input 
                  type="text"
                  name="bottomText"
                  placeholder="Bottom text"
                  className="form--input"
                  value={meme.bottomText}
                  onChange={handleChange}
              />
              <button 
                  className="form--button"
                  onClick={getMeme}
              >
                  Get a new meme image 🖼
              </button>
              
          </div>
          <div className="meme">
            <img className="meme-img" src={meme.image} alt="meme" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>
      </main>
  )
}