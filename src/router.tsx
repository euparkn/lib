import { createBrowserRouter } from "react-router-dom";

import Home from "pages/Home";
import IntersectionObserverExample from "pages/IntersectionObserverExample";
import PaginationExample from "pages/PaginationExample";
import NotFound from "pages/NotFound";
import CustomConfirmExample from "pages/CustomConfirmExample";

export const routerLinks = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/intersection-observer",
    element: <IntersectionObserverExample />,
  },
  {
    path: "/pagination",
    element: <PaginationExample />,
  },
  {
    path: "/custom-confirm",
    element: <CustomConfirmExample />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routerLinks);
