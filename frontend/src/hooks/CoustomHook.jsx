import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const CoustomHook = () => {
    const [loggedin , setLogedin] =  useState(false)
    const [checkingStatus , SetchekingStatus] = useState(true)


    const {user} =  useSelector(state => state.auth)

    useEffect(()=>{ 
       if(user){
        setLogedin(true)
       }else{
        setLogedin(false)
       }
       SetchekingStatus(false)
    },[user])

    return {loggedin , checkingStatus}
}

export default CoustomHook
