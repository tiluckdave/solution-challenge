import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { Flex, Spinner } from "@chakra-ui/react";

export default function Container({ children }) {
    let [ address, setAddress ] = useState();
    let [ latitude, setLatitude ] = useState(null);
    let [ longitude, setLongitude ] = useState(null);

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        }

        // fetch address from latitude and longitude
        if (latitude != null && longitude != null) {
            fetch("https://api.geoapify.com/v1/geocode/reverse?lat=" + latitude + "&lon=" + longitude + "&apiKey=" + process.env.NEXT_PUBLIC_GEOAPI, { method: "GET" })
                .then((response) => response.json())
                .then((result) => {
                    setAddress(result.features[ 0 ].properties.city + ", " + result.features[ 0 ].properties.state);
                    localStorage.setItem("address", result.features[ 0 ].properties.city + ", " + result.features[ 0 ].properties.state);
                })
                .catch((error) => console.log("error", error));
        }
    }, [ longitude, latitude ]);

    if (address == null) {
        return <Flex align={'center'} justify={'center'} width="full" height={'100vh'}>
            <Spinner />
        </Flex>;
    }

    return (
        <>
            <Navbar address={address} />
            <Flex bg='gray.50' minH='100vh'>
                {children}
            </Flex>
            <Footer />
        </>
    );
}
