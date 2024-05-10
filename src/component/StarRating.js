import { useState } from 'react'
import Star from './Star';

function StarRating() {

    const [rate, setRate] = useState(0);
    const onRate = rate => setRate(rate);

    return (
        <div>
            <ul className='flex'>
                {
                    Array(5).fill().map(
                        (item, i) =>
                            <Star
                                key={i}
                                click={() => { onRate(i + 1) }}
                                state={i >= rate ? '' : 'highlight'}
                            />)
                }
            </ul>
            <h2>{["Unrated", "Excellent", "Outstanding", "Exceptional", "Superb", "Top-notch"][rate]}</h2>
        </div>
    );
}

export default StarRating;