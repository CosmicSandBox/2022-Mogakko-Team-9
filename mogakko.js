import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
const Container = styled.div`
    width: 100%;
    padding-top: 350px;
    margin-left: auto;
    margin-right: auto;
`;
const Bigtitle = styled.div`
    width: 100%;
    font-weight: bold;
    font-size: 64px;
    text-align: center;
    vertical-align: middle;
`;
const Smalltitle = styled.div`
    width: 100%;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    vertical-align: middle;
    padding-top: 10px;
`;

const StyledButton = styled.button`
  padding: 20px 100px;
  border-radius: 8px;
  font-size: 1rem;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  display: flex;
  margin-top: 210px;
  font-weight: bold;
  background-color: #3C7EFF;
  color: white;
  border: none;
`;

function Home() {

    const onClick = () => {
        window.location.href="/destination"
    }
    return (
        <>
        <GlobalStyle />
        <Container>
                <Bigtitle>
                  모 각 코
                </Bigtitle>
                <Smalltitle>
                  김재우
                </Smalltitle>
        </Container>
        <StyledButton onClick={onClick}>
          화이팅!
        </StyledButton>
        </>
    )
}
export default Home;