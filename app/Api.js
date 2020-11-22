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
    const token = store.authStore.token.get()

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
            if (store.authStore.token.get()) {
                // Automatically log user out if a request returns unauthorized

                store.authStore.logout()
            }
        }

        return Promise.reject(err)
    }
)

API.login = async (email, password) => {
    let status = false
    let code

    try {
        const res = await API.post('/auth/login', { email, password })
        
        if (res.status === 200) {
            status = true
            code = 200

            store.authStore.setToken(res.data.token)
        }
    } catch(err) {
        //console.error(err)

        if (err.response) {
            code = err.response.status
        } else {
            code = 500
        }
    }

    return { status, code }
}

export default API
