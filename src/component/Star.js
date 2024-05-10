import { FaStar } from 'react-icons/fa';

function Star({ click = f => f, state }) {
    return (<li onClick={click} className={state} ><FaStar /></li>);
}

export default Star;