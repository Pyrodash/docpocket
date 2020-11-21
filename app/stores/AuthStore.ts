import { action, computed, observable, runInAction } from 'mobx'
import { task, Task } from 'mobx-task'
import * as SecureStore from 'expo-secure-store'

interface IAuthStore {
    token?: string
}

export class AuthStore implements IAuthStore {
    @observable token = ''
    @observable isLoading = false

    @computed
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