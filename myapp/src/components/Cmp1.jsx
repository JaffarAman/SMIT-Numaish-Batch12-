import React, { useEffect } from 'react'

const Cmp1 = () => {
    useEffect(()=>{
        console.log("CMP1")
    } , [])
    return (
    <div>Cmp1</div>
  )
}

export default Cmp1