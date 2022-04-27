import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default () => {
  const { id } = useParams()
  return (
    <div>
      Tour: {id}
    </div>
  )
}
