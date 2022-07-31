import HC1 from "../HC1/HC1"

export const renderHC1 = (HC1Cards) => {

    let result = HC1Cards.map((element) => {

        return (<HC1

            key={element.icon.image_url}
            title={element.title}

            imageUrl={element.icon.image_url}

            name={element.name}
            Url={element.url}

            aspeeeectRatio={element.icon.aspect_ratio}
            bgColor={element.bg_color}

            text1={element.formatted_title.text}

        />)
    })
    // console.log(result);
    return result
}

