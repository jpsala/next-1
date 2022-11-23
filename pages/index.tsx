import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import  { MouseEvent } from 'react'
import { useMouseClick } from '../useBtnClick'


export default function Home() {
  const {btnClick, btnUnClick} = useMouseClick()

  return (
    <div>
      <Head>
        <title>Next 1</title>
        <meta name="description" content="Heyyyy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-5 flex flex-row items-center'>
        <div onMouseDown={btnClick} onMouseUp={btnUnClick} onMouseLeave={btnUnClick} className='btn'>Ok...</div>
          <Image height='50' width="50" src="/profile-picture.jpg" alt="Bordered avatar"
                className={'shadow shadow-md shadow-dark-50 ml-2 inline p-1  rounded-full ring-2 ring-gray-300 dark:ring-gray-500'}
                >
          </Image>
      </main>
     
    </div>
  )
}
