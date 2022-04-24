/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios'
import getConfig from 'next/config'
import { TOKEN_STORAGE_KEY } from 'constants/storage-keys'

axios.defaults.baseURL = getConfig().publicRuntimeConfig.API_ENDPOINT

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const authToken = localStorage.getItem(TOKEN_STORAGE_KEY)
    // @ts-ignore
    if (authToken) config.headers.Authorization = `Bearer ${authToken}`

    return config
  },

  (error) => Promise.reject(error),
)

axios.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem(TOKEN_STORAGE_KEY)
    }

    return Promise.reject(error)
  },
)

export default axios
