import React, { useState } from 'react'
import {
    useParams
} from "react-router-dom";

export default function Project() {
    const [infos, getInfos] = useState('')
    let { id } = useParams()

    return (
        <div>
            id: {id}
        </div>
    )
}
