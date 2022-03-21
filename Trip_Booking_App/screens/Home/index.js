import React from "react";
import images from "../../constants/images";
import HomeView from "./view";

const dataDestination = [
    {
        id:1,
        img:images.skiVilla,
        title:'Ski Villa',
        price:'2000',
        country:'France',
        rate:4,
        cloud:0.5,
        description:'You may want to achieve an angled gradient effect, similar like sdsdsdsdsa.',
        home:'villa',
        paking:'packing',
        cloud:'4',
        about:"By default, HeaderBackButton component is used. You can implement it and use it to override the back button styles, press props How can I customize headerLeft TabNavigator of React Navigation.Here's one of my screens headerLeftI want to re"
    },
    {
        id:2,
        img:images.climbingHills,
        title:'Climbing Hills',
        country:'New York',
        price:'1000',
        rate:5,
        cloud:0.2,
        description:'You may want to achieve an angled gradient effect, similar like sdsdsdsdsa.',
        home:'villa',
        paking:'packing',
        cloud:'4',
        about:"By default, HeaderBackButton component is used. You can implement it and use it to override the back button styles, press props How can I customize headerLeft TabNavigator of React Navigation.Here's one of my screens headerLeftI want to re"
    },
    {
        id:3,
        img:images.frozenHills,
        title:'Frozen Hills',
        price:'1500',
        country:'Log Angeles',
        rate:4.5,
        cloud:0.5,
        description:'You may want to achieve an angled gradient effect, similar like sdsdsdsdsa.',
        home:'villa',
        paking:'packing',
        cloud:'4',
        about:"By default, HeaderBackButton component is used. You can implement it and use it to override the back button styles, press props How can I customize headerLeft TabNavigator of React Navigation.Here's one of my screens headerLeftI want to re"
    },
    {
        id:4,
        img:images.beach,
        title:'Beach',
        country:'Nam Dinh City',
        price:'1500',
        rate:3.5,
        cloud:0.5,
        description:'You may want to achieve an angled gradient effect, similar like sdsdsdsdsa.',
        home:'villa',
        paking:'packing',
        cloud:'4',
        about:"By default, HeaderBackButton component is used. You can implement it and use it to override the back button styles, press props How can I customize headerLeft TabNavigator of React Navigation.Here's one of my screens headerLeftI want to re"
    }
]

const Home = (props) => {
    return(
        <HomeView 
            data={dataDestination}
        />
    );
}


export default Home;
