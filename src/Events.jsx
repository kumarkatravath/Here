const Button=()=>{
    //const handleClick=()=>console.log(Math.round(Math.random()*10))
    return<button onClick={()=>console.log("you clicked me")}>Click</button>;
}
const App=()=>{
    return (
        <section>
            <Button/>
        </section>
    )
}
export default App