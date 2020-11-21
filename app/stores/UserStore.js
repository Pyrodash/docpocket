import { makeAutoObservable } from 'mobx'

export class UserStore {
    id = ''
    name = ''
    avatar = ''
    birthday = ''

    constructor() {
        makeAutoObservable(this)
    }
}
