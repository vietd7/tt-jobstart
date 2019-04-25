import React from "react"
import "./style.scss"


class PageGoTo extends React.Component {
    render() {
        return (
            <div className="go-to-gape-wrap">
                <span>Trang muốn đến :</span>
                <input type="number"
                    ref="pageNumber"
                />
                <div className="go-to" onClick={() => { onClick(this.refs.pageNumber.value) }}>{Lang.GO}</div>
            </div>
        )
    }
}
export default PageGoTo
