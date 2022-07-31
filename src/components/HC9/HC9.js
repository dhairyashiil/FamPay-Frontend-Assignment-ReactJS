import React, { Component } from 'react'
import './HC9.css';

import hc9_offline from "../../imgPngSvg/hc9_offline.png";
// import hc9_offline2 from "../../imgPngSvg/hc9_offline2.jpg";

export class HC9 extends Component {
    render() {

        let { Heightt, imageUrl, Url, aspeeeectRatio } = this.props;
        // console.log(Heightt)
        return (
            <div className="col1">
                <div className="HC9Card"
                    onClick={() => window.open(Url)}
                    style={{
                        height: Heightt,
                        padding: "5px 10px"
                    }}
                >
                    <img className="bg-image"
                        src={imageUrl ? imageUrl : hc9_offline}
                        // src={imageUrl ? imageUrl : hc9_offline2}
                        alt="Placeholder"

                        style={{
                            height: Heightt,
                            aspectRatio: aspeeeectRatio
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default HC9