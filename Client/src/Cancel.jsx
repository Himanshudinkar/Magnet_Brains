import { useNavigate } from "react-router-dom"

const Cancel = () =>{
        const navigate = useNavigate()
    return(
        <>
          <div className="text-center text-dark mt-5" style={{padding:"160px"}}>
           <h1 style={{color:"red"}}> Payment Failed</h1>
          <p>Please Try Again.</p>
          <button style={{backgroundColor:"#0c1f2c",color:"white",padding:"5px",borderRadius:"10px"}} onClick={()=>{navigate("/")}} >BACK TO HOME</button>
        </div>
        
        
        </>
    )
}

export default Cancel