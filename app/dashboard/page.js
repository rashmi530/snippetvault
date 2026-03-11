
"use client"

import { useState,useEffect} from "react"
import { supabase } from "../../lib/supabase"

export default function Dashboard() {

  const [title,setTitle] = useState("")
  const [language,setLanguage] = useState("")
  const [code,setCode] = useState("")
  const [description,setDescription] = useState("")
  const [visibility,setVisibility] = useState("public")
  const[snippets,setSnippets]=useState([])
  const saveSnippet = async () => {

    const { data: { user } } = await supabase.auth.getUser()

    const { error } = await supabase
      .from("snippets")
      .insert([
        {
          title,
          language,
          code,
          description,
          visibility,
          user_id: user.id
        }
      ])

    if(error){
      alert(error.message)
    }else{
      alert("Snippet saved!")
      loadSnippets()
    }
  }
  const deleteSnippet = async (id) => {

  const { error } = await supabase
  .from("snippets")
  .delete()
  .eq("id", id)

  if(error){
    alert(error.message)
  }else{
    alert("Snippet deleted!")
    loadSnippets()
  }

}
const editSnippet = (snippet) => {

  setTitle(snippet.title)
  setLanguage(snippet.language)
  setCode(snippet.code)
  setDescription(snippet.description)
  setVisibility(snippet.visibility)

}
  const loadSnippets=async()=>{
    const{data:{user}}=await supabase.auth.getUser()
    const{data,error}=await supabase
    .from("snippets")
    .select("*")
    .eq("user_id",user.id)
    if(error){
      console.log(error)
    
    }
    else{
      console.log(data)
      setSnippets(data)
    }
  }
  useEffect(()=>{
    loadSnippets()
  },[])

  return (
  <main className="min-h-screen bg-gray-950 text-white p-8">

    <h1 className="text-3xl font-bold mb-8">
      Your Snippets
    </h1>

    <div className="bg-gray-900 p-6 rounded-xl mb-10">

      <h2 className="text-xl font-semibold mb-4">
        Create Snippet
      </h2>

      <div className="flex flex-col gap-4">

        <input
        placeholder="Title"
        className="p-2 rounded bg-gray-800"
        onChange={(e)=>setTitle(e.target.value)}
        />

        <input
        placeholder="Language"
        className="p-2 rounded bg-gray-800"
        onChange={(e)=>setLanguage(e.target.value)}
        />

        <textarea
        placeholder="Code"
        className="p-2 rounded bg-gray-800"
        onChange={(e)=>setCode(e.target.value)}
        />

        <input
        placeholder="Description"
        className="p-2 rounded bg-gray-800"
        onChange={(e)=>setDescription(e.target.value)}
        />

        <select
        className="p-2 rounded bg-gray-800"
        onChange={(e)=>setVisibility(e.target.value)}
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>

        <button
        onClick={saveSnippet}
        className="bg-blue-600 hover:bg-blue-700 p-2 rounded font-semibold"
        >
        Save Snippet
        </button>

      </div>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {snippets && snippets.length > 0 ? (
        snippets.map((s)=>(
          <div
          key={s.id}
          className="bg-gray-900 p-5 rounded-xl shadow-lg"
          >

            <h3 className="text-xl font-bold mb-2">
              {s.title}
            </h3>

            <p className="text-gray-400 mb-2">
              {s.language}
            </p>

            <pre className="bg-black text-green-400 p-3 rounded mb-4 overflow-x-auto text-sm">
{s.code}
            </pre>

            <div className="flex gap-3">

              <button
              onClick={()=>editSnippet(s)}
              className="bg-yellow-500 px-3 py-1 rounded text-black"
              >
              Edit
              </button>

              <button
              onClick={()=>deleteSnippet(s.id)}
              className="bg-red-600 px-3 py-1 rounded"
              >
              Delete
              </button>

            </div>

          </div>
        ))
      ) : (
        <p>No snippets yet</p>
      )}

    </div>

  </main>
)
  
}

   