import React from 'react';
import Image, {StaticImageData} from "next/image";
import "./brand-component.scss";

type Props = {
    logo: StaticImageData;
    name: string;
}


function BrandComponent({logo, name}: Props) {
    return (
        <div className={"brand"}>
            <Image src={logo} alt={name} className={"image brand-logo"}/>
            <div className="brand-label">{name}</div>
        </div>
    );
}

export default BrandComponent;