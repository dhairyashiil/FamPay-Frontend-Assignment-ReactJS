import HC9 from "../HC9/HC9"

export const renderHC9 = (HC9Cards) => {
    const { cards, height } = HC9Cards;
    let result = cards.map((element) => {

        return (<HC9

            key={element.bg_image.image_url}
            Name={element.name}
            Heightt={height}

            bgImage={element.bg_image}
            imageUrl={element.bg_image.image_url}
            aspeeeectRatio={element.bg_image.aspect_ratio}
            Url={element.url}

        />)
    })
    // console.log(result);
    return result
}

