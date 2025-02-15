import Link from 'next/link'
import React from 'react'

const settingsPage = () => {
  return (
    <div>
        <h1>Settings page</h1>
        <p>Here you can adjust the application settings</p>
        ======
        <ul>
            <li>
                <Link href="/">[[ Back to home page ]]</Link>
            </li>
        </ul>
    </div>
  )
}

export default settingsPage