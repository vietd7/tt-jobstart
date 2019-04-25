
import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';



class CardCommon extends React.Component {
    render() {
        // console.log("/....", this.props.UIStore.alertVisiable);
        const { color, icon, title, value } = this.props;
        return (

            <Col xl={4} lg={4} md={4} className="mb-30" >
                <Card className="card-statistics h-100">
                    <CardBody>
                        <div className="clearfix">
                            <div className="float-left">
                                <span className={color || ""}>
                                    <i className={icon || ""} aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="float-right text-right">
                                <p className="card-text text-dark" style={{ fontSize: "18px" }}>{title || ""}</p>
                                <h4>{value}</h4>
                            </div>
                        </div>
                       
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default CardCommon;