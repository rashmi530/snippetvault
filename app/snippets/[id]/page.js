"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "../../../lib/supabase"

export default function SnippetPage(){

const { id } = useParams()

const [snippet,setSnippet] = useState(null)

const loadSnippet = async () => {

const { data } = await supabase
.from("snippets")
.select("*")
.eq("id",id)
.single()

setSnippet(data)

}

useEffect(()=>{
loadSnippet()
},[])

if(!snippet){
return <p>Loading...</p>
}

return(

<div>

<h1>{snippet.title}</h1>

<p>{snippet.language}</p>

<pre>{snippet.code}</pre>

</div>

)

}