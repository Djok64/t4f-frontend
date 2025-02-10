'use client'

import { useEffect, useState } from 'react'

const BackendConnection = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const result = await response.json()
        setData(result.message) // Mise à jour de l'état avec la réponse JSON
      } catch (err) {
        setError('Impossible de récupérer les données.')
        console.error('Error fetching data:', err)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : data ? (
        <pre>{data}</pre>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  )
}

export default BackendConnection
