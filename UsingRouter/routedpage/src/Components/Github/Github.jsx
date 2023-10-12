import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data,setData] = useState([]);
    useEffect(() =>{
        fetch('https://api.github.com/users/RJ-RahulJauhari')
        .then((res)=>res.json())
        .then((data) =>{
            console.log(data);
            setData(data);
        }
        )
    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub Followers: {data.followers}
      <img src={data.avatar_url} alt="Git Pic" width={300}/>
    </div>
  )
}

export default Github
