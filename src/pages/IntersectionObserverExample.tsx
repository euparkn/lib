import ObservedItem from "components/intersectionObserver/ObservedItem";
import styled from "styled-components";

function IntersectionObserverExample() {
  return (
    <Container>
      <ObservedItem />
      <ObservedItem />
      <ObservedItem />
      <ObservedItem />
      <ObservedItem />
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  margin: 16px;
  border: 1px solid #aaa;
  overflow: auto;
`;

export default IntersectionObserverExample;
