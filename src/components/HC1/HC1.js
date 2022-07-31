import React, { Component } from 'react'
import './HC1.css';

import HC1_offline from "../../imgPngSvg/HC1_offline.svg";

export class HC1 extends Component {
    render() {

        let { title, imageUrl, name, Url, aspeeeectRatio, bgColor, text1 } = this.props;

        // console.log(text1)

        return (
            <div className="col2">
                <div className="HC1card"
                    style={{
                        backgroundColor: bgColor ? bgColor : "rgb(251, 175, 3)",
                    }}
                    onClick={() => window.open(Url)}
                >
                    <div className="content-block2">
                        <img
                            src={imageUrl ? imageUrl : HC1_offline}
                            className="card-img"
                            alt="/svgs/hc1img.svg"

                            style={{
                                aspectRatio: aspeeeectRatio / aspeeeectRatio
                            }}
                        />
                        <div className="title-block">
                            <p
                                className="heading">
                                {title ? title : text1}
                            </p>
                            <p
                                className="sub-heading">
                                {name ? name : text1}
                            </p>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default HC1