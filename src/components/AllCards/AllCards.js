import React, { Component } from "react";

import { renderHC3 } from "./renderHC3";
import { renderHC6 } from "./renderHC6";
import { renderHC5 } from "./renderHC5";
import { renderHC9 } from "./renderHC9";
import { renderHC1 } from "./renderHC1";

export class AllCards extends Component {
	card_groups = []; //Empty Array
	constructor() {
		super();
		// console.log("Hello I am a constructor from AllCards Component");
		this.state = {
			card_groups: this.card_groups,
		};

	}

	componentDidMount() {
		fetch("https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17")
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				// console.log(res.card_groups);
				this.setState({
					card_groups: res.card_groups,
				});
			});
	}

	render() {

		// Here We are Searching our Specific Card from 'API-data' 
		// and sending it to particular file to Render it 
		// and From there By using Props , sending data to their corresponding Card
		// And After completing all work from render we are sending back all that data to here to render it in App
		if (this.state.card_groups.length >= 1) {

			var hc3Data = this.state.card_groups.map((element3) => {
				if (element3.design_type === "HC3") {
					return renderHC3(element3.cards);
				}
				return hc3Data;
			});

			var hc6Data = this.state.card_groups.map((element6) => {
				if (element6.design_type === "HC6") {
					return renderHC6(element6.cards);
				}
				return hc6Data;
			});

			var hc5Data = this.state.card_groups.map((element5) => {
				if (element5.design_type === "HC5") {
					return renderHC5(element5.cards);
				}
				return hc5Data;
			});

			var hc9Data = this.state.card_groups.map((element9) => {
				if (element9.design_type === "HC9") {
					return renderHC9({
						cards: element9.cards,
						scrollable: element9.is_scrollable,
						height: element9.height
						// height: "500px"
					});
				}
				return hc9Data;
			});

			var hc1Data = this.state.card_groups.map((element1) => {
				if (element1.design_type === "HC1") {
					return renderHC1(element1.cards);
				}
				return hc1Data;
			});

			//Feel Free to print on console to check whether everything is running smoothly or not

			// console.log("firstHC3");
			// console.log(hc3Data);
			// console.log("secondHC3");

			// console.log("firstHC6");
			// console.log(hc6Data);
			// console.log("secondHC6");

			// console.log("firstHC5");
			// console.log(hc5Data);
			// console.log("secondHC5");

			// console.log("firstHC9");
			// console.log(hc9Data);
			// console.log("secondHC9");

			// console.log("firstHC1");
			// console.log(hc1Data);
			// console.log("secondHC1");

			return (
				<div className="AllCardsContainer">
					<div className="AllCardsItem">
						{hc3Data[6]}
						{hc6Data[0]}

						{/* Find these indexes by using console */}

						<div className="row">
							{hc5Data[4]}
						</div>
						{hc5Data[5]}

						<div className="row"
							style={{
								margin: "0px 0px",
								padding: "0px 0px",
								marginLeft: "0.2rem"
							}}
						>
							{hc9Data[1]}
						</div>

						<div className="row">
							{hc1Data[2][0]}
							{hc1Data[2][1]}
						</div>
						{hc1Data[3][0]}
						{hc1Data[3][1]}
						{/* {hc1Data[3]} */}
					</div>
				</div>
			);
		}
		return <div

			style={{
				margin: "10rem 4.3rem",
				border: "1px solid black",
				borderRadius: "12px",
				padding: "2rem 2.1rem"
			}}

		>
			{/* If Data didn't Load then this will display on App */}
			Loading the data for You ! <br />
			Please wait ^=^ </div>
	}
}

export default AllCards;

