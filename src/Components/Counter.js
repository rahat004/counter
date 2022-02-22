import React,{useState} from 'react';
import './counter.scss'

const counter = () => {
    const [first, setfirst] = useState(0);
    const increment=()=>{
        setfirst(first + 1);
    }
    const decrement=()=>{
        setfirst(first - 1);
    }
    const Neutral=()=>{
        setfirst(0);
    }
    
    return (
      <div className=''>
           <div className='back'>
            <div className='component '>
                <h1>React Counter</h1>
                <h2>{first}</h2>
                <button className="btn btn-sucess" onClick={increment}>Increment</button>
                <button className="btn btn-danger" onClick={decrement}>Decrement</button>
                <button className="btn btn-peimary" onClick={Neutral}>Neutral</button>
            </div>
       </div>

      </div>
    );
};

export default counter;