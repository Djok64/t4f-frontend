import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// 🔹 Création d'une instance Axios avec une configuration globale
const api = axios.create({
  baseURL: 'http://localhost:3001/api', // URL du backend
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Active l'envoi des cookies si nécessaire (authentification)
  timeout: 10000, // Définition d'un timeout pour éviter les requêtes bloquées (10s)
})

// 🔹 Intercepteur pour logguer les requêtes (utile pour le debug)
api.interceptors.request.use((config) => {
  console.log(
    `🔄 [API Request] ${config.method?.toUpperCase()} ${config.url}`,
    config,
  )
  return config
})

// 🔹 Intercepteur pour gérer les réponses et les erreurs
api.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(
      `✅ [API Response] ${response.status} ${response.config.url}`,
      response.data,
    )
    return response.data // On retourne directement les données de la réponse
  },
  (error) => {
    console.error('❌ [API Error]', error)
    if (error.response) {
      console.error(
        `🚨 Erreur ${error.response.status}: ${error.response.data.message || error.response.statusText}`,
      )
    } else {
      console.error('🚨 Erreur réseau ou timeout')
    }
    return Promise.reject(error)
  },
)

// 🔹 Fonctions génériques pour gérer les requêtes API
export const get = async <T>(
  url: string,
  params = {},
  config?: AxiosRequestConfig,
): Promise<T> => {
  return api.get(url, { params, ...config })
}

export const post = async <T>(
  url: string,
  data = {},
  config?: AxiosRequestConfig,
): Promise<T> => {
  return api.post(url, data, config)
}

export const put = async <T>(
  url: string,
  data = {},
  config?: AxiosRequestConfig,
): Promise<T> => {
  return api.put(url, data, config)
}

export const patch = async <T>(
  url: string,
  data = {},
  config?: AxiosRequestConfig,
): Promise<T> => {
  return api.patch(url, data, config)
}

export const del = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  return api.delete(url, config)
}

// 🔹 Exporte l'instance API et les méthodes pour une utilisation plus simple
export default api
