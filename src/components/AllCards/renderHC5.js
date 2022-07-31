import HC5 from "../HC5/HC5"

export const renderHC5 = (HC5Cards) => {

    let result = HC5Cards.map((element) => {

        return (<HC5

            key={element.bg_image.image_url}
            imageUrl={element.bg_image.image_url}

            Url={element.url}
            bgColor={element.bg_color}
            aspeeeectRatio={element.bg_image.aspect_ratio}
            Name={element.name}

        />)
    })
    // console.log(result);
    return result
}

