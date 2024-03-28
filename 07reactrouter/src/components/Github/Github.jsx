import React, {useState, useEffect} from 'react'
import {useLoaderData} from 'react-router-dom';

function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     console.log("Fetching data");
    //     fetch('https://api.github.com/users/saravanaappdev')
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log("Data->", res);
    //         setData(res);
    //     })
    //     .catch(err => console.log(err))
        
    // },[])
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
        <div>Followers Count : {data.followers}</div>
        <img src={data.avatar_url} width={300} alt="Profile Image" className='rounded-lg outline-none' />
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
    const data = await fetch('https://api.github.com/users/saravanaappdev');
    console.log("Fetched data->", data);
    return data.json();
}
