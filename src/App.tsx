import { RouterProvider } from "react-router-dom";
import styled from "styled-components";

import { router, routerLinks } from "router";

function App() {
  return (
    <div>
      <Nav>
        {routerLinks.map(
          ({ path }) =>
            path !== "*" && (
              <a href={path} key={path}>
                {path}
              </a>
            )
        )}
      </Nav>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid #aaa;
  a {
    color: #000;
    font-weight: 700;
  }
`;

export default App;
