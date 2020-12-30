import React from 'react'

export default function About() {
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
    {/* pour avoir des params (on peut mettre id aussi, à lier ac la route dans le Header en ajouter /:id ou /:name)
   <h1 className="display-4">{props.match.params.name}</h1> */}
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  )
}
