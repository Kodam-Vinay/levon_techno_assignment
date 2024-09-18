import GreenLight from "./GreenLight";
import RedLight from "./RedLight";
import YellowLight from "./YellowLight";

export default function MainTrafficLight({
  props,
  showRedLight,
  showGreenLight,
  showYellowLight,
}) {
  return (
    <svg id="svg2" width={800} height={700} viewBox="0 0 2560 2556" {...props}>
      <defs id="defs6" />
      <g id="g8" transform="matrix(1.3333333,0,0,-1.3333333,0,2556)">
        <g id="g10" transform="scale(0.1)">
          <path
            d="M 19170,0 H 0 V 19170 H 19170 V 0"
            style={{
              fill: "#47baeb",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path12"
          />
          <path
            d="m 17464.8,12386.4 c 0,-413.5 -335.2,-748.7 -748.7,-748.7 -413.5,0 -748.7,335.2 -748.7,748.7 0,413.5 335.2,748.7 748.7,748.7 413.5,0 748.7,-335.2 748.7,-748.7"
            style={{
              fill: "#e6ae74",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path14"
          />
          <path
            d="m 6546.98,12812.1 h 1232.37 c -32.44,121.1 -139.71,218.4 -278.9,255.9 -39.7,147 -173.96,255.3 -333.57,255.3 -190.86,0 -345.59,-154.8 -345.59,-345.6 0,-1.4 0.08,-2.8 0.08,-4.2 -138.01,-16.5 -246.6,-80.4 -274.39,-161.4"
            style={{
              fill: "#c9ebfc",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path16"
          />
          <path
            d="m 17289.9,13837.5 h 1232.4 c -32.5,121.1 -139.7,218.4 -278.9,255.9 -39.7,147 -174,255.3 -333.6,255.3 -190.9,0 -345.6,-154.8 -345.6,-345.6 0,-1.4 0.1,-2.8 0.1,-4.2 -138,-16.5 -246.6,-80.4 -274.4,-161.4"
            style={{
              fill: "#c9ebfc",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path18"
          />
          <path
            d="M 258.063,13890.2 H 1490.43 c -32.43,121.1 -139.7,218.5 -278.89,255.9 -39.7,147 -173.97,255.3 -333.571,255.3 -190.867,0 -345.59,-154.8 -345.59,-345.6 0,-1.4 0.078,-2.8 0.078,-4.2 -138.008,-16.5 -246.602,-80.4 -274.394,-161.4"
            style={{
              fill: "#c9ebfc",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path20"
          />
          <path
            d="m 10618.5,11537.1 c -39.7,147 -174,255.3 -333.6,255.3 -190.8,0 -345.55,-154.8 -345.55,-345.6 0,-1.4 0.07,-2.8 0.07,-4.2 -160.54,-19.2 -281.38,-102.5 -281.38,-202.4 0,-58.6 41.77,-111.5 108.73,-149.1 -4.15,-14.1 -6.43,-28.6 -6.43,-43.6 0,-106.5 110.64,-192.8 247.16,-192.8 87.2,0 163.8,35.2 207.8,88.4 73.5,-54.9 170.2,-88.4 276.4,-88.4 229.6,0 415.9,156.5 415.9,349.5 0,155.8 -121.4,287.8 -289.1,332.9"
            style={{
              fill: "#c9ebfc",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path22"
          />
          <path
            d="m 4423.88,11339.4 c -70.44,260.9 -308.69,453 -591.86,453 -338.67,0 -613.18,-274.6 -613.18,-613.2 0,-2.5 0.15,-4.9 0.15,-7.4 -284.87,-34 -499.25,-181.9 -499.25,-359.1 0,-104 74.1,-197.9 192.91,-264.6 -7.42,-24.9 -11.42,-50.7 -11.42,-77.4 0,-188.8 196.39,-342 438.6,-342 154.65,0 290.55,62.5 368.63,156.9 130.37,-97.5 302.07,-156.9 490.33,-156.9 407.56,0 737.96,277.7 737.96,620.1 0,276.5 -215.37,510.6 -512.87,590.6"
            style={{
              fill: "#c9ebfc",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path24"
          />
          <path
            d="m 14858.9,11194.4 h 2080.9 c 13.8,47.4 21.3,96.8 21.3,147.7 0,276.5 -215.4,510.6 -512.9,590.6 -70.4,260.9 -308.7,452.9 -591.9,452.9 -338.6,0 -613.1,-274.5 -613.1,-613.2 0,-2.4 0.1,-4.9 0.1,-7.3 -284.9,-34.1 -499.2,-181.9 -499.2,-359.1 0,-78.8 42.6,-151.8 114.8,-211.6"
            style={{
              fill: "#c9ebfc",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path26"
          />
          <path
            d="m 16963.6,7665 h -242 v 267.3 h 242 z m -315,1163.5 h -242 v 267.2 h 242 z m -642.3,-303.4 h -242.1 v 267.2 h 242.1 z m -121,-1104.3 h -242 v 267.3 h 242 z m -732.5,1407.7 h -171.7 v 267.2 h 171.7 z m -13,-1389.1 h -158.7 v 781.8 h 158.7 z m -607.5,878.8 h -118.1 v 212.7 h 118.1 z m -353.1,777.5 h -314 v 169.71 h 314 z m -471,1255.7 h 314 v -169.8 h -314 z m -201.5,-918.6 h -314 v 169.73 h 314 z m -1399.7,748.8 h -153.7 v 169.8 h 153.7 z m -230.6,908.6 h 153.7 v -169.7 h -153.7 z M 11733.1,9981 h -63.9 v -735.58 h -286 v 935.38 h 349.9 z m 0,-1172 h -192.9 v 140 h 192.9 z m -624.4,-490.8 h -162.2 v 1862.6 h 162.2 z m -609.8,1718.1 h -98.4 v 140 h 98.4 z m 0,-609.56 h -31.8 v 140.05 h 31.8 z M 10467.1,8809 H 10334 v 140 h 133.1 z M 9873.85,7255.5 h -16.97 v 120 h 16.97 z m -665.94,21.6 h -98.22 v 196.8 h 98.22 z m -383.06,2819.7 h -153.72 v 169.7 h 153.72 z m 0,-579.13 h -153.72 v 169.73 h 153.72 z m -361.7,-717.07 h -153.72 v 27.9 h 153.72 z M 8291.99,7713.8 h -129.7 v 169.7 h 129.7 z m -206.55,1596.69 h 153.72 V 9140.8 h -153.72 z m 0,1040.91 h 153.72 v -169.8 h -153.72 z m -326.89,-994.65 h -133.08 v 140.02 h 133.08 z m 0,-477.75 h -133.08 v 140.1 h 133.08 z m -1440.31,723.53 h -153.72 v 169.74 h 153.72 z m -153.72,-357.11 h -48.27 v -19.8 H 6010.8 v 169.74 h 153.72 z M 6022.3,8224.4 h -88.36 v 169.7 h 88.36 z m -199.14,1378.13 h -153.72 v 169.74 h 153.72 z m 0,-943.83 h -130.81 v 169.8 h 130.81 z M 5541.08,8949 h -72.79 v 140.1 h 72.79 z m -381.36,0 h -133.08 v 140.1 h 133.08 z m 0,-778.6 h -107.19 v 140 h 107.19 z M 4915.5,8616 h -63.02 v 77.9 h 63.02 z m 0,-171.2 h -63.02 v 77.9 h 63.02 z m 0,-171.3 h -63.02 v 77.9 h 63.02 z m 0,-171.3 h -63.02 v 78 h 63.02 z m 0,-171.2 h -63.02 v 77.9 h 63.02 z m 0,-171.3 h -63.02 v 77.9 h 63.02 z m 0,-171.3 h -63.02 v 77.9 h 63.02 z m 0,-171.2 h -63.02 v 77.9 h 63.02 z M 4656.76,8616 h -0.06 v 77.9 h 0.06 z m 0,-171.2 h -0.06 v 77.9 h 0.06 z m 0,-171.3 h -0.06 v 77.9 h 0.06 z m 0,-171.3 h -0.06 v 78 h 0.06 z m 0,-171.2 h -0.06 v 77.9 h 0.06 z m 0,-171.3 h -0.06 v 77.9 h 0.06 z m 0,-171.3 h -0.06 v 77.9 h 0.06 z m 0,-171.2 h -0.06 v 77.9 h 0.06 z m -232.94,718 h -5 v 64.3 h 5 z m 0,-141.3 h -5 v 64.3 h 5 z m 0,-141.3 h -5 v 64.3 h 5 z m 0,-141.3 h -5 v 64.3 h 5 z m 0,-141.3 h -5 v 64.3 h 5 z m 0,-141.3 h -5 v 64.3 h 5 z m 0,-141.3 h -5 v 64.3 h 5 z m -196.63,1471.5 h -99.47 v 109.8 h 99.47 z m 0,-559.5 h -77.38 v 0.1 h 77.38 z m 0,-488.1 h -77.38 v 38.6 h 77.38 z m -221.55,1292.2 h -99.46 v 109.8 h 99.46 z m 0,-559.5 h -61.78 v 109.9 h 61.78 z m 0,-559.3 h -61.78 v 109.8 h 61.78 z m 0,-559.5 h -61.78 v 109.9 h 61.78 z m -221.53,1922.89 h -99.47 v 109.83 h 99.47 z m 0,-559.39 h -98.59 v 109.8 h 98.59 z m -221.54,804.01 h -99.46 v 109.82 h 99.46 z m 0,-1037.91 h -62.56 v 28.9 h 62.56 z m -184.5,201.8 h -69.86 v 90.6 h 69.86 z m 0,-461.5 h -69.86 v 90.6 h 69.86 z m 0,-461.5 h -69.86 v 90.6 h 69.86 z m 0,-461.5 h -69.86 v 90.6 h 69.86 z m -175.55,1586.3 h -86.11 v 52.4 h 86.11 z m 0,-394.1 h -86.11 v 23.2 h 86.11 z m 0,-528.9 h -86.11 v 90.6 h 86.11 z m -257.35,818.5 h -142.16 v 156.9 h 142.16 z m 0,-289.6 h -142.16 v 157 h 142.16 z m -50.15,-215.4 h -92.01 v 82.8 h 92.01 z m 0,-238.9 h -92.01 v 32.2 h 92.01 z m 0,-124.8 h -92.01 v 15.4 h 92.01 z m 0,-289.5 h -92.01 v 66.1 h 92.01 z m 0,-289.6 h -92.01 v 116.8 h 92.01 z m -227.04,942.8 H 2544.9 v 129.5 h 123.08 z m 0,-238.9 H 2544.9 v 129.5 h 123.08 z m 0,-238.8 H 2544.9 v 129.4 h 123.08 z m 0,-238.9 H 2544.9 v 129.5 h 123.08 z m 0,-238.9 H 2544.9 v 129.5 h 123.08 z m -5.3,-238.9 H 2544.9 V 7184 h 117.78 z M 17903,6671 v 587.7 h -116.6 v 513.9 H 17167 v 2804.3 h -406.9 V 9257.92 h -1058.5 v 405.3 h -619.5 v -405.3 h -101 v 494.95 h -352.3 V 8664.7 h -214.6 v 2188.7 h -1072.5 v -891.6 h -330.4 v 1905.7 h -317 V 8318.2 h -96.5 V 9981 h -159.4 v 1362.4 h -705.3 v -973.5 h -349.9 v 447.7 h -274.5 v -447.7 h -162.2 v 913.5 h 58.7 c 64.9,0 117.6,58.2 117.6,129.8 v 84.9 c 0,71.7 -52.7,129.8 -117.6,129.8 h -72.3 c 0,132.3 -97.2,239.6 -217,239.6 -119.9,0 -217,-107.3 -217,-239.6 h -72.3 c -65,0 -117.6,-58.1 -117.6,-129.8 v -84.9 c 0,-71.6 52.6,-129.8 117.6,-129.8 h 72.3 v -898.2 h -222.4 v -803.1 h -325.37 v -156 h 325.37 V 8318.2 H 9847.85 V 9422.66 H 9440.97 V 8378.4 h -233.06 v -488.9 h -98.22 v 2844.1 H 7919.17 v -851.46 h -573.63 v 79.66 h -417.58 v -314.5 h -108.5 v -164.74 h -142.45 v -224.64 h 142.45 V 7644.2 h -7.04 v -385.5 h -233.64 v 1406 h 127.39 v 185.4 H 6578.78 V 8986 h -101 v 259.42 h -39.43 v 716.38 h -161.54 l 51.98,219 h -678.15 v -219 h -109.56 v -535.7 h -72.79 v 78.93 H 5242.24 V 9426.1 H 5010.36 V 9245.42 H 4915.5 V 8886.5 H 4602.49 V 7258.7 h -109.98 v 1099.6 h -73.69 v 862.29 h -298.39 v 531.54 H 3378.07 V 9072.4 h -335.29 v -84 h -315.35 v -546 H 2479.47 V 7432.5 H 1648.75 V 6623.8 H 1019.76 V 5964.9 H 2423.4 v -25.7 h 13194.9 v 15 h 1933.3 v -12.1 H 19200 V 6671 h -1297"
            style={{
              fill: "#3c96bd",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path28"
          />
          <path
            d="m 1208.12,5800.9 h -69.9 v 1966.9 h 69.9 V 5800.9"
            style={{
              fill: "#3485a8",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path30"
          />
          <path
            d="M 2176.6,7518.2 H 109.828 V 8546.6 H 2176.6 V 7518.2"
            style={{
              fill: "#3c96bd",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path32"
          />
          <path
            d="M 624.023,8626.5 H 374.414 v 104.8 h 249.609 v -104.8"
            style={{
              fill: "#2e7898",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path34"
          />
          <path
            d="m 529.176,8461.7 h -64.899 v 209.7 h 64.899 v -209.7"
            style={{
              fill: "#2e7898",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path36"
          />
          <path
            d="m 1902.03,8626.5 h -249.61 v 104.8 h 249.61 v -104.8"
            style={{
              fill: "#2e7898",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path38"
          />
          <path
            d="m 1807.18,8461.7 h -64.9 v 209.7 h 64.9 v -209.7"
            style={{
              fill: "#2e7898",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path40"
          />
          <path
            d="m 19080.2,7717.9 c 0,51.7 -22.4,98.1 -57.8,130.3 64.4,63.4 104.4,151.6 104.4,249.1 0,193 -156.4,349.5 -349.5,349.5 -33.6,0 -66.1,-4.9 -96.9,-13.8 0.3,5.7 0.4,11.4 0.4,17.1 0,207.7 -168.3,376.1 -376,376.1 -207.7,0 -376.1,-168.4 -376.1,-376.1 0,-34.4 4.7,-67.7 13.3,-99.4 -135.1,-43.5 -233,-170.3 -233,-320 0,-121.9 65,-228.7 162.2,-287.6 -18.5,-33.1 -29.1,-71.2 -29.1,-111.7 0,-50.1 16.1,-96.4 43.3,-134.1 -10.7,-31 -16.6,-64.3 -16.6,-98.9 0,-167.3 135.6,-302.9 302.8,-302.9 38.8,0 75.8,7.4 109.9,20.7 v -772.8 h 133.1 v 874.2 c 14.6,19.6 26.9,41 36.5,63.9 41.8,-123.6 158.6,-212.6 296.3,-212.6 172.8,0 312.8,140.1 312.8,312.8 0,70.3 -23.1,135.1 -62.1,187.3 49.3,31.2 82.1,86.2 82.1,148.9"
            style={{
              fill: "#3c96bd",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path42"
          />
          <path
            d="m 13288.4,6585.2 c -14,-5 -28.9,-9.9 -44.5,-14.6 19.6,59.9 30.3,123.7 30.3,190.1 0,217.4 -113.7,408.1 -284.8,516.2 l -7.7,28.2 c 162.3,-122.5 365.7,25.1 314.9,138.8 -42,94.1 -260.6,-4.5 -340.7,-44.5 l -146.3,535.4 c -20.2,74.2 -96.8,134.4 -171.1,134.4 h -697 -697.1 c -74.2,0 -150.8,-60.2 -171.1,-134.4 l -146.4,-535.9 c -79.2,39.7 -299.4,139.5 -341.7,45 -50.9,-114 153.8,-262.1 316.4,-137.7 l -8.1,-29.3 c -171.1,-108.1 -284.8,-298.8 -284.8,-516.2 0,-67.9 11.3,-133.1 31.7,-194.1 -20.7,5.9 -40.2,12.1 -58.2,18.6 0,0 -77.6,-66.9 31,-110 5.4,-62.1 -3.8,-239 76.7,-267.7 8,-2.9 18.1,-6.4 30.7,-10.4 v -258.6 c 0,-31 25,-56 56,-56 h 186.6 c 31,0 56,25 56,56 v 195.4 c 191.3,-27.2 479.5,-50.8 908.3,-50.8 443.8,0 741.1,25.3 936.2,53.7 v -198.3 c 0,-31 25.1,-56 56,-56 h 186.7 c 30.9,0 56,25 56,56 v 262.7 c 7.1,2.3 13.2,4.4 18.4,6.3 80.4,28.7 71.2,205.6 76.6,267.7 108.7,43.1 31,110 31,110"
            style={{
              fill: "#2b7290",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path44"
          />
          <path
            d="m 8298.11,6585.2 c -13.96,-5 -28.89,-9.9 -44.5,-14.6 19.59,59.9 30.34,123.7 30.34,190.1 0,217.4 -113.74,408.1 -284.83,516.2 l -7.7,28.2 c 162.3,-122.5 365.71,25.1 314.92,138.8 -42.05,94.1 -260.62,-4.5 -340.69,-44.5 l -146.27,535.4 c -20.28,74.2 -96.89,134.4 -171.11,134.4 H 6951.2 6254.13 c -74.23,0 -150.84,-60.2 -171.12,-134.4 l -146.4,-535.9 c -79.2,39.7 -299.43,139.5 -341.68,45 -50.93,-114 153.82,-262.1 316.35,-137.7 l -8.01,-29.3 c -171.1,-108.1 -284.82,-298.8 -284.82,-516.2 0,-67.9 11.25,-133.1 31.7,-194.1 -20.71,5.9 -40.19,12.1 -58.18,18.6 0,0 -77.68,-66.9 30.94,-110 5.46,-62.1 -3.76,-239 76.69,-267.7 8,-2.9 18.13,-6.4 30.68,-10.4 v -258.6 c 0,-31 25.08,-56 56,-56 h 186.67 c 30.93,0 55.99,25 55.99,56 v 195.4 c 191.33,-27.2 479.44,-50.8 908.26,-50.8 443.88,0 741.15,25.3 936.26,53.7 v -198.3 c 0,-31 25.06,-56 55.99,-56 h 186.67 c 30.91,0 55.99,25 55.99,56 v 262.7 c 7.11,2.3 13.21,4.4 18.37,6.3 80.44,28.7 71.23,205.6 76.68,267.7 108.63,43.1 30.95,110 30.95,110"
            style={{
              fill: "#2b7290",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path46"
          />
          <path
            d="M 4576.79,5491.1 H 25.0547 V 5819 H 4576.79 v -327.9"
            style={{
              fill: "#f2f2f2",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path48"
          />
          <path
            d="M 3385.33,5491.1 H 2846.17 V 5819 h 539.16 v -327.9"
            style={{
              fill: "#9c9ea0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path50"
          />
          <path
            d="M 2337.02,5491.1 H 1797.87 V 5819 h 539.15 v -327.9"
            style={{
              fill: "#9c9ea0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path52"
          />
          <path
            d="M 1288.72,5491.1 H 749.555 V 5819 h 539.165 v -327.9"
            style={{
              fill: "#9c9ea0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path54"
          />
          <path
            d="M 240.406,5491.1 H 29.3203 V 5819 H 240.406 v -327.9"
            style={{
              fill: "#9c9ea0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path56"
          />
          <path
            d="M 4463.65,5491.1 H 3924.49 V 5819 h 539.16 v -327.9"
            style={{
              fill: "#9c9ea0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path58"
          />
          <path
            d="M 19175.4,5491.1 H 15972.8 V 5819 h 3202.6 v -327.9"
            style={{
              fill: "#f2f2f2",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path60"
          />
          <path
            d="m 16578.5,5491.1 h -539.2 V 5819 h 539.2 v -327.9"
            style={{
              fill: "#9c9ea0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path62"
          />
          <path
            d="m 17656.8,5491.1 h -539.2 V 5819 h 539.2 v -327.9"
            style={{
              fill: "#9c9ea0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path64"
          />
          <path
            d="m 18795,5491.1 h -539.2 V 5819 h 539.2 v -327.9"
            style={{
              fill: "#9c9ea0",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path66"
          />
          <path
            d="m 3863.33,5879.1 h -219.65 v 74.9 h 219.65 v -74.9"
            style={{
              fill: "#506391",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path68"
          />
          <path
            d="m 3924.49,5839.2 h -341.97 v 57.4 h 341.97 v -57.4"
            style={{
              fill: "#506391",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path70"
          />
          <path
            d="m 3830,5952.9 h -139.78 v 4895.5 c 0,644.2 524.04,1168.2 1168.17,1168.2 h 4083.6 v -139.8 H 4858.39 C 4291.34,11876.8 3830,11415.5 3830,10848.4 V 5952.9"
            style={{
              fill: "#506391",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path72"
          />
          <path
            d="M 8941.99,10908.3 H 7164.77 v 1188.2 h 1777.22 v -1188.2"
            style={{
              fill: "#393e70",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path74"
          />
          <path
            d="M 8941.99,10908.3 H 7164.77 v 1188.2 h 1777.22 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path76"
          />
          <path
            d="M 8941.99,10908.3 H 7164.77 l 82.32,1114.3 1616.76,-4.2 78.14,-1110.1"
            style={{
              fill: "#21234b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path78"
          />
          <path
            d="M 8941.99,10908.3 H 7164.77 l 82.32,1114.3 1616.76,-4.2 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path80"
          />
          <path
            d="m 3867.37,8661.2 h -229.64 v 1530.3 h 229.64 V 8661.2"
            style={{
              fill: "#393e70",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path82"
          />
          <path
            d="m 3867.37,8661.2 h -229.64 v 1530.3 h 229.64 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path84"
          />
          <path
            d="M 4270.08,9922.58 H 3867.37 V 10049 h 402.71 v -126.42"
            style={{
              fill: "#2e315e",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path86"
          />
          <path
            d="M 4270.08,9922.58 H 3867.37 V 10049 h 402.71 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path88"
          />
          <path
            d="m 4270.08,8784.4 h -402.71 v 126.4 h 402.71 v -126.4"
            style={{
              fill: "#2e315e",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path90"
          />
          <path
            d="m 4270.08,8784.4 h -402.71 v 126.4 h 402.71 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path92"
          />
          <path
            d="m 4563.78,8558.1 h -489.23 v 1777.2 h 489.23 V 8558.1"
            style={{
              fill: "#e6e6e6",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path94"
          />
          <path
            d="M 4601.23,8603.5 H 4037.1 V 10290 h 564.13 V 8603.5"
            style={{
              fill: "#393e70",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path96"
          />
          <path
            d="M 4601.23,8603.5 H 4037.1 V 10290 h 564.13 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path98"
          />
          <path
            d="m 4525.98,9955.71 c 0,-114.22 -92.6,-186.13 -206.81,-186.13 -114.22,0 -206.82,71.91 -206.82,186.13 0,114.19 92.6,206.79 206.82,206.79 114.21,0 206.81,-92.6 206.81,-206.79"
            style={{
              fill: "#2e325b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path100"
          />
          <path
            d="m 4319.17,10054.7 c 87.42,0 163.98,-35 206.48,-87.52 -5.96,108.92 -96.11,195.32 -206.48,195.32 -110.38,0 -200.53,-86.4 -206.49,-195.32 42.5,52.52 119.06,87.52 206.49,87.52"
            style={{
              fill: "#0d0d34",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path102"
          />
          {/* light */}
          {showRedLight && <RedLight />}
          <path
            d="m 4525.98,9436.37 c 0,-114.22 -92.6,-186.12 -206.81,-186.12 -114.22,0 -206.82,71.9 -206.82,186.12 0,114.22 92.6,206.82 206.82,206.82 114.21,0 206.81,-92.6 206.81,-206.82"
            style={{
              fill: "#2e325b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path106"
          />
          <path
            d="m 4319.17,9535.38 c 87.42,0 163.98,-35.04 206.48,-87.54 -5.96,108.88 -96.11,195.35 -206.48,195.35 -110.38,0 -200.53,-86.47 -206.49,-195.35 42.5,52.5 119.06,87.54 206.49,87.54"
            style={{
              fill: "#0d0d34",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path108"
          />
          {/* light */}
          {showYellowLight && <YellowLight />}
          <path
            d="m 4525.98,8917 c 0,-114.2 -92.6,-186.1 -206.81,-186.1 -114.22,0 -206.82,71.9 -206.82,186.1 0,114.3 92.6,206.9 206.82,206.9 114.21,0 206.81,-92.6 206.81,-206.9"
            style={{
              fill: "#2e325b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path112"
          />
          <path
            d="m 4319.17,9016 c 87.42,0 163.98,-35 206.48,-87.5 -5.96,108.9 -96.11,195.4 -206.48,195.4 -110.38,0 -200.53,-86.5 -206.49,-195.4 42.5,52.5 119.06,87.5 206.49,87.5"
            style={{
              fill: "#0d0d34",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path114"
          />
          {/* light */}

          {showGreenLight && <GreenLight />}
          <path
            d="m 3254.06,9922.58 h 402.71 V 10049 h -402.71 v -126.42"
            style={{
              fill: "#2e315e",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path118"
          />
          <path
            d="m 3254.06,9922.58 h 402.71 V 10049 h -402.71 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path120"
          />
          <path
            d="m 3254.06,8784.4 h 402.71 v 126.4 h -402.71 v -126.4"
            style={{
              fill: "#2e315e",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path122"
          />
          <path
            d="m 3254.06,8784.4 h 402.71 v 126.4 h -402.71 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path124"
          />
          <path
            d="M 3145.31,9781.73 H 2949.4 l -145.37,366.37 h 341.28 v -366.37"
            style={{
              fill: "#0d0d34",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path126"
          />
          <path
            d="m 3189.61,9769.58 h -83.41 v 390.62 h 83.41 v -390.62"
            style={{
              fill: "#2e325b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path128"
          />
          <path
            d="M 3145.31,9263.55 H 2949.4 l -145.37,366.34 h 341.28 v -366.34"
            style={{
              fill: "#0d0d34",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path130"
          />
          <path
            d="m 3189.61,9251.4 h -83.41 v 390.64 h 83.41 V 9251.4"
            style={{
              fill: "#2e325b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path132"
          />
          <path
            d="M 3145.31,8747.2 H 2949.4 l -145.37,366.3 h 341.28 v -366.3"
            style={{
              fill: "#0d0d34",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path134"
          />
          <path
            d="m 3189.61,8735 h -83.41 v 390.7 h 83.41 V 8735"
            style={{
              fill: "#2e325b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path136"
          />
          <path
            d="m 3189.61,8558.1 h 276.28 v 1777.2 H 3189.61 V 8558.1"
            style={{
              fill: "#e6e6e6",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path138"
          />
          <path
            d="m 3168.46,8603.5 h 318.57 V 10290 H 3168.46 V 8603.5"
            style={{
              fill: "#393e70",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path140"
          />
          <path
            d="m 3168.46,8603.5 h 318.57 V 10290 h -318.57 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path142"
          />
          <path
            d="m 7911.64,11268.4 h 78.82 v -78.8 h -78.82 z m 0,94.6 h 78.82 v -78.8 h -78.82 z m 0,94.6 h 78.82 v -78.8 h -78.82 z m 0,378.4 h 78.82 v -78.9 h -78.82 z m -94.59,-662.2 h 78.82 v -78.8 h -78.82 z m 0,378.4 h 78.82 v -78.8 h -78.82 z m 0,283.8 h 78.82 v -78.9 h -78.82 z m -94.58,-662.2 h 78.82 v -78.8 h -78.82 z m 0,378.4 h 78.82 v -78.8 h -78.82 z m 0,283.8 h 78.82 v -78.9 h -78.82 z m -94.59,-662.2 h 78.82 v -78.8 h -78.82 z m 0,378.4 h 78.82 v -78.8 h -78.82 z m 0,283.8 h 78.82 v -78.9 h -78.82 z m -94.59,-567.6 h 78.82 v -78.8 h -78.82 z m 0,283.8 h 78.82 v -78.8 h -78.82 z m 0,94.6 h 78.82 v -78.9 h -78.82 z m 0,94.6 h 78.82 v -78.9 h -78.82 z m 0,94.6 h 78.82 v -78.9 h -78.82 v 78.9"
            style={{
              fill: "#e15d5c",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path144"
          />
          <path
            d="m 8479.15,11268.4 h 78.83 v -78.8 h -78.83 z m 0,94.6 h 78.83 v -78.8 h -78.83 z m 0,94.6 h 78.83 v -78.8 h -78.83 z m 0,189.2 h 78.83 v -78.9 h -78.83 z m 0,94.6 h 78.83 v -78.9 h -78.83 z m -94.58,-567.6 h 78.82 v -78.8 h -78.82 z m 0,378.4 h 78.82 v -78.8 h -78.82 z m 0,283.8 h 78.82 v -78.9 h -78.82 z m -94.59,-662.2 h 78.82 v -78.8 h -78.82 z m 0,378.4 h 78.82 v -78.8 h -78.82 z m 0,283.8 h 78.82 v -78.9 h -78.82 z m -94.59,-662.2 h 78.82 v -78.8 h -78.82 z m 0,662.2 h 78.82 v -78.9 h -78.82 z m -94.58,-567.6 h 78.82 v -78.8 h -78.82 z m 0,473 h 78.82 v -78.9 h -78.82 v 78.9"
            style={{
              fill: "#e15d5c",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path146"
          />
          <path
            d="m 16417.8,5879.2 h 219.6 v 74.9 h -219.6 v -74.9"
            style={{
              fill: "#506391",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path148"
          />
          <path
            d="m 16356.6,5839.2 h 342 v 57.4 h -342 v -57.4"
            style={{
              fill: "#506391",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path150"
          />
          <path
            d="M 16451.1,10335.3 V 5953 h 139.8 v 4382.3 h -139.8"
            style={{
              fill: "#506391",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path152"
          />
          <path
            d="m 16413.8,8661.3 h 229.6 v 1530.3 h -229.6 V 8661.3"
            style={{
              fill: "#393e70",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path154"
          />
          <path
            d="m 16413.8,8661.3 h 229.6 v 1530.3 h -229.6 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path156"
          />
          <path
            d="m 16011,9922.59 h 402.8 v 126.51 H 16011 v -126.51"
            style={{
              fill: "#2e315e",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path158"
          />
          <path
            d="m 16011,9922.59 h 402.8 v 126.51 H 16011 Z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path160"
          />
          <path
            d="m 16011,8784.4 h 402.8 v 126.5 H 16011 v -126.5"
            style={{
              fill: "#2e315e",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path162"
          />
          <path
            d="m 16011,8784.4 h 402.8 v 126.5 H 16011 Z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path164"
          />
          <path
            d="m 15717.3,8558.2 h 489.3 v 1777.1 h -489.3 V 8558.2"
            style={{
              fill: "#e6e6e6",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path166"
          />
          <path
            d="M 15679.9,8603.5 H 16244 V 10290 h -564.1 V 8603.5"
            style={{
              fill: "#393e70",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path168"
          />
          <path
            d="M 15679.9,8603.5 H 16244 V 10290 h -564.1 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path170"
          />
          <path
            d="m 15650.4,9840.92 c 0,-172.11 139.5,-280.47 311.7,-280.47 172.1,0 311.6,108.36 311.6,280.47 0,172.08 -139.5,311.68 -311.6,311.68 -172.2,0 -311.7,-139.6 -311.7,-311.68"
            style={{
              fill: "#2e325b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path172"
          />
          <path
            d="m 15962.1,9990.09 c -131.8,0 -247.2,-52.79 -311.2,-131.89 9,164.1 144.9,294.4 311.2,294.4 166.3,0 302.1,-130.3 311.1,-294.4 -64.1,79.1 -179.4,131.89 -311.1,131.89"
            style={{
              fill: "#0d0d34",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path174"
          />
          <path
            d="m 15681.6,9840.92 c 0,-154.89 125.6,-280.47 280.5,-280.47 154.9,0 280.4,125.58 280.4,280.47 0,154.91 -125.5,280.48 -280.4,280.48 -154.9,0 -280.5,-125.57 -280.5,-280.48"
            style={{
              fill: "#22244c",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path176"
          />
          <path
            d="m 15681.6,9840.92 c 0,-154.89 125.6,-280.47 280.5,-280.47 154.9,0 280.4,125.58 280.4,280.47 0,154.91 -125.5,280.48 -280.4,280.48 -154.9,0 -280.5,-125.57 -280.5,-280.48 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path178"
          />
          <path
            d="m 15650.4,9060.1 c 0,-172.1 139.5,-280.5 311.7,-280.5 172.1,0 311.6,108.4 311.6,280.5 0,172.11 -139.5,311.63 -311.6,311.63 -172.2,0 -311.7,-139.52 -311.7,-311.63"
            style={{
              fill: "#2e325b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path180"
          />
          <path
            d="m 15962.1,9209.28 c -131.8,0 -247.2,-52.78 -311.2,-131.88 9,164.05 144.9,294.33 311.2,294.33 166.3,0 302.1,-130.28 311.1,-294.33 -64.1,79.1 -179.4,131.88 -311.1,131.88"
            style={{
              fill: "#0d0d34",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path182"
          />
          <path
            d="m 15681.6,9060.1 c 0,-154.9 125.6,-280.5 280.5,-280.5 154.9,0 280.4,125.6 280.4,280.5 0,154.91 -125.5,280.47 -280.4,280.47 -154.9,0 -280.5,-125.56 -280.5,-280.47"
            style={{
              fill: "#22244c",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path184"
          />
          <path
            d="m 15681.6,9060.1 c 0,-154.9 125.6,-280.5 280.5,-280.5 154.9,0 280.4,125.6 280.4,280.5 0,154.91 -125.5,280.47 -280.4,280.47 -154.9,0 -280.5,-125.56 -280.5,-280.47 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path186"
          />
          <path
            d="m 15966.1,9214.6 c 22.8,0 41.2,18.49 41.2,41.29 0,22.81 -18.4,41.28 -41.2,41.28 -22.8,0 -41.3,-18.47 -41.3,-41.28 0,-22.8 18.5,-41.29 41.3,-41.29"
            style={{
              fill: "#69947b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path188"
          />
          <path
            d="m 16069.2,9059.7 -71.9,127.05 c -3.2,5.54 -8.3,8.42 -12.2,7.35 -0.8,0.17 -1.5,0.45 -2.2,0.45 h -41.7 c -0.5,0 -1,-0.22 -1.5,-0.29 -3.9,0.52 -8.6,-2.54 -11.3,-7.98 L 15862.6,9056 c -3.2,-6.3 -2.5,-13.1 1.6,-15.2 l 16.8,-8.5 c 4.1,-2.1 10.1,1.4 13.2,7.7 l 37.5,74.1 V 9047 l -22.6,-101.9 -55.1,-87.9 c -2.8,-4.5 -1.4,-10.3 3,-13.1 l 18.2,-11.4 c 4.4,-2.8 10.3,-1.4 13.1,3 l 57.6,92 c 0.8,1.3 1.2,2.7 1.3,4.2 0.3,0.5 0.6,0.9 0.7,1.5 l 15.6,70.1 20.1,-56.8 8.9,-106.7 c 0.5,-5.3 5.1,-9.1 10.3,-8.7 l 21.4,1.8 c 5.2,0.4 9.1,5 8.7,10.3 l -9,106.7 c 0.3,1.6 0.3,3.2 -0.3,4.9 l -31.2,88.2 v 80.2 l 45.9,-81.2 c 3.5,-6.1 9.6,-9.3 13.6,-7 l 16.3,9.3 c 4,2.3 4.5,9.1 1,15.2"
            style={{
              fill: "#69947b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path190"
          />
          <path
            d="m 15999.2,10049.1 c 0,-24 -19.3,-43.3 -43.3,-43.3 -23.9,0 -43.3,19.3 -43.3,43.3 0,23.9 19.4,43.3 43.3,43.3 24,0 43.3,-19.4 43.3,-43.3"
            style={{
              fill: "#e15d5c",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path192"
          />
          <path
            d="m 15865.8,9810.25 h 25.5 v 140.33 h 7.6 v -140.33 h 114.7 v 140.33 h 7.6 v -140.33 h 24.9 c 6.5,0 11.8,5.29 11.8,11.82 v 153.61 c 0,6.53 -5.3,11.82 -11.8,11.82 h -180.3 c -6.5,0 -11.8,-5.29 -11.8,-11.82 v -153.61 c 0,-6.53 5.3,-11.82 11.8,-11.82"
            style={{
              fill: "#e15d5c",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path194"
          />
          <path
            d="m 15950.9,9632.15 c 0,-6.75 -4.5,-12.23 -10,-12.23 h -32 c -5.5,0 -10,5.48 -10,12.23 V 9839 c 0,6.75 4.5,12.23 10,12.23 h 32 c 5.5,0 10,-5.48 10,-12.23 v -206.85"
            style={{
              fill: "#e15d5c",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path196"
          />
          <path
            d="m 16014.1,9632.15 c 0,-6.75 -4.5,-12.23 -10,-12.23 h -32.1 c -5.5,0 -10,5.48 -10,12.23 V 9839 c 0,6.75 4.5,12.23 10,12.23 h 32.1 c 5.5,0 10,-5.48 10,-12.23 v -206.85"
            style={{
              fill: "#e15d5c",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path198"
          />
          <path
            d="m 17027.1,9922.59 h -402.7 v 126.51 h 402.7 v -126.51"
            style={{
              fill: "#2e315e",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path200"
          />
          <path
            d="m 17027.1,9922.59 h -402.7 v 126.51 h 402.7 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path202"
          />
          <path
            d="m 17027.1,8784.4 h -402.7 v 126.5 h 402.7 v -126.5"
            style={{
              fill: "#2e315e",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path204"
          />
          <path
            d="m 17027.1,8784.4 h -402.7 v 126.5 h 402.7 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path206"
          />
          <path
            d="m 17135.8,9781.74 h 195.9 l 145.4,366.36 h -341.3 v -366.36"
            style={{
              fill: "#0d0d34",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path208"
          />
          <path
            d="m 17091.5,9769.59 h 83.4 v 390.61 h -83.4 v -390.61"
            style={{
              fill: "#2e325b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path210"
          />
          <path
            d="m 17135.8,9263.61 h 195.9 l 145.4,366.3 h -341.3 v -366.3"
            style={{
              fill: "#0d0d34",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path212"
          />
          <path
            d="m 17091.5,9251.46 h 83.4 v 390.6 h -83.4 v -390.6"
            style={{
              fill: "#2e325b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path214"
          />
          <path
            d="m 17135.8,8747.3 h 195.9 l 145.4,366.3 h -341.3 v -366.3"
            style={{
              fill: "#0d0d34",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path216"
          />
          <path
            d="m 17091.5,8735.1 h 83.4 v 390.6 h -83.4 v -390.6"
            style={{
              fill: "#2e325b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path218"
          />
          <path
            d="m 17091.5,8558.2 h -276.3 v 1777.1 h 276.3 V 8558.2"
            style={{
              fill: "#e6e6e6",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path220"
          />
          <path
            d="m 17112.7,8603.5 h -318.6 V 10290 h 318.6 V 8603.5"
            style={{
              fill: "#393e70",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path222"
          />
          <path
            d="m 17112.7,8603.5 h -318.6 V 10290 h 318.6 z"
            style={{
              fill: "none",
              stroke: "#393e70",
              strokeWidth: 10,
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: 10,
              strokeDasharray: "none",
              strokeOpacity: 1,
            }}
            id="path224"
          />
          <path
            d="m 9202.61,5497.5 c 0,-47.5 -516.65,-86 -1153.98,-86 -637.32,0 -1153.97,38.5 -1153.97,86 0,47.5 516.65,86 1153.97,86 637.33,0 1153.98,-38.5 1153.98,-86"
            style={{
              fill: "#3f9dc6",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path226"
          />
          <path
            d="m 9247.8,7307.9 c 0,0 385.27,212.3 447.82,72.3 62.54,-140 -193.69,-322.8 -391.64,-159.8 -197.95,163 -84.43,72.7 -56.18,87.5"
            style={{
              fill: "#f2f2f2",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path228"
          />
          <path
            d="m 6863.02,7307.9 c 0,0 -385.26,212.3 -447.81,72.3 -62.56,-140 193.68,-322.8 391.63,-159.8 197.95,163 84.43,72.7 56.18,87.5"
            style={{
              fill: "#f2f2f2",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path230"
          />
          <path
            d="m 6940.29,5558.9 c 0,-37.5 -30.33,-67.8 -67.75,-67.8 h -225.83 c -37.41,0 -67.75,30.3 -67.75,67.8 v 512.6 c 0,37.4 30.34,67.8 67.75,67.8 h 225.83 c 37.42,0 67.75,-30.4 67.75,-67.8 v -512.6"
            style={{
              fill: "#3c3e3e",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path232"
          />
          <path
            d="m 9171.88,5558.9 c 0,-37.5 30.33,-67.8 67.74,-67.8 h 225.85 c 37.4,0 67.74,30.3 67.74,67.8 v 512.6 c 0,37.4 -30.34,67.8 -67.74,67.8 h -225.85 c -37.41,0 -67.74,-30.4 -67.74,-67.8 v -512.6"
            style={{
              fill: "#3c3e3e",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path234"
          />
          <path
            d="m 9498.87,6537.8 -392.42,1436.3 c -24.53,89.8 -117.22,162.6 -207.02,162.6 h -843.35 -843.34 c -89.8,0 -182.49,-72.8 -207.02,-162.6 L 6613.3,6537.8 c -24.54,-89.8 28.37,-162.6 118.17,-162.6 H 8056.08 9380.7 c 89.79,0 142.71,72.8 118.17,162.6"
            style={{
              fill: "#f2f2f2",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path236"
          />
          <path
            d="m 9432.28,6503.2 -374.32,1369.9 c -23.38,85.7 -111.8,155.1 -197.45,155.1 h -804.43 -804.41 c -85.66,0 -174.07,-69.4 -197.47,-155.1 L 6679.88,6503.2 c -23.4,-85.7 27.07,-155.1 112.72,-155.1 h 1263.48 1263.49 c 85.65,0 136.12,69.4 112.71,155.1"
            style={{
              fill: "#666666",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path238"
          />
          <path
            d="m 9668.5,6553.6 c 0,-407.8 -330.62,-738.4 -738.46,-738.4 H 7182.12 c -407.84,0 -738.46,330.6 -738.46,738.4 v 0 c 0,407.9 330.62,738.5 738.46,738.5 h 1747.92 c 407.84,0 738.46,-330.6 738.46,-738.5 v 0"
            style={{
              fill: "#f2f2f2",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path240"
          />
          <path
            d="m 8039.15,7249.2 h -806.23 c -201.73,0 -383.32,-86 -510.36,-223.2 218.61,-231.6 725.02,-394.6 1316.59,-397.7 v 620.9"
            style={{
              fill: "#c3c5c7",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path242"
          />
          <path
            d="m 8879.25,7249.2 h -806.23 v -620.9 c 591.57,3.1 1097.98,166.1 1316.6,397.7 -127.06,137.2 -308.64,223.2 -510.37,223.2"
            style={{
              fill: "#c3c5c7",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path244"
          />
          <path
            d="m 6643.42,6871 c -81.62,0 -141.72,-238.2 -101.07,-310.4 40.65,-72.3 374.88,-149.2 438.11,-99.6 63.24,49.7 -205.37,410 -337.04,410"
            style={{
              fill: "#ebd065",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path246"
          />
          <path
            d="m 9468.75,6871 c 81.62,0 141.71,-238.2 101.06,-310.4 -40.64,-72.3 -374.86,-149.2 -438.1,-99.6 -63.24,49.7 205.37,410 337.04,410"
            style={{
              fill: "#ebd065",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path248"
          />
          <path
            d="m 9685.64,6341.4 c -447.79,-162 -1637.01,-167.8 -1637.01,-167.8 0,0 -1189.21,5.8 -1637.01,167.8 0,0 -93.97,-81 37.44,-133.1 6.6,-75.2 -4.55,-289.3 92.8,-324 97.33,-34.7 451.72,-150.4 1497.29,-150.4 1045.57,0 1418.93,115.7 1516.27,150.4 97.32,34.7 86.18,248.8 92.77,324 131.43,52.1 37.45,133.1 37.45,133.1"
            style={{
              fill: "#666666",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path250"
          />
          <path
            d="m 8543.88,5815.2 h -975.59 v 169.4 h 975.59 v -169.4"
            style={{
              fill: "#cccccc",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path252"
          />
          <path
            d="m 9016.06,6221.3 -38.89,142.3 c -21.51,78.8 -102.79,142.6 -181.54,142.6 h -739.55 -739.54 c -78.75,0 -160.03,-63.8 -181.55,-142.6 l -39.27,-143.7 c 467.4,-44 952.91,-46.3 952.91,-46.3 0,0 495.62,2.4 967.43,47.7"
            style={{
              fill: "#a3a5a8",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path254"
          />
          <path
            d="m 6578.96,6037.6 v -53 l 342.08,-84.7 z"
            style={{
              fill: "#4a4c4b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path256"
          />
          <path
            d="m 9533.21,6037.6 v -53 l -342.07,-84.7 z"
            style={{
              fill: "#4a4c4b",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path258"
          />
          <path
            d="m 14655.8,5557.2 c 0,-49.2 -632.5,-89.2 -1412.7,-89.2 -780.2,0 -1412.7,40 -1412.7,89.2 0,49.3 632.5,89.3 1412.7,89.3 780.2,0 1412.7,-40 1412.7,-89.3"
            style={{
              fill: "#3f9dc6",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path260"
          />
          <path
            d="m 14424.3,9234.02 c 0,-250.92 -203.4,-454.42 -454.3,-454.42 h -1455.7 c -251,0 -454.4,203.5 -454.4,454.42 v 0 c 0,250.94 203.4,454.37 454.4,454.37 H 13970 c 250.9,0 454.3,-203.43 454.3,-454.37 v 0"
            style={{
              fill: "#a58233",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path262"
          />
          <path
            d="m 14923.2,6849.2 c 0,-275.5 -223.3,-498.9 -498.8,-498.9 h -2365 c -275.5,0 -498.8,223.4 -498.8,498.9 V 9054 c 0,275.56 223.3,498.91 498.8,498.91 h 2365 c 275.5,0 498.8,-223.35 498.8,-498.91 V 6849.2"
            style={{
              fill: "#e4b24a",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path264"
          />
          <path
            d="m 12115.4,5777.2 c 0,-158 -104.9,-286.1 -234.1,-286.1 h -104.1 c -129.3,0 -234.1,128.1 -234.1,286.1 v 508.7 c 0,158 104.8,286 234.1,286 h 104.1 c 129.2,0 234.1,-128 234.1,-286 v -508.7"
            style={{
              fill: "#323434",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path266"
          />
          <path
            d="m 14940.7,5777.2 c 0,-158 -104.9,-286.1 -234.1,-286.1 h -104.1 c -129.2,0 -234,128.1 -234,286.1 v 508.7 c 0,158 104.8,286 234,286 h 104.1 c 129.2,0 234.1,-128 234.1,-286 v -508.7"
            style={{
              fill: "#323434",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path268"
          />
          <path
            d="m 15181.8,6692.2 c 0,-229.6 -186.1,-415.7 -415.7,-415.7 h -3048.4 c -229.6,0 -415.7,186.1 -415.7,415.7 v 332.5 c 0,229.6 186.1,415.7 415.7,415.7 h 3048.4 c 229.6,0 415.7,-186.1 415.7,-415.7 v -332.5"
            style={{
              fill: "#cb9f41",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path270"
          />
          <path
            d="m 15181.8,6618.2 c 0,-229.6 -186.1,-415.7 -415.7,-415.7 h -3048.4 c -229.6,0 -415.7,186.1 -415.7,415.7 v 332.6 c 0,229.5 186.1,415.7 415.7,415.7 h 3048.4 c 229.6,0 415.7,-186.2 415.7,-415.7 v -332.6"
            style={{
              fill: "#e4b24a",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path272"
          />
          <path
            d="m 11934.7,6909.1 c 0,-137.7 -111.7,-249.4 -249.4,-249.4 -137.8,0 -249.5,111.7 -249.5,249.4 0,137.8 111.7,249.5 249.5,249.5 137.7,0 249.4,-111.7 249.4,-249.5"
            style={{
              fill: "#e2e7ea",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path274"
          />
          <path
            d="m 15047.9,6909.1 c 0,-137.7 -111.6,-249.4 -249.4,-249.4 -137.8,0 -249.4,111.7 -249.4,249.4 0,137.8 111.6,249.5 249.4,249.5 137.8,0 249.4,-111.7 249.4,-249.5"
            style={{
              fill: "#e2e7ea",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path276"
          />
          <path
            d="m 14290.4,6582.8 c 0,-232.1 -469.4,-420.3 -1048.5,-420.3 -579.1,0 -1048.5,188.2 -1048.5,420.3 0,232.2 469.4,420.4 1048.5,420.4 579.1,0 1048.5,-188.2 1048.5,-420.4"
            style={{
              fill: "#a58233",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path278"
          />
          <path
            d="m 12581.1,6909.2 c -83,-27.1 -155.4,-59 -214.5,-94.9 h 1750.6 c -59.1,35.9 -131.5,67.8 -214.4,94.9 h -1321.7"
            style={{
              fill: "#806623",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path280"
          />
          <path
            d="m 12196,6612.3 h 2091.8 c -5.6,32.8 -20.6,64.6 -44,94.8 H 12240 c -23.4,-30.2 -38.4,-62 -44,-94.8"
            style={{
              fill: "#806623",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path282"
          />
          <path
            d="m 12285.5,6410.3 h 1912.8 c 33.6,29.9 58.7,61.7 74.2,94.8 h -2061.2 c 15.5,-33.1 40.6,-64.9 74.2,-94.8"
            style={{
              fill: "#806623",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path284"
          />
          <path
            d="m 12765.5,6208.3 h 952.8 c 116.3,23.8 220.1,56.1 306.2,94.8 h -1565.2 c 86.1,-38.7 189.9,-71 306.2,-94.8"
            style={{
              fill: "#806623",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path286"
          />
          <path
            d="m 15245.4,6202.5 c 0,-124 -100.6,-224.5 -224.6,-224.5 H 11463 c -124,0 -224.6,100.5 -224.6,224.5 v 0 c 0,124.1 100.6,224.6 224.6,224.6 h 3557.8 c 124,0 224.6,-100.5 224.6,-224.6 v 0"
            style={{
              fill: "#515252",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path288"
          />
          <path
            d="m 14424.4,9552.91 h -2365 c -275.5,0 -498.8,-223.35 -498.8,-498.91 v -92.3 h 3362.6 v 92.3 c 0,275.56 -223.3,498.91 -498.8,498.91"
            style={{
              fill: "#e4b24a",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path290"
          />
          <path
            d="m 14291.9,9084.8 h -2100 v 468.11 h 2100 V 9084.8"
            style={{
              fill: "#e2e7ea",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path292"
          />
          <path
            d="m 12004,9281.92 c 0,-68.05 -55.2,-123.22 -123.2,-123.22 -68,0 -123.2,55.17 -123.2,123.22 0,68.02 55.2,123.16 123.2,123.16 68,0 123.2,-55.14 123.2,-123.16"
            style={{
              fill: "#bd4e4d",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path294"
          />
          <path
            d="m 14726.2,9281.92 c 0,-68.05 -55.2,-123.22 -123.2,-123.22 -68,0 -123.2,55.17 -123.2,123.22 0,68.02 55.2,123.16 123.2,123.16 68,0 123.2,-55.14 123.2,-123.16"
            style={{
              fill: "#bd4e4d",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path296"
          />
          <path
            d="m 13193.7,7862.3 h -1508.4 v 1099.4 h 1508.4 V 7862.3"
            style={{
              fill: "#666666",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path298"
          />
          <path
            d="m 14798.5,7862.3 h -1508.4 v 1099.4 h 1508.4 V 7862.3"
            style={{
              fill: "#666666",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path300"
          />
          <path
            d="m 13693.7,7987.4 -1035.9,-101.7 -147.1,-14.5 -300.3,-29.5 4.5,-45.9 447.4,43.9 -2.2,23 1035.8,101.7 -2.2,23"
            style={{
              fill: "#323434",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path302"
          />
          <path
            d="m 14527.9,7958.1 -1035.9,-101.7 -147.1,-14.4 -300.3,-29.5 4.5,-46 447.4,44 -2.2,22.9 1035.8,101.7 -2.2,23"
            style={{
              fill: "#323434",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path304"
          />
          <path
            d="m 15371.3,7766.5 h -323.4 v 1013.1 h 323.4 V 7766.5"
            style={{
              fill: "#323434",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path306"
          />
          <path
            d="m 15209.6,8586 h -286.4 v 98.5 h 286.4 V 8586"
            style={{
              fill: "#515252",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path308"
          />
          <path
            d="m 15209.6,7860.8 h -286.4 v 98.5 h 286.4 v -98.5"
            style={{
              fill: "#515252",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path310"
          />
          <path
            d="m 11114.9,7766.5 h 323.4 v 1013.1 h -323.4 V 7766.5"
            style={{
              fill: "#323434",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path312"
          />
          <path
            d="m 11276.6,8586 h 286.4 v 98.5 h -286.4 V 8586"
            style={{
              fill: "#515252",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path314"
          />
          <path
            d="m 11276.6,7860.8 h 286.4 v 98.5 h -286.4 v -98.5"
            style={{
              fill: "#515252",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path316"
          />
          <g id="g318" transform="scale(10)">
            <text
              xmlSpace="preserve"
              transform="matrix(1,0,0,-1,1250.22,919.832)"
              style={{
                fontVariant: "normal",
                fontWeight: "normal",
                fontSize: "31.9342px",
                fontFamily: "Ubuntu",
                InkscapeFontSpecification: "Ubuntu",
                writingMode: "lr-tb",
                fill: "#323434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none",
              }}
              id="text322"
            >
              <tspan
                x="0 16.988995 31.837616 50.072044 68.913811 87.75499 96.473022 103.84982 124.38351 142.71375"
                y={0}
                id="tspan320"
              >
                {"School Bus"}
              </tspan>
            </text>
          </g>
          <path
            d="m 13787.3,5998 h -1067.2 v 252.2 h 1067.2 V 5998"
            style={{
              fill: "#cccccc",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none",
            }}
            id="path324"
          />
        </g>
      </g>
    </svg>
  );
}
