import { observable, computed, action } from "mobx"
 
class CandidateStore {
    @observable isEdit = false
    @observable year = ""
    @observable skill = ""
    @observable address = ""
    @observable birthday = ""
    @observable email = ""
    @observable phone = ""

}
export default new CandidateStore()
