import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";



export const formStyle = css`
  width: 80vw;
  height: 85vh;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 0% 2% 2% 2%;
  margin: 4%;
`;
export const CategoryBox = styled.div`
  background-color: white;
  border: 1px solid #cdcdcd;
  border-radius: 20px;
  padding: 2%;
  height: 88%;
  & > .boxComment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6%;
    & > .control {
      width: 20rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      & > .lastPost {
        margin-right: 1%;
      }
    }
  }
`;

export const Category = styled.div`
  background-color: #f3f3f3;
  height: 90%;
  margin: 1% 0%;
  padding: 10px;
`;

export const CaregorySub = styled.div`
  background-color: white;
  padding: 3%;
  border-radius: 20px;
  height: 80%;
`;

export const CategoryPlus = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5%;
  font-size: 1.2em;
  border: 1px solid lightgrey;
  width: 100%;
  background-color: white;
`;

export const SaveChange = styled.button`
  background-color: #ffffff;
  padding: 1%;
  border: 1px solid #aeaeae;
  border-radius: 10px;
  margin: 0.6% 2%;
  font-size: large;
`;
export const CategoryMoveBox = styled.div`
  height: 82%;
  border: 1px solid lightgrey;
  overflow: scroll;
  & > .moveBtn {
    background-color: white;
  }
`;
export const explanInput = css`
  width: 20em;
  font-size: 1.2em;
  outline: none;
  border: none;
  background-color: #e1f1ff;
`;
