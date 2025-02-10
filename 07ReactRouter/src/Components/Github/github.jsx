import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github(){
    const data= useLoaderData() 
    return(
        <div className='text-center m-4 bg-gray-400 text-white'>Github Followers : {data.followers}
        <img src={data.avatar_url} alt="Git Picture " />
        </div>
    )
}

export default Github;

export const githubInfoLoader=async()=>{
        const response = await fetch('https://api.github.com/users/sahildeshmukh45');
        return response.json()
    }