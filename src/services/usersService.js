
const  getUsers=async(controller)=>{
    
 
      const response= await fetch("https://jsonplaceholder.typicode.com/users",{
        signal:controller.signal
      });
      if(!response.ok){
        throw new Error("LOADING USER FAILED")
      }
      const data=await response.json();
     
      
      return data
    
   
}

export {getUsers}