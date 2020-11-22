import { makeAutoObservable, observable, runInAction } from 'mobx'
import * as SecureStore from 'expo-secure-store'

export class AuthStore {
    token = observable.box()
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        const token = this.token.get()
        
        return token && token.length > 0
    }

    async getToken() {
        this.isLoading = true

        try {
            const token = await SecureStore.getItemAsync('token')

            runInAction(() => {
                //this.token.set(token || '')
                this.token.set('')
                this.isLoading = false
            })
        } catch(err) {
            console.error(err)

            runInAction(() => {
                this.token.set('')
                this.isLoading = false
            })
        }
    }

    async setToken(token) {
        await SecureStore.setItemAsync('token', token)
        
        runInAction(() => {
            this.token.set(token)
        })
    }
}