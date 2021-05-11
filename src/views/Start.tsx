import styled from 'styled-components';
import {Link} from 'react-router-dom';
const Div=styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `
const Button=styled.button`
    background: #f76515;
  @media (max-width: 500px){
    font-size: 32px;
  }
    font-size: 48px;
    color: white;
    padding: 8px;
    top: 50vh;
    left: 50vw;
    border: none;
`

function Start() {
  return (
    <Div>
      <Link to="/weather">
        <Button>
          start App
        </Button>
      </Link>
    </Div>
  );
}

export default Start;