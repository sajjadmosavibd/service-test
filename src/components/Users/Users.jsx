import { getUsers } from "../../services/usersService";
import { useEffect , useState } from "react";
function Users(){
    
    const [users,setUsers]=useState([])
    useEffect(()=>{
     const controller=new AbortController()
        const getServiceUsers=async()=>{
            try{
                const data=await getUsers(controller);
                setUsers(data);
            }catch(err){
                if(err.name==="AbortError"){
                    return;
                }
                console.log(err.message)
            }
            
        }
        getServiceUsers()
         return(()=>{
            controller.abort();
        }) 
        
    },[])
    return(
        <>
        {users.map(user=><p key={user.id}>{user.name}</p>)}
        </>
    )
}

export default Users