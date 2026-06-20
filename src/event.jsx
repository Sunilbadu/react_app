
function Event () {
    const greet = (name)=>{
    alert(`hello ${name}`);
};
    return(
        <>
        <button onClick={()=>greet("sunil")}>clickme</button>
        </>
    )
}

export default Event;