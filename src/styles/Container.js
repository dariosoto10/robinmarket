// @vendors
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`

const LineGraphContainer = styled.div`
  display: flex;
  justify-content: center;
`

const LineGraph = styled.div`
  width: ${(props) => props.width || '100%'};
`

const FeedsContainer = styled.div`
  flex: 0.3;
  text-align: center;

  ul {
    height: 500px;
    overflow-y: scroll;
    list-style-type: none;
  }

  li {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;

    :hover {
      cursor: pointer;
      transition: 0.4s;
      border: 1px solid white;
    }
  }
`

const StatsContainer = styled.div`
  flex: 0.7;
  margin-right: 10px;
`

const SidebarContainer = styled.div`
  flex: 0.3;
  background-color: #1c1c1c;
  border: 0.5px solid #474747;
  padding: 10px;
`

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 500px;
  align-items: center;
  justify-content: center;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export {
  MainContainer,
  FeedsContainer,
  StatsContainer,
  LineGraphContainer,
  SidebarContainer,
  SpinnerContainer,
  LineGraph,
}
