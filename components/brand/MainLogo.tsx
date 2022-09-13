import React, { useEffect } from "react"
import Link from "next/link";
let gsap = require("gsap/dist/gsap").gsap;
const { ScrollTrigger} = require("gsap/dist/ScrollTrigger");
interface MainLogoTypes {
  className?:string,
  size?:string,
  animate?:boolean
}

const MainLogo:React.FC<MainLogoTypes> = ({ className,size="10rem",animate = false }) =>{




    return(
        <Link href={'/'} target={'/'} >
            <svg width={size} height="100%" className={`${animate && 'opacity-0 opacityTo'} ${className}`} viewBox="0 0 378.82 60.48">
  <title>vistaverder</title>
  <g id="9bd59d26-efd5-443f-ba61-6f2cc2b09349" data-name="Layer 2">
    <g id="047ec6c2-8766-4a28-85dd-7d8ac24b7a76" data-name="Layer 1">
      <g id="a0c0685a-04b3-451f-8cd2-dffb7707bad2" data-name="Grupo 2">
        <g className="transform ">
        <path
        className="path"
          id="adabfedd-2f10-46b5-ad1b-b50fd5b9e605"
          data-name="Trazado 6"
          d="M40.76.54v1H37.17L23.59,33.22,25.73,38H20.06L3.21,1.56H0v-1H11.82v1H8.94l14,30.22L35.84,1.56H32.15v-1Z"
          fill="#405b39"
        />
        <path
        className="path"
          id="1b859774-8fcf-4fb5-acec-c13e89e752b2"
          data-name="Trazado 7"
          d="M54.61.54v1h-3V37h3v1H42.84V37h3.1V1.56h-3.1v-1Z"
          fill="#405b39"
        />
        <path
          id="064bc5e8-576b-4470-b8bd-0bfc6707036c"
          data-name="Trazado 8"
          d="M82.69,19.64q4.88,2.94,4.87,7.65a9.69,9.69,0,0,1-1.29,5.18,10.09,10.09,0,0,1-3.37,3.38,14.89,14.89,0,0,1-4.68,1.84,24.13,24.13,0,0,1-5.16.56,58.12,58.12,0,0,1-6.85-.37A21.31,21.31,0,0,1,59.69,36v2H58.4V27.82h1.34A14,14,0,0,0,62.47,32a13.64,13.64,0,0,0,3.77,2.75,17.36,17.36,0,0,0,4.55,1.5,27.36,27.36,0,0,0,4.94.46,12.16,12.16,0,0,0,2.89-.35,8.63,8.63,0,0,0,2.52-1.07A6.69,6.69,0,0,0,83,33.44a6.21,6.21,0,0,0,1-2.73c.35-2.31-.68-4.24-3.1-5.77A19.67,19.67,0,0,0,77,23.09c-1.48-.51-3-1-4.73-1.58S68.73,20.35,67,19.75a22.5,22.5,0,0,1-4.66-2.25,12.35,12.35,0,0,1-3.45-3.15,7.55,7.55,0,0,1-1.25-4.5,6.89,6.89,0,0,1,.72-3.15,9.69,9.69,0,0,1,1.87-2.57,12.75,12.75,0,0,1,2.62-1.95,13.6,13.6,0,0,1,3-1.26A25.15,25.15,0,0,1,72.74,0a29.25,29.25,0,0,1,6.45.78A25.19,25.19,0,0,1,85.31,3V.55H86.6v10.1H85.26a20.57,20.57,0,0,0-5.8-6.81A13.7,13.7,0,0,0,71,1.24,17.54,17.54,0,0,0,68,1.53a13.66,13.66,0,0,0-3.21,1,8.28,8.28,0,0,0-2.62,1.8,5,5,0,0,0-1.37,2.83q-.37,3.15,3.21,5.3a19.7,19.7,0,0,0,3.88,1.77q2.22.75,4.68,1.5,2.73.8,5.38,1.71a22.89,22.89,0,0,1,4.78,2.24"
          fill="#405b39"
        />
        <path
          id="78dd05a9-92a8-4f61-a282-cf9a0d892756"
          data-name="Trazado 9"
          d="M129.23.54v2.3a10.75,10.75,0,0,0-2.55-1.12,25,25,0,0,0-3-.7,30,30,0,0,0-3.08-.37c-.47,0-.93-.06-1.37-.08,0,0,0,0,0,0H101l0,0c-.44,0-.9,0-1.37.08A29.86,29.86,0,0,0,96.6,1a24.66,24.66,0,0,0-3,.7,10.68,10.68,0,0,0-2.54,1.12V.54H89.8V10.6h1.29a8.21,8.21,0,0,1,2-3.85,15.35,15.35,0,0,1,3.53-2.84,16.5,16.5,0,0,1,4.31-1.76,17.19,17.19,0,0,1,4.28-.59h2.14V36.92h-3.1V38h11.82V36.92H113V1.56h2.14a17.25,17.25,0,0,1,4.28.59,16.64,16.64,0,0,1,4.3,1.76,15.35,15.35,0,0,1,3.53,2.84,8.22,8.22,0,0,1,2,3.85h1.28V.54Z"
          fill="#405b39"
        />
        <path
          id="6f7971d9-3683-494c-be4e-b53a72def6c2"
          data-name="Trazado 10"
          d="M159.41,36.92,142.6.62V.51h-4.36V1.58h2.4L125.5,36.92h-2.35V38h6.1V36.92h-2.36l5.57-13.06h15.13l6.1,13.06h-3V38h11.88V36.92ZM132.88,22.79,139.73,6.9l7.38,15.89Z"
          fill="#405b39"
        />
        <path
          id="24190412-98d5-4adc-bee3-75353248d8ed"
          data-name="Trazado 11"
          d="M219,0V1h-3.64L201.58,33.15,203.75,38H198L180.91,1h-3.25V0h12V1h-2.93l14.16,30.65L214,1h-3.75V0Z"
          fill="#405b39"
        />
        <path
          id="db0e0ad5-9d6f-46e7-b823-54a111a3789b"
          data-name="Trazado 12"
          d="M219.81,38V37H223V1h-3.15V0h22.57c.87,0,1.82,0,2.85.1s2.07.19,3.12.36a20,20,0,0,1,3,.7A11.87,11.87,0,0,1,254,2.33V0h1.24V10.25H254a8.69,8.69,0,0,0-2-3.93,14.37,14.37,0,0,0-3.55-2.9,17.8,17.8,0,0,0-4.37-1.82A16.74,16.74,0,0,0,239.67,1h-11V18.12h14.05a24.8,24.8,0,0,0,3-.16,7.06,7.06,0,0,0,2.5-.73,4.47,4.47,0,0,0,1.74-1.63,5.62,5.62,0,0,0,.65-2.9h1.24V24.58h-1.24a5.86,5.86,0,0,0-.63-2.93A4.18,4.18,0,0,0,248.24,20a6.91,6.91,0,0,0-2.52-.73,25.19,25.19,0,0,0-3-.17H228.66V37h12.69a15.15,15.15,0,0,0,4.39-.65,17.54,17.54,0,0,0,4.18-1.84,15,15,0,0,0,3.47-2.93,11.1,11.1,0,0,0,2.23-3.85h1.3V38h-1.25V36q-.48.22-1.41.57a17.66,17.66,0,0,1-2.36.68,31.76,31.76,0,0,1-3.36.54,39.41,39.41,0,0,1-4.48.22Z"
          fill="#405b39"
        />
        <path
          id="d20982f8-9bc9-4120-899b-c7c71ed3ee1d"
          data-name="Trazado 13"
          d="M291.53,21.6a15.53,15.53,0,0,1-3.39,3.18,16.65,16.65,0,0,1-4.2,2L290.89,37h2.5v1h-11V37h2.22l-6.24-9.23c-1.12,0-2.18,0-3.2-.13a14.45,14.45,0,0,1-2.9-.57,8.28,8.28,0,0,1-2.55-1.33,10,10,0,0,1-2.14-2.36V37h3.15v1H258.82V37h3V1h-3V0h13.89a47.6,47.6,0,0,1,7.35.57A23.13,23.13,0,0,1,287,2.69,14,14,0,0,1,292.08,7a11.56,11.56,0,0,1,2,7.05,15.51,15.51,0,0,1-.13,2.15,9.8,9.8,0,0,1-.46,2c0,.07-.19.43-.46,1.08a11.43,11.43,0,0,1-1.5,2.39m-3.69-3.47a15.64,15.64,0,0,0,.49-4,13.89,13.89,0,0,0-1.25-6.29,10.28,10.28,0,0,0-3.41-4,14.2,14.2,0,0,0-5-2.12,29.1,29.1,0,0,0-6.1-.62h-5.16v19.1a8,8,0,0,0,3.42,5.1,11.46,11.46,0,0,0,6.08,1.52,11.9,11.9,0,0,0,5-1,10,10,0,0,0,3.85-3.26,11,11,0,0,0,1-1.6c.27-.52.5-1,.68-1.38a12.69,12.69,0,0,0,.44-1.36Z"
          fill="#405b39"
        />
        <path
          id="e6e61937-d659-484d-83c6-34474e57b005"
          data-name="Trazado 14"
          d="M295.6,38V37h3.09V1H295.6V0h18.06a38.45,38.45,0,0,1,9.79,1.27,25.42,25.42,0,0,1,8.87,4.2,18.83,18.83,0,0,1,5.48,6.13A15,15,0,0,1,339.7,19a14.59,14.59,0,0,1-1.3,6.24,17.41,17.41,0,0,1-3.5,5,21.75,21.75,0,0,1-5,3.8,27.38,27.38,0,0,1-5.83,2.45A36.33,36.33,0,0,1,313.66,38Zm18.07-1a24.69,24.69,0,0,0,7.67-1.2,19.93,19.93,0,0,0,6.49-3.5,17.26,17.26,0,0,0,4.5-5.64,18.11,18.11,0,0,0,0-15.3,17.27,17.27,0,0,0-4.53-5.62,20.27,20.27,0,0,0-6.48-3.46A24.62,24.62,0,0,0,313.67,1h-9.23V37Z"
          fill="#405b39"
        />
        <path
          id="e4ae3844-1eb2-4046-b0e1-e406fbb2a869"
          data-name="Trazado 15"
          d="M341.71,38V37h3.15V1h-3.15V0h22.57c.87,0,1.82,0,2.85.1s2.07.19,3.12.36a19.7,19.7,0,0,1,3,.7,11.87,11.87,0,0,1,2.6,1.16V0h1.25V10.25h-1.25a8.69,8.69,0,0,0-2-3.93,14.37,14.37,0,0,0-3.55-2.9A17.8,17.8,0,0,0,366,1.6,16.74,16.74,0,0,0,361.57,1h-11V18.12h14.05a24.69,24.69,0,0,0,3-.16,7.06,7.06,0,0,0,2.5-.73,4.47,4.47,0,0,0,1.74-1.63,5.52,5.52,0,0,0,.65-2.9h1.25V24.58h-1.25a5.86,5.86,0,0,0-.63-2.93,4.16,4.16,0,0,0-1.7-1.65,7,7,0,0,0-2.53-.73,25.19,25.19,0,0,0-3-.17H350.56V37h12.69a15.27,15.27,0,0,0,4.4-.65,17.47,17.47,0,0,0,4.17-1.84,15.05,15.05,0,0,0,3.48-2.93,11.08,11.08,0,0,0,2.22-3.85h1.3V38h-1.25V36q-.48.22-1.41.57a17.24,17.24,0,0,1-2.36.68,31.76,31.76,0,0,1-3.36.54A39.41,39.41,0,0,1,366,38Z"
          fill="#405b39"
        />
        </g>
        <g
        
          id="800cca1b-6843-436f-997e-13ccf2df8563"
          data-name="CENTRO COMERCIAL"
          style={{ isolation: "isolate" }}
        >
          <text
            transform="translate(102.57 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="0.24em"
            style={{ isolation: "isolate" }}
          >
            C
          </text>
          <text
            transform="translate(113.14 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="0.24em"
            style={{ isolation: "isolate" }}
          >
            E
          </text>
          <text
            transform="translate(123.12 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="0.24em"
            style={{ isolation: "isolate" }}
          >
            N
          </text>
          <text
            transform="translate(133.69 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="0.22em"
            style={{ isolation: "isolate" }}
          >
            T
          </text>
          <text
            transform="translate(143.05 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="0.24em"
            style={{ isolation: "isolate" }}
          >
            R
          </text>
          <text
            transform="translate(153.62 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="0.24em"
            style={{ isolation: "isolate" }}
          >
            O
          </text>
          <text
            transform="translate(164.81 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="0.24em"
            style={{ isolation: "isolate" }}
          >
            {" "}
          </text>
          <text
            transform="translate(170.5 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="0.23em"
            style={{ isolation: "isolate" }}
          >
            C
          </text>
          <text
            transform="translate(180.99 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="0.24em"
            style={{ isolation: "isolate" }}
          >
            OME
          </text>
          <text
            transform="translate(213.97 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="0.24em"
            style={{ isolation: "isolate" }}
          >
            R
          </text>
          <text
            transform="translate(224.52 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="0.24em"
            style={{ isolation: "isolate" }}
          >
            C
          </text>
          <text
            transform="translate(235.09 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="0.24em"
            style={{ isolation: "isolate" }}
          >
            I
          </text>
          <text
            transform="translate(240.79 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="0.18em"
            style={{ isolation: "isolate" }}
          >
            A
          </text>
          <text
            transform="translate(250.75 56.91)"
            fontSize={11}
            fill="#405b39"
            fontFamily="ArialMT, Arial"
            letterSpacing="-0.04em"
            style={{ isolation: "isolate" }}
          >
            L
          </text>
        </g>
      </g>
    </g>
  </g>
</svg>

      </Link>
    )

}

export default MainLogo
