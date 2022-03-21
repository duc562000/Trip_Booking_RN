import React from "react";
import DestinationDetailView from "./view";

const DestinationDetail = (props) => {
    const {title,description,home,paking,cloud,about,price,rate,country,img} = props.route.params.item
    return(
        <DestinationDetailView
            img={img}
            title={title}
            description={description}
            home={home}
            paking={paking}
            cloud={cloud}
            about={about}
            price={price}
            rate={rate}
            country={country}
        />
    );
}


export default DestinationDetail;
