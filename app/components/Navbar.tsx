import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { auth, signIn, signOut } from "@/auth"


export default async function Navbar() {
  const session = await auth()
  return (
    <header className='px-5 bg-white shadown-sm font-work-sans'>
      <nav className='flex justify-between items center'>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className='flex items-center gap-5 text-black'>
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form action={async () => {
                "use server"

                await signOut({ redirectTo: "/" })
              }}>
                <button type='submit'>Logout</button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form action={async () => {
              "use server";

              await signIn('github')
            }}>
              <button type='submit'>Login</button>
            </form>
          )}
        </div>
        <div className='text-black'>RillKan</div>
      </nav>
    </header>
  )
} 
