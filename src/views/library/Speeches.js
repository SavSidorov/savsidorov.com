import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation"

const Styles = styled.div`
.speeches {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 400px));
	grid-gap: 3em;

	justify-content: center;	
}

p{
	font-size: 20px;
}
`;

export default function Speeches() {
	return (
		<Styles>
      <Navigation/>
			<p>Speeches (& lectures) that I frequently refer back to...</p>
			<br/>
			<div className="speeches">
				<iframe title="Nassim" width="400" height="225" src="https://www.youtube.com/embed/Fzmr3urk28I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<iframe title="Peter" width="400" height="225" src="https://www.youtube.com/embed/id4ywg5oemc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<iframe title="Steve" width="400" height="225" src="https://www.youtube.com/embed/UF8uR6Z6KLc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<iframe title="Karthik" width="400" height="225" src="https://www.youtube.com/embed/MfC3JdkEVgQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<iframe title="Bret" width="400" height="225" src="https://www.youtube.com/embed/PUv66718DII" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<iframe title="Christopher" width="400" height="225" src="https://www.youtube.com/embed/98LdFA-_zfA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</Styles>
	);
}
