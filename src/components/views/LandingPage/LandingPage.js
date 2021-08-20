

import axios from 'axios'
import React, {useEffect} from 'react'

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello')
            .then(response => {console.log(response)})
    },[])

        return (
            <div style={{
                display:'flex', justifyContent:'center', alignItems:'center'
                , width:'100%', height:'100vh'
            }}>
                <h2>시작페이지</h2>
            </div>
        )
}

export default LandingPage
