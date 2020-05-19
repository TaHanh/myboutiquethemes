import { observable, action } from 'mobx'
import getInitialData from './data'

class Store {
  @observable likesCount = 12
  @observable data = {}
  @observable isData = false

  @action updateCount() {
    this.likesCount++
  }
  @action setData(value) {
    this.data = { ...value }
  }
  @action initApp = async () => {
    if (!this.isData) {
      this.data = await getInitialData()
      this.isData = true
    }
  }
}

const storeInstance = new Store()
export default storeInstance
