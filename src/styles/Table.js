// @vendors
import styled from 'styled-components'

// @utils
import { COLORS } from 'utils/constants'

const Table = styled.table`
  width: 100%;
  background-color: #1c1c1c;
  border: 0.5px solid #474747;
  border-collapse: collapse;
  font-size: 12px;
  font-weight: 100;
  font-weight: bold;

  th {
    padding: 10px;
    border-bottom: 0.5px solid #474747;
    border-right: 0.5px solid #474747;
  }

  td {
    cursor: pointer;
    text-align: center;
    border: 1px solid #474747;
  }
`

const TbodyStyled = styled.tbody`
  :hover {
    transition: 0.5s;
    color: white;
    background-color: #141414;
  }
`

const TdStyled = styled.td`
  color: ${(props) => (props.positive ? COLORS.green : COLORS.red)};
`

export { Table, TdStyled, TbodyStyled }
