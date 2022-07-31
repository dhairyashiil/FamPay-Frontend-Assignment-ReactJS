import React, { Component } from 'react'
import './HC5.css';

import hc5_offline from "../../imgPngSvg/hc5_offline.svg";

export class HC5 extends Component {
    render() {
        let { imageUrl, Url, bgColor, aspeeeectRatio } = this.props;
        // console.log(aspeeeectRatio)
        return (
            <div className="row5">
                <div className="HC5card"
                    onClick={() => window.open(Url)}
                    style={{
                        backgroundColor: (bgColor ? bgColor : "white"),
                        borderRadius: "13px"

                    }}
                >
                    <img
                        src={imageUrl ? imageUrl : hc5_offline}
                        alt="Placeholder"
                        className="hc5cardimg"

                        style={{
                            aspectRatio: aspeeeectRatio,
                            borderRadius: "13px"
                        }}
                    />
                </div>
            </div >
        )
    }
}

export default HC5