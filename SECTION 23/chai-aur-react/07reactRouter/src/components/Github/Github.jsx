import React, { useEffect, useState } from 'react'

function Github() {

    const [data,setdata] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/aman931120')
        .then((res) => res.json())
        .then(data => setdata(data))
        
    },[])
    return (
      <div className="text-center m-4 bg-gray-600 p-4 text-3xl font-bold">
        Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git Piture" width={300} />
      </div>
    );
}
export default Github

// export const githubInfoLoader = async () =>{
//     const response = await fetch("https://api.github.com/users/aman931120")
//     return response
// }