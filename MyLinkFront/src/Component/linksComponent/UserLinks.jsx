import React from 'react'

export default function UserLinks({link}) {
  console.log(link);
  return (
    <div>
      <a href={link.Link}>
        {link.Title}
      </a>
    </div>
  )
}
