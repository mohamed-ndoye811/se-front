"use client";

import React, { useEffect } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = ReactMapboxGl({
	accessToken:
		"pk.eyJ1IjoiZGlhbW9uZHkiLCJhIjoiY2x2dmNxNHFvMDVycTJrb2diZ2RjZzdkeSJ9.rFoQE1sdhIVLvWb18PpDDw",
});

export default function MapComponent() {

	return (
		<div className='map' data-lenis-prevent>
			<Mapbox
				style='mapbox://styles/mapbox/streets-v9'
				containerStyle={{
					height: "100%",
					width: "100%",
				}}
				center={[-17.2479149, 14.7284456]}
        zoom={[18]}>
				<Layer type='symbol' id='marker' layout={{ "icon-image": "marker-15" }}>
					<Feature coordinates={[-17.2479149, 14.7284456]} />
				</Layer>
			</Mapbox>
		</div>
	);
}
