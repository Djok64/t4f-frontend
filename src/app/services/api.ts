import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // URL de ton backend
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Si tu utilises des cookies pour l'authentification
})

// Intercepteur pour logguer les requêtes (utile pour le debug)
api.interceptors.request.use((config) => {
  console.log(`🔄 [API Request] ${config.method?.toUpperCase()} ${config.url}`)
  return config
})

// Intercepteur pour gérer les erreurs
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('❌ [API Error]', error)
    return Promise.reject(error)
  },
)

export default api
