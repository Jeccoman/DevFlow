/* eslint-disable */
"use client"
import { GlobalSearchFilters } from '@/constants/filters'
import { formUrlQuery } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const GlobalFilters = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const typeParams = searchParams.get('type')

    const [active, setActive] = useState(typeParams || '')

    const handleTypeClick = (item : string) => {
        if (active === item) {
          setActive("");
          const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "type",
            value: null,
          });
          router.push(newUrl);
        } else {
          setActive(item);
          const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "type",
            value: item.toLowerCase(),
          })
          router.push(newUrl)
        }
      };

  return (
    <div className='flex items-center gap-5 px-5'>
        <p className='text-dark400_light900 body-medium'>Type : </p>
        <div className='flex gap-3'>
            {GlobalSearchFilters.map((items) => (
                <button type='button' key={items.value} 
                className={`light-border-2 small-medium rounded-2xl px-5 py-2 capitalize dark:text-dark-800 dark:hover:text-primary-500 ${active === items.value ? 'bg-primary-500 text-light-900' : 'bg-light-700 text-dark-400 hover:text-primary-500 dark:bg-dark-500'}`}
                    onClick={() => handleTypeClick(items.value)}
                >
                    {items.name}
                
                </button>
            ))}
        </div>
    </div>
  )
}

export default GlobalFilters
