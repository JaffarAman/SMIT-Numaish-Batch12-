import React from 'react'
import { useSearchParams } from 'react-router-dom'

const UserPage = () => {

    const [searchParam] = useSearchParams()

    console.log("searchParam" ,searchParam.get("name"))
    console.log("searchParam" ,searchParam.get("id"))

    return (
        <div>UserPage</div>
    )
}

export default UserPage