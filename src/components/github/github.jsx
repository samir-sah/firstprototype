import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function github(){
    const data = useLoaderData()

    return (
        <div className="min-h-screen flex items-center justify-center bg-white text-black">
            <div className="bg-gray-300 p-6 rounded-2xl shadow-lg w-96 text-center">
                
                <img 
                    src={data.avatar_url} 
                    alt="avatar"
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />

                <h1 className="text-2xl font-bold">{data.name || data.login}</h1>
                <p className="text-gray-400">@{data.login}</p>

                <p className="mt-3 text-sm">{data.bio}</p>

                <div className="flex justify-between mt-4 text-sm">
                    <span>Followers: {data.followers}</span>
                    <span>Following: {data.following}</span>
                </div>

                <div className="mt-2 text-sm">
                    <p>Public Repos: {data.public_repos}</p>
                </div>

                <a 
                    href={data.html_url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-orange-700 rounded-lg hover:bg-orange-800 transition"
                >
                    View Profile
                </a>

            </div>
        </div>
    );
}

export default github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/samir-sah')
    return response.json()
}