import React, {useState} from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  // state of quote resume
  const [ resume, updateResume ] = useState({
    quote: 0,
    data: {
      brand: '',
      year: '',
      plan: '',
    }
  });

  // state of spinner 
  const [loading, changeLoading ] = useState(false);

  // extract data
  const { quote, data } = resume;
  
  return (
    <Container>
      <Header
        title="Auto Quote"
    />
        <FormContainer>
            <Form
            updateResume={updateResume}
            changeLoading={changeLoading}
            />
            {/* if loading is true show the Spinner */}
            { loading ? <Spinner /> : null }

            <Resume data={data} />
            { /* when is not loading, show the result, if is loading, not show the result */ }
            { !loading 
            ?
            <Result quote={quote} />
            : null
          }
            
        </FormContainer>
    </Container>
  );
}

export default App;
