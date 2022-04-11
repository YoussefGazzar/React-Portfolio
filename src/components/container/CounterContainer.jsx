import Actions from '../actions/CounterActions'
import Counter from '../counter/Counter'
import { useState } from 'react'
import './CounterContainer.css'

const Container = ()=>{
    const [counter, setCounter] = useState(0)

    const increase = ()=>{
        setCounter(counter+1);
    }
    const decrease = ()=>{
        setCounter(counter-1);
    }

    return (
        <div>
            <div className='counter'>
                <Counter counter={counter}/>
            </div>
            <div className='actions'>
                <Actions increase={increase} decrease={decrease}/>
            </div>
        </div>
    )
}

export default Container