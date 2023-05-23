

const Welcome = (props) => {
  return ( 
    <div className="Welcome">
      <h1>Quiz</h1>
      <p>Some description if needed</p>
      <button className="welcome-btn" onClick={props.handleClick}>Start quiz</button>
    </div>
   );
}
 
export default Welcome;