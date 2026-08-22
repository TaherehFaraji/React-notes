// function Greeting(props){
//     return <h2>Welcome {props.name}!</h2>
// }

function Greeting({name="guest"}){
    return <h2>Welcome {name}!</h2>
}
export default Greeting