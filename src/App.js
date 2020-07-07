import React, { useState } from 'react';
import styled from '@emotion/styled'; 

import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';

const Content = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

const ContentForm = styled.div`
	background-color: #ffffff;
	padding: 3rem;
`;


function App() {
	const [ summary, setSummary ] = useState({
		quotes: 0,
		data: {
			brand: '',
			year: '',
			plan: ''
		}
	});
	
	// Geet data
	const { data } = summary;

	return (
		<Content>
			<Header
				title="Insurance Quote"
				/>
				<ContentForm>
					<Form 
						setSummary={setSummary}
					/>

					<Summary
						data={data}/>
					
				</ContentForm>
		</Content>
	);
}

export default App;
