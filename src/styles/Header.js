// @vendors
import styled from 'styled-components'

const Header = styled.header`
  color: gray;
  padding: 10px;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: space-evenly;
  background-color: #1c1c1c;
  border-bottom: 1px solid #474747;
`

const Logo = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 20px;
  }
`

const Search = styled.div`
  width: 70%;

  input {
    width: 80%;
    color: white;
    border: none;
    padding: 10px;
    margin-left: 5px;
    border-radius: 8px;
    margin-right: 10px;
    border: 1px solid black;
    background-color: #262525;
  }

  input:focus {
    outline: none;
    transition: 0.4s;
    border: 1px solid white;
  }
`

export { Header, Logo, Search }
