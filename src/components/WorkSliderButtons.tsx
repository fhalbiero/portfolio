"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

type WorkSliderButtonsProps = {
    conteinerStyles: string;
    buttonStyles: string;
    iconStyles: string;
}

export default function WorkSliderButtons({ 
    conteinerStyles, 
    buttonStyles, 
    iconStyles 
}: WorkSliderButtonsProps) {
    const swiper = useSwiper();

    return (
        <div className={conteinerStyles}>
            <button 
                className={buttonStyles}
                onClick={() => swiper.slidePrev()}
            >
                <PiCaretLeftBold className={iconStyles} />
            </button>
            <button 
                className={buttonStyles}
                onClick={() => swiper.slideNext()}
            >
                <PiCaretRightBold className={iconStyles} />
            </button>
        </div>
    )
}
