'use client'
import { useEffect, useState } from 'react'
import api from '../services/api' // Importe le service

const BackendConnection = () => {
  const [data, setData] = useState<{ message: string } | null>(null) // 👈 Ajout du type
  const [error, setError] = useState<string | null>(null) // 👈 Correction aussi ici

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/data') // Utilisation de l'API centralisée
        setData(response.data) // Stocke les données dans le state
      } catch (err) {
        setError('Erreur lors de la récupération des données.')
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {error && <p>Erreur: {error}</p>}
      {data ? <p>{data.message}</p> : <p>Chargement...</p>}{' '}
      {/* 👈 Utilisation de data.message */}
    </div>
  )
}

export default BackendConnection
