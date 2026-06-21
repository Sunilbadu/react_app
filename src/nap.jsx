function Mapy(){
    const students= ["ram" , "shyam" , "hari"]
    return(
        <>
        {
            students.map((student)=>{
               return <h1 key={student}>hello {student}</h1>
            })
        }
        </>
    )
}
export default Mapy;