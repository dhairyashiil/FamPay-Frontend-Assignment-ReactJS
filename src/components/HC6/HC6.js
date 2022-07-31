import React, { Component } from 'react'
import './HC6.css';

import shape_square from "../../imgPngSvg/shape_square.png";

export class HC6 extends Component {
    render() {

        let { title, Url, imageUrl, text1, text2, ColorTitle, description, descriptionText1, descriptionText2, ColorDescription } = this.props;

        // console.log(text1)
        // console.log(text2)
        // console.log(ColorTitle)

        return (

            <div className="HC6card" onClick={() => window.open(Url)}>
                <div className="content-block1">
                    <img
                        src={imageUrl ? imageUrl : shape_square}
                        className="card-img"
                        alt="card-img"
                    />
                    <p className="content1"
                    >
                        <div className="titleContent"
                            style={{
                                color: ColorTitle ? ColorTitle : "#000000"
                            }}
                        >
                            {title ? title : text1.concat(text2)}
                            {/* {text1.concat(text2) ? text1.concat(text2) : title} */}
                        </div>
                        <br />
                        <div className="descriptionContent"
                            style={{
                                color: ColorDescription ? ColorDescription : "#000000"
                            }}
                        >
                            {description ? description : descriptionText1.concat(descriptionText2)}
                        </div>
                    </p>
                </div>
                <div className="arrowClass" >
                    <img src="/svgs/rightArrow.svg" className="arrow" alt="arrow" />
                </div>
            </div>
        )
    }
}

export default HC6