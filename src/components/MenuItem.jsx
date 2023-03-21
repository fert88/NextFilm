import React from 'react'
import Link from 'next/link'
const MenuItem = ({mn}) => {
  return (
    <Link href={mn.url} className="dark:text-white text-slate-600 hover:border-b-2 hover:border-slate-900 hover:text-slate-900">{mn.name}</Link>
  )
}

export default MenuItem