import { observable, action } from 'mobx'
import { RootStore } from '.'

export interface IUserStore {
    id?: string
    name?: string
    avatar?: string
    birthday?: string
}

export class UserStore implements IUserStore {
    private rootStore: RootStore

    @observable id = ''
    @observable name = ''
    @observable avatar = ''
    @observable birthday = ''

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }
}
