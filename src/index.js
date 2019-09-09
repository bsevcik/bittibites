import React from "react";
import { render } from "react-dom";
import { SvgLoader, SvgProxy } from "react-svgmt";
import Stylesheet from './components/Stylesheet';
// import boxSVG from './assets/images/blank-box7.svg';
// const svgUrl = `<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 1078 864" version="1.1" viewBox="0 0 1078 864" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><g id="Non-Print_Area"></g><g id="Die_Lines"></g><g id="Legend"></g><g id="Bleed"><line class="st0" x1="116" y1="627.7" x2="116" y2="625.4"/><line class="st0" x1="116" y1="195.7" x2="116" y2="198"/><line class="st1" x1="116" y1="198" x2="116" y2="625.4"/><line class="st1" x1="116" y1="627.7" x2="401.7" y2="627.7"/><line class="st1" x1="401.7" y1="627.7" x2="401.7" y2="195.7"/><line class="st1" x1="116" y1="195.7" x2="401.7" y2="195.7"/><line class="st1" x1="401.7" y1="195.7" x2="545.7" y2="195.7"/><line class="st1" x1="545.7" y1="195.7" x2="545.7" y2="627.7"/><line class="st1" x1="401.7" y1="627.7" x2="545.7" y2="627.7"/><line class="st1" x1="545.7" y1="627.7" x2="833.7" y2="627.7"/><line class="st1" x1="833.7" y1="627.7" x2="833.7" y2="195.7"/><line class="st1" x1="545.7" y1="195.7" x2="833.7" y2="195.7"/><line class="st1" x1="833.7" y1="195.7" x2="977.7" y2="195.7"/><line class="st0" x1="977.7" y1="195.7" x2="977.7" y2="627.7"/><line class="st1" x1="977.7" y1="627.7" x2="833.7" y2="627.7"/><g id="frontLeft"><line class="st0" x1="977.7" y1="195.7" x2="977.7" y2="69.7"/><line class="st0" x1="977.7" y1="69.7" x2="860.7" y2="69.7"/><path class="st0" d="M860.7,69.7c0,14.3,5.8,28.1,15.8,38.2c10.1,10.2,23.9,15.8,38.2,15.8"/><line class="st0" x1="923.7" y1="123.7" x2="905.7" y2="123.7"/><path class="st0" d="M905.7,123.7c-19.1,0-37.4,7.6-50.9,21.1c-13.6,13.4-21.1,31.8-21.1,50.9"/></g><g id="bottomLeft"><line class="st0" x1="761.7" y1="123.7" x2="761.7" y2="114.7"/><path class="st0" d="M761.7,114.7c0-4.9-4-9-9-9"/><line class="st0" x1="752.7" y1="105.7" x2="626.7" y2="105.7"/><path class="st0" d="M626.7,105.7c-4.9,0-9,4.1-9,9"/><line class="st0" x1="617.7" y1="114.7" x2="617.7" y2="123.7"/><line class="st0" x1="833.7" y1="195.7" x2="833.7" y2="51.7"/><line class="st0" x1="833.7" y1="51.7" x2="545.7" y2="51.7"/><line class="st0" x1="545.7" y1="51.7" x2="545.7" y2="195.7"/></g><g id="backLeft"><path class="st0" d="M545.7,195.7c0-19.1-7.6-37.4-21.1-50.9c-13.4-13.6-31.8-21.1-50.9-21.1"/><line class="st0" x1="473.7" y1="123.7" x2="455.7" y2="123.7"/><path class="st0" d="M464.7,123.7c14.3,0,28.1-5.6,38.2-15.8C513,97.8,518.7,84,518.7,69.7"/><line class="st0" x1="518.7" y1="69.7" x2="401.7" y2="69.7"/><line class="st0" x1="401.7" y1="69.7" x2="401.7" y2="195.7"/></g><g id="topLeft"<path class="st0" d="M392.7,177.7c0-14.3-5.6-28.1-15.8-38.2c-10.1-10.2-23.9-15.8-38.2-15.8"/><line class="st0" x1="338.7" y1="123.7" x2="338.1" y2="123.7"/><path class="st0" d="M338.1,123.7c-4.6,0-8.3-3.2-8.9-7.7"/><path class="st0" d="M329.2,116c-1.9-12.8-8.3-24.6-18.1-33.1s-22.4-13.2-35.4-13.2"/><path class="st0" d="M242,69.7c-13.1,0-25.7,4.7-35.5,13.3c-9.8,8.5-16.2,20.4-18,33.4"/><path class="st0" d="M188.4,116.4c-0.6,4.1-3.8,7.3-7.9,7.7"/><path class="st0" d="M180.5,124.1c-17.8,1.9-34.2,10.2-46.1,23.4c-11.9,13.3-18.5,30.5-18.5,48.2"/><path class="st0" d="M401.7,195.7c-4.9,0-9-4.1-9-9"/><line class="st0" x1="392.7" y1="186.7" x2="392.7" y2="177.7"/><line class="st0" x1="275.7" y1="69.7" x2="242" y2="69.7"/></g><g id="topFront"><line class="st0" x1="44" y1="571.4" x2="44" y2="252"/><g><line class="st0" x1="116" y1="625.4" x2="98" y2="625.4"/><path class="st0" d="M98,625.4c-14.3,0-28.1-5.6-38.2-15.8C49.6,599.5,44,585.8,44,571.4"/><path class="st0" d="M44,252c0-14.4,5.6-28.1,15.8-38.2C69.9,203.6,83.7,198,98,198"/><line class="st0" x1="98" y1="198" x2="116" y2="198"/></g></g><g id="topRight"><path class="st0" d="M116,627.7c0,17.8,6.6,34.9,18.5,48.2c11.9,13.2,28.3,21.5,46.1,23.4"/><path class="st0" d="M180.5,699.3c4.1,0.4,7.3,3.6,7.9,7.7"/><path class="st0" d="M188.4,707c1.8,13,8.2,24.8,18,33.4c9.8,8.6,22.4,13.3,35.5,13.3"/><line class="st0" x1="242" y1="753.7" x2="275.7" y2="753.7"/><path class="st0" d="M275.7,753.7c13,0,25.6-4.7,35.4-13.2s16.2-20.3,18.1-33.1"/><path class="st0" d="M329.2,707.4c0.6-4.4,4.3-7.7,8.9-7.7"/><line class="st0" x1="338.1" y1="699.7" x2="338.7" y2="699.7"/><path class="st0" d="M338.7,699.7c14.3,0,28.1-5.6,38.2-15.8c10.2-10.1,15.8-23.9,15.8-38.2"/><line class="st0" x1="392.7" y1="645.7" x2="392.7" y2="636.7"/><path class="st0" d="M392.7,636.7c0-4.9,4.1-9,9-9"/></g><g id="backRight"><line class="st0" x1="401.7" y1="627.7" x2="401.7" y2="753.7"/><line class="st0" x1="401.7" y1="753.7" x2="518.7" y2="753.7"/><path class="st0" d="M518.7,753.7c0-14.3-5.6-28.1-15.8-38.2c-10.1-10.2-23.9-15.8-38.2-15.8"/><line class="st0" x1="455.7" y1="699.7" x2="473.7" y2="699.7"/><path class="st0" d="M473.7,699.7c19.1,0,37.4-7.6,50.9-21.1c13.6-13.4,21.1-31.8,21.1-50.9"/></g><g id="bottomRight"><line class="st0" x1="545.7" y1="627.7" x2="545.7" y2="771.7"/><line class="st0" x1="545.7" y1="771.7" x2="833.7" y2="771.7"/><line class="st0" x1="833.7" y1="771.7" x2="833.7" y2="627.7"/><line class="st0" x1="617.7" y1="699.7" x2="617.7" y2="708.7"/><path class="st0" d="M617.7,708.7c0,4.9,4.1,9,9,9"/><line class="st0" x1="626.7" y1="717.7" x2="752.7" y2="717.7"/><path class="st0" d="M752.7,717.7c5,0,9-4.1,9-9"/><line class="st0" x1="761.7" y1="708.7" x2="761.7" y2="699.7"/></g><g id="frontRight"><path class="st0" d="M833.7,627.7c0,19.1,7.6,37.4,21.1,50.9c13.4,13.6,31.8,21.1,50.9,21.1"/><line class="st0" x1="905.7" y1="699.7" x2="923.7" y2="699.7"/><path class="st0" d="M914.7,699.7c-14.3,0-28.1,5.6-38.2,15.8c-10.1,10.1-15.8,23.9-15.8,38.2"/><line class="st0" x1="860.7" y1="753.7" x2="977.7" y2="753.7"/><line class="st0" x1="977.7" y1="753.7" x2="977.7" y2="627.7"/></g><g id="text"><text transform="matrix(0 -1 1 0 458.4194 418.098)" class="st2 st3 st4">SIDE</text><text transform="matrix(0 -1 1 0 469.2194 437.3578)" class="st2 st3 st4">Printable Area:</text><text transform="matrix(0 -1 1 0 480.0194 420.5482)" class="st2 st3 st4">6&quot; x 2&quot;</text><text transform="matrix(0 1 -1 0 272.7422 384.076)" class="st2 st3 st4">TOP LID</text><text transform="matrix(0 1 -1 0 261.9414 371.816)" class="st2 st3 st4">Printable Area:</text><text transform="matrix(0 1 -1 0 251.1426 388.626)" class="st2 st3 st4">6&quot; x 4&quot;</text><text transform="matrix(0 1 -1 0 920.1836 388.2976)" class="st2 st3 st4">FRONT</text><text transform="matrix(0 1 -1 0 909.3828 374.0276)" class="st2 st3 st4">Printable Area:</text><text transform="matrix(0 1 -1 0 898.584 390.8476)" class="st2 st3 st4">6&quot; x 2&quot;</text><text transform="matrix(0 -1 1 0 694.521 437.2045)" class="st2 st3 st4">Bottom of Box</text></g></g><g id="Your_Art_Layer"></g></svg>`;
const boxSVG = `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="fullBox" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1078 864" style="enable-background:new 0 0 1078 864;" xml:space="preserve">
<g id="box">
	<path id="frontRight" class="st0" d="M977.7,627.7v126h-117c0.3-4.3,2-26.8,19-41.2c2.5-2.1,8.8-7.5,18.4-10.2
		c7.3-2.1,18.2-2.4,18.4-2.4c3.7,0.1,4.6,0,4.6,0c0-0.2-25.4,3.4-48.1-7.9c-2.5-1.3-10.5-5.5-18.3-13.3
		c-18.2-18.5-20.6-42.4-21.1-50.9L977.7,627.7L977.7,627.7z"/>
	<rect id="bottomLeft" x="545.7" y="51.7" class="st0" width="288" height="144"/>
	<rect id="bottom" x="545.7" y="195.7" class="st0" width="288" height="432"/>
	<rect id="front" x="833.7" y="195.7" class="st0" width="144" height="432"/>
	<rect id="bottomRight" x="545.7" y="627.7" class="st0" width="288" height="144"/>
	<path id="frontLeft" class="st0" d="M977.7,195.7v-126h-117c0.3,4.3,2,26.8,19,41.2c2.5,2.1,8.8,7.5,18.4,10.2
		c7.3,2.1,18.2,2.4,18.4,2.4c3.7-0.1,4.6,0,4.6,0c0,0.2-25.4-3.4-48.1,7.9c-2.5,1.3-10.5,5.5-18.3,13.3
		c-18.2,18.5-20.6,42.4-21.1,50.9L977.7,195.7L977.7,195.7z"/>
	<path id="backRight" class="st0" d="M401.7,627.7v126h117c-0.3-4.3-2-26.8-19-41.2c-2.5-2.1-8.8-7.5-18.4-10.2
		c-7.3-2.1-18.2-2.4-18.4-2.4c-3.7,0.1-4.6,0-4.6,0c0-0.2,25.4,3.4,48.1-7.9c2.5-1.3,10.5-5.5,18.3-13.3
		c18.2-18.5,20.6-42.4,21.1-50.9L401.7,627.7L401.7,627.7z"/>
	<rect id="back" x="401.7" y="195.7" class="st0" width="144" height="432"/>
	<path id="backLeft" class="st0" d="M401.7,195.7v-126h117c-0.3,4.3-2,26.8-19,41.2c-2.5,2.1-8.8,7.5-18.4,10.2
		c-7.3,2.1-18.2,2.4-18.4,2.4c-3.7-0.1-4.6,0-4.6,0c0,0.2,25.4-3.4,48.1,7.9c2.5,1.3,10.5,5.5,18.3,13.3
		c18.2,18.5,20.6,42.4,21.1,50.9L401.7,195.7L401.7,195.7z"/>
	<rect id="top" x="116" y="195.7" class="st0" width="285.7" height="432"/>
	<path id="topLeft" class="st0" d="M401.7,195.7l-3.5-0.6c-0.7-0.1-1.3-0.4-1.9-0.8l0,0c-1.2-0.9-3.7-3.9-3.7-5.4
		c0.1-7.4,1.4-39.8-18.8-53.7c-14.4-9.9-29-12.2-36.9-12.6c-1.9-0.1-3.5-1.5-3.9-3.3c-1.6-7.8-7-25.6-24.3-38.4
		c-19.9-14.7-39-15.7-45.3-15.2c-1,0.1-2,0.1-3,0c-7.1-0.5-33.7,0.2-54,17.2c-15.4,12.9-20,29.7-21.3,37.5c-0.3,1.9-1.9,3.3-3.7,3.5
		c-8.6,0.8-27.9,4.4-44.3,20.7c-20.6,20.5-21.2,46.2-21.2,51.1L401.7,195.7L401.7,195.7z"/>
	<path id="topFrontFlap" class="st0" d="M116,195.7c-2.6-0.4-15.7,0.6-31.2,5.5c-6.3,2-13,4.7-19.6,8.1
		C44.9,220,44.6,244,44,248.8V584c1.8,5,4.7,23.2,29.2,35.3c19.7,9.7,37.3,9.1,42.8,8.3C116,483.7,116,339.7,116,195.7z"/>
	<path id="topLeft" class="st0" d="M401.7,628.1l-3.5,0.6c-0.7,0.1-1.3,0.4-1.9,0.8l0,0c-1.2,0.9-3.7,3.9-3.7,5.4
		c0.1,7.4,1.4,39.8-18.8,53.7c-14.4,9.9-29,12.2-36.9,12.6c-1.9,0.1-3.5,1.5-3.9,3.3c-1.6,7.8-7,25.6-24.3,38.4
		c-19.9,14.7-39,15.7-45.3,15.2c-1-0.1-2-0.1-3,0c-7.1,0.5-33.7-0.2-54-17.2c-15.4-12.9-20-29.7-21.3-37.5c-0.3-1.9-1.9-3.3-3.7-3.5
		c-8.6-0.8-27.9-4.4-44.3-20.7C116.6,658.6,116,633,116,628.1H401.7z"/>
</g>
<g id="overlay">
	<text id="topOverlay" x="210" y="-350" href="#topLeft" stroke="red">asdfasdfasdfadfs
	 asdfasd;lfkja;sdlfga;l;sdjfhh
	</text>

</g>
<defs>
<text id="theText">A text that is referenced.</text>
</defs>

<text x="20" y="10">
<tref xlink:href="#theText" />
</text>
<text x="30" y="30">
<tref xlink:href="#theText" />
</text>
</svg>`;

// const svgUrl = "https://bensevcik.com/projects/wiserWay/blank-box.svg";
// const svgUrl = "https://raw.githubusercontent.com/flekschas/simple-world-map/master/world-map.svg";
// const svgUrl = "https://raw.githubusercontent.com/bsevcik/bittibites/master/src/assets/images/blank-box7.svg";
// const svgUrl = "https://raw.githubusercontent.com/bsevcik/bittibites/master/src/assets/images/originalSVG/00%20Box%20Parts-04.svg";

var cleft = 100;
var ctop = 100;
var ctrans = 'translate('+cleft+'px, '+ctop+'px)';
var css = {
 transform: ctrans
}
const App = () => (

	// const t = `translate(${x}, ${y})`

  <div>
    <Stylesheet />
    <SvgLoader svgXML={boxSVG}>
      <SvgProxy selector=".st0" fill="white" stroke="black"/>
      <SvgProxy selector="#top" fill="blue" stroke="purple"/>
	  <SvgProxy selector="#topOverlay" font-size="30px" transform={css}/>
    </SvgLoader>
    {/* <span> Please Load Something! </span> */}
    {/* <img src="assets/images/blank-box.svg" alt=""/> */}

  </div>
);

render(<App />, document.getElementById("root"));
