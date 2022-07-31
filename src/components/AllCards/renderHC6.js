import HC6 from "../HC6/HC6"

export const renderHC6 = (HC6Cards) => {

    let result = HC6Cards.map((element) => {

        return (<HC6

            key={element.icon.image_url}

            title={element.title}
            text1={element.formatted_title.text}
            text2={element.formatted_title.entities[0].text}
            ColorTitle={element.formatted_title.entities[0].color}

            description={element.description}
            descriptionText1={element.formatted_description.text}
            descriptionText2={element.formatted_description.entities[0].text}
            ColorDescription={element.formatted_description.entities[0].color}

            Url={element.url}
            imageUrl={element.icon.image_url}

        />)
    })
    // console.log(result);
    return result
}

