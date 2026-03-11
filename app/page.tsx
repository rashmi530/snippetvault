import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-5xl font-bold mb-4 text-center">
        SnippetVault
      </h1>

      <p className="text-gray-400 text-center max-w-xl mb-10">
        Save, manage and share your code snippets easily.  
        A clean vault for developers to store useful code.
      </p>

      <div className="flex gap-4">

        <a
          href="/snippets"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Explore Snippets
        </a>

        <a
          href="/signup"
          className="border border-gray-600 hover:border-white px-6 py-3 rounded-lg transition"
        >
          Get Started
        </a>

      </div>

    </main>
  )}
