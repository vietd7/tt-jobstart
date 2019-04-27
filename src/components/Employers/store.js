import { observable, computed, action } from "mobx"
 
class EmployersStore {
    @observable isEdit = false
    @observable title = ""
    @observable salary = ""
    @observable company = ""
    @observable birthday = ""
    @observable email = ""
    @observable phone = ""

}
export default new EmployersStore()
