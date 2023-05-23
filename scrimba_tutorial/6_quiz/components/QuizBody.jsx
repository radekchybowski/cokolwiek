import {useState, useEffect} from 'react';
import Question from "./Question";

const QuizBody = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10')
     .then(response => {
        if(!response.ok) throw Error("Could not fetch the data");
        return response.json();
     })
     .then(data => setData(data.results))
     .catch(err => console.log(err));
  }, []);
  
  console.log(data);
  return ( 
    <div className="quiz-body">
      <Question data={data[0]}/>
      <Question/>
      <Question/>
      <Question/>
      <Question/>
      <button>Check answers</button>
    </div>
   );
}
 
export default QuizBody;