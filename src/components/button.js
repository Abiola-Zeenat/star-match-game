
import colors from './colors'

function Button(props) {
  return ( 
    <button style={{ backgroundColor: colors[props.status] }} className="number" onClick ={() => props.onClick(props.number, props.status)}>{props.number}</button>
   );
}

export default Button;