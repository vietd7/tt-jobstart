import React from "react"
import { inject, observer } from "mobx-react"
import { Card, CardHeader, CardBody, Row, Col, Button } from 'reactstrap';
// import UIStore from '../../../../stores/UIStore';



@inject("EmployersStore", "UserStore")
@observer
class EmployersComponent extends React.Component {

    componentWillUnmount() {
        // this.props.UserCashOutStore.clearDataForm()
    }
    componentDidMount() {
        // this.props.UserBankStore.getBanks()
    }

    render() {
        const { EmployersStore } = this.props;
        return (
            <div>

                <Row className="justify-content-center mt-30">
                    <Col lg={8}>
                        <Card>
                            <CardHeader>
                                <h4 className="mb-0">Post new job</h4>
                            </CardHeader>
                            <CardBody>
                                <form onSubmit={(e) => {
                                    e.preventDefault()

                                }}>

                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label">Job title</label>
                                        <Col sm={9} >
                                            <input type="text" className="form-control"
                                                value={EmployersStore.title || ""}
                                                onChange={(e) => EmployersStore.title = e.target.value}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label">Company :</label>
                                        <Col sm={9} >
                                            <input type="text" className="form-control"
                                                value={EmployersStore.company || ""}
                                                onChange={(e) => EmployersStore.company = e.target.value}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label">Salary :</label>
                                        <Col sm={9} >
                                            <input type="text" className="form-control"
                                                value={EmployersStore.salary || ""}
                                                onChange={(e) => EmployersStore.salary = e.target.value}
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label">Birthday :</label>
                                        <Col sm={9} >
                                            <input type="text" className="form-control"
                                                disabled={!EmployersStore.isEdit}
                                                value={EmployersStore.birthday || ""}
                                                onChange={(e) => EmployersStore.birthday = e.target.value}
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label">Email :</label>
                                        <Col sm={9} >
                                            <input type="text" className="form-control"
                                                disabled={!EmployersStore.isEdit}
                                                value={EmployersStore.email || ""}
                                                onChange={(e) => EmployersStore.email = e.target.value}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label">Phone :</label>
                                        <Col sm={9} >
                                            <input type="text" className="form-control"
                                                disabled={!EmployersStore.isEdit}
                                                value={EmployersStore.phone || ""}
                                                onChange={(e) => EmployersStore.phone = e.target.value.replace(/\D/ig, "")}
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="justify-content-center">

                                        <Button className="mr-20" type="submit" color="primary"

                                        >Post</Button>

                                        <Button color="secondary"

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
export default EmployersComponent
