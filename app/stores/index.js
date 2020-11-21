import { AuthStore } from './AuthStore'
import { UserStore } from './UserStore'

export class RootStore {
    constructor() {
        this.authStore = new AuthStore()
        this.userStore = new UserStore(this)
    }
}