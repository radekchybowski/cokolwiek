const Die = ({value, isHeld, hold, id}) => {

  return ( 
    <div onClick={() => hold(id)} className={isHeld ? "die die-held" : "die"}>
      <p>{value}</p>
    </div>
   );
}
 
export default Die;