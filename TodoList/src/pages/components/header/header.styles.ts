import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 24px;

  background-color: #8257e5;
`;

export const Title = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 700px;
  font-size: 42px;

  color: #ffff;

  line-height: 51px;
`;

export const User = styled.div`
    display: flex;
    height: 100px;
    width: 100px;

    img {
      display: flex;
      border-radius:50%;
    }
`;

/*export const Letter = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 700px;
  font-size: 42px;

  color: #111;

  line-height: 51px;
`;*/
