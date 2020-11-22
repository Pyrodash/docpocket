import { makeAutoObservable } from 'mobx'
import { AuthStore } from './AuthStore'
import { UserStore } from './UserStore'

class LoadingState {
    visible = false
    text
    style

    constructor() {
        this.resetStyle()
        makeAutoObservable(this)
    }

    show(text) {
        if (text) {
            this.text = text
        }

        this.visible = true
    }

    hide() {
        this.visible = false
        this.resetStyle()
    }

    resetStyle() {
        this.style = { color: '#fff' }
    }
}

export class RootStore {
    constructor() {
        this.authStore = new AuthStore()
        this.userStore = new UserStore(this)
        this.loading = new LoadingState()
    }
}

export default new RootStore()