
import React from 'react'
import './Saarthi.css';
import { useState } from 'react';
function Saarthi() {
const [sender, setsender] = useState("");
const [chatlog, setchatlog] = useState([]);
const [userid, setuserid] = useState([]);
   async  function handlesubmit(e)
    {
     e.preventDefault();
  
     setuserid([...userid,{user :"gpt" , message : sender}])
      console.log(userid)
      const response = await fetch("http://localhost:3000/",{
        method : "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            message : sender
            
        })
      });
      setsender("");
      const data = await response.json();
      await setchatlog([...chatlog,{user :"gpt" , message : `${data.message}`}])
      console.log(data.message);
      console.log(chatlog)
    
    }

    


  return (
 <>
 <form onSubmit={handlesubmit}>
 <input onChange={(e)=>setsender(e.target.value)}/>
 </form>
 <div className="parent">

<div className="userchat">
{
    userid.map((datas)=>{
        return(
            <>
            <p>{datas.message}</p>
            </>
        )
    })
}
</div>


 <div className="chatbox">
{
    chatlog.map((datas)=>{
        return(
            <>
            <p>{datas.message}</p>
            </>
        )
    })
}
 </div>
</div>
 </>
  )
}

export default Saarthi