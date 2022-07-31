import React, { Component } from 'react'
import './HC3.css';

export class HC3 extends Component {
    render() {

        let { Name, title, description, Cta, aspeeeectRatio, bgColor, imageUrl, Url1, text1, text2, ColorTitle, descriptionText1 } = this.props;

        // console.log(Cta)
        // console.log(descriptionText1)
        // console.log(descriptionText2)
        // console.log(ColorDescription)

        return (
            <div className="HC3CardContainer">
                <div className="HC3card"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundColor: bgColor,
                        aspectRatio: { aspeeeectRatio }
                    }}
                    onClick={() => window.open(Url1)}
                >
                    <div className="heading-box">
                        <h1 className="heading"
                            style={{
                                color: ColorTitle ? ColorTitle : "#000000"
                            }}
                        >
                            {title ? title : text1.concat(text2)}
                        </h1>

                    </div>

                    <div className="subtitle-box">
                        <p className="subtitle"
                            style={{
                                // color: ColorDescription[0].color
                            }}
                        >
                            {description ? description : descriptionText1}
                            {/* {description} */}
                            {/* {description ? description : descriptionText1.concat(descriptionText2)} */}
                        </p>

                    </div>

                    <div className="button-box"  >
                        <button className="action-btn"
                            style={{
                                color: Cta.text_color,
                                backgroundColor: Cta.bg_color
                            }}

                            onClick={() => window.open(Cta.url)}
                        >
                            {Cta.text ? Cta.text : Name}
                        </button>
                    </div>
                </div>
            </div >
        )
    }
}

export default HC3