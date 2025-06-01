import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const params = useParams()

    console.log("params", params)
    // api call
    // params id

    return (
        <div>UserProfile : {params.id} </div>
    )
}

export default UserProfile