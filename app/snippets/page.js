"use client"

import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabase"

export default function SnippetsPage(){

const [snippets,setSnippets] = useState([])

const loadPublicSnippets = async ()=>{

  const { data, error } = await supabase
    .from("snippets")
    .select("*")
    .eq("visibility","public")

  if(!error){
    setSnippets(data)
  }

}

useEffect(()=>{
  loadPublicSnippets()
},[])

return(

<div>

<h1 className="text-3xl font-bold mb-8 text-center">
Public Snippets
</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
{snippets.map((s)=>(
  <div
  key={s.id}
  className="bg-gray-800 text-white shadow-lg rounded-lg p-5 mb-5"
  >

    <h3 className="text-xl font-bold mb-1">
      {s.title}
    </h3>

    <p className="text-gray-300 mb-2">
      {s.language}
    </p>

    <pre className="bg-black text-green-400 p-3 rounded overflow-x-auto mb-3">
{s.code}
    </pre>

    <button
    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
    onClick={()=>{
      navigator.clipboard.writeText(s.code)
      alert("Code copied!")
    }}
    >
    Copy Code
    </button>

    <button
    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
    onClick={()=>{
      const link = window.location.origin + "/snippets/" + s.id
      navigator.clipboard.writeText(link)
      alert("Snippet link copied!")
    }}
    >
    Share
    </button>

  </div>
))}
  </div>


)

}