import HC3 from "../HC3/HC3"

export const renderHC3 = (HC3Cards) => {

    let result = HC3Cards.map((element) => {

        return (<HC3

            key={element.bg_image.image_url}
            Name={element.name}

            imageUrl={element.bg_image.image_url}
            Cta={element.cta[0]}
            aspeeeectRatio={element.aspect_ratio}

            bgColor={element.bg_color}
            Url1={element.url}

            title={element.title}
            text1={element.formatted_title.text}

            // This below line may Cause Error if API don't have any information in 'entities' array
            // i.e. if 'entities' array is empty
            // because if it's empty then we cannot access 0th index
            text2={element.formatted_title.entities[0].text}
            ColorTitle={element.formatted_title.entities[0].color}

            description={element.description}
            descriptionText1={element.formatted_description.text}
            descriptionText2={element.formatted_description.entities}
            ColorDescription={element.formatted_description.entities}

        />)
    })
    // console.log(result);
    return result
}

