const Bubble = (props) => {
  return (
    <div className='bubble' id={props.bet.id} key={props.bet.id}>
      {props.bet.bet}
    </div>
  );
};

export default Bubble;
