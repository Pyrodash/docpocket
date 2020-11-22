import Axios from 'axios'
import { cacheAdapterEnhancer } from 'axios-extensions'
import store from './stores'
import { API_URL } from '@env'

const adapter =
    process.env.NODE_ENV !== 'development'
        ? cacheAdapterEnhancer(Axios.defaults.adapter)
        : null

const API = Axios.create({
    baseURL: API_URL,
    headers: { 'Cache-Control': 'no-cache' },
    adapter,
})

API.interceptors.request.use((config) => {
    const token = store.authStore.token

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

API.interceptors.response.use(
    (res) => res,
    (err) => {
        const res = err.response

        if (res && res.status === 401) {
            if (store.authStore.token) {
                // Automatically log user out if a request returns unauthorized

                store.authStore.logout()
            }
        }

        return Promise.reject(err)
    }
)

export default API
