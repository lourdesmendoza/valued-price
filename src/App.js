import React, { useState } from 'react';
import styled from '@emotion/styled'; 

import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

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
		quotation: 0,
		data: {
			brand: '',
			year: '',
			plan: ''
		}
	});

	const [loader, setLoader] = useState(false);
	
	// Geet data
	const { data, quotation } = summary;

	return (
		<Content>
			<Header
				title="Insurance Quote"
				/>
				<ContentForm>
					<Form 
						setSummary={setSummary}
						setLoader={setLoader}
					/>

					{loader ?
						<Spinner
						/>
						:
						null
					}

					<Summary
						data={data}
					/>
					
					{!loader ?
						<Result
							quotation={quotation}
						/> : null
					}
					
				</ContentForm>
		</Content>
	);
}

export default App;
