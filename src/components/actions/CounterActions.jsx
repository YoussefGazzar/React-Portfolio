import './CounterActions.css';

const Actions = (props)=>{
    return (
        <div>
            <button onClick={props.increase}>Increase</button>
            <button onClick={props.decrease}>Decrease</button>
        </div>
    )
}

export default Actions