import React from "react"
import { inject, observer } from "mobx-react"
import { Card, CardHeader, CardBody, Row, Col, Button } from 'reactstrap';
// import UIStore from '../../../../stores/UIStore';



@inject("CandidateStore", "UserStore")
@observer
class CandidateComponent extends React.Component {

    componentWillUnmount() {
        // this.props.UserCashOutStore.clearDataForm()
    }
    componentDidMount() {
        // this.props.UserBankStore.getBanks()
    }

    render() {
        const { CandidateStore } = this.props;
        return (
            <div>

                <Row className="justify-content-center mt-30">
                    <Col lg={8}>
                        <Card>
                            <CardHeader>
                                <h4 className="mb-0">My profile</h4>
                            </CardHeader>
                            <CardBody>
                                <form onSubmit={(e) => {
                                    e.preventDefault()

                                }}>

                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label">Year's experience :</label>
                                        <Col sm={9} >
                                            <input type="text" className="form-control"
                                                disabled={!CandidateStore.isEdit}
                                                value={CandidateStore.year || ""}
                                                onChange={(e) => CandidateStore.year = e.target.value.replace(/\D/ig, "")}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label">Skill :</label>
                                        <Col sm={9} >
                                            <textarea type="text" className="form-control"
                                                disabled={!CandidateStore.isEdit}
                                                value={CandidateStore.skill || ""}
                                                onChange={(e) => CandidateStore.skill = e.target.value}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label">Address :</label>
                                        <Col sm={9} >
                                            <input type="text" className="form-control"
                                                disabled={!CandidateStore.isEdit}
                                                value={CandidateStore.address || ""}
                                                onChange={(e) => CandidateStore.address = e.target.value}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label">Birthday :</label>
                                        <Col sm={9} >
                                            <input type="text" className="form-control"
                                                disabled={!CandidateStore.isEdit}
                                                value={CandidateStore.birthday || ""}
                                                onChange={(e) => CandidateStore.birthday = e.target.value}
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label">Email :</label>
                                        <Col sm={9} >
                                            <input type="text" className="form-control"
                                                disabled={!CandidateStore.isEdit}
                                                value={CandidateStore.email || ""}
                                                onChange={(e) => CandidateStore.email = e.target.value}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label">Phone :</label>
                                        <Col sm={9} >
                                            <input type="text" className="form-control"
                                                disabled={!CandidateStore.isEdit}
                                                value={CandidateStore.phone || ""}
                                                onChange={(e) => CandidateStore.phone = e.target.value.replace(/\D/ig, "")}
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="justify-content-center">
                                        {CandidateStore.isEdit ? (
                                            <Button className="mr-20" type="submit" color="primary" >Save</Button>
                                        ) : (
                                                <Button className="mr-20" type="submit" color="primary"
                                                    onClick={() => CandidateStore.isEdit = true}
                                                >Edit</Button>
                                            )}
                                        <Button color="secondary" 
                                             onClick={() => CandidateStore.isEdit = false}
                                        >Cancel</Button>
                                    </Row>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default CandidateComponent
