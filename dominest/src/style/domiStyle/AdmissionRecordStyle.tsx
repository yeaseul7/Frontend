import styled from "@emotion/styled";

export const FloorTable = styled.table`
  background-color: #e8e8e8;
  width: 90%;
  height: 18rem;
  border-radius: 10px;
  margin: 5px auto;
  overflow: scroll;
  & > tr > td {
    text-align: center;
    font-size: 1.2rem;
  }
  & > tr > th {
    text-align: center;
    font-size: 1.2rem;
  }
`;
