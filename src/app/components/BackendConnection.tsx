'use client'
import { useEffect, useState } from 'react'
import { get } from '../services/api'

const BackendConnection = () => {
  const [data, setData] = useState<Record<string, any> | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get<Record<string, any>>('/data')
        setData(response)
      } catch (err) {
        setError('Erreur lors de la récupération des données.')
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {error && <p>Erreur: {error}</p>}
      {data ? <p>{data.message}</p> : <p>Chargement...</p>}
    </div>
  )
}

export default BackendConnection
