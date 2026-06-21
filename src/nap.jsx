// function Mapy(){
//     const students= ["ram" , "shyam" , "hari"]
//     return(
//         <>
//         {
//             students.map((student)=>{
//                return <h1 key={student}>hello {student}</h1>
//             })
//         }
//         </>
//     )
// }
// export default Mapy;
function Mapy(){
    const students=[
        {id:1, name: "sunil" , age:20},
        {id:3, name: "sujeet" , age:22},
        {id:6, name: "anish" , age:24},
    ];
    return(
        <>
              { students.map((students)=>{
               return( <div key={students.id}>
                    <h2>{students.name}</h2>
                </div>)
              }
           
        )}
    
        </>
    )
}
export default Mapy;