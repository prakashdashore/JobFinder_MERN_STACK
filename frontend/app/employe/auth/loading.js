"use client";

import { Spinner } from '@nextui-org/react';
import React from 'react'

const loading = () => {
  return (
    <>
    <div className='w-[100vw] h-[100vh] flex items-center justify-center bg-gradient-to-t bg-black'>
    <Spinner size="lg" />
    </div>
    </>
  )
}

export default loading