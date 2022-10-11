export default function Button({ increment, onClickFunction }){
    console.log('Button created')
    const handleClick = () =>{
        onClickFunction(increment)
    }
    return <button onClick={handleClick}>+{increment}</button>
}