import { makeAutoObservable, runInAction } from 'mobx'
import * as SecureStore from 'expo-secure-store'

export class AuthStore {
    token = ''
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        return this.token && this.token.length > 0
    }

    async getToken() {
        this.isLoading = true

        try {
            const token = await SecureStore.getItemAsync('token')

            runInAction(() => {
                this.token = token || ''
                this.isLoading = false
            })
        } catch(err) {
            console.error(err)

            runInAction(() => {
                this.token = ''
                this.isLoading = false
            })
        }
    }
}