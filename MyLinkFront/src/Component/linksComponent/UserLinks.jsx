import React from 'react'

export default function UserLinks({link,deleteHandle}) {

  console.log(link);
  return (
    <div>
      <a href={link.Link}>
        {link.Title}
      </a>
      <button onClick={()=>{deleteHandle(link)}}>delete</button>
    </div>
  )
}
