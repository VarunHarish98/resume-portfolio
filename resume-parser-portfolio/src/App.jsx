import {
  Header,
  SignUpForm,
  SignInForm,
  Upload,
  ErrorPage,
  Landing,
  Template,
} from "./components/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <SignInForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/upload",
    element: <Upload />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/template",
    element: <Template />,
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return (
    <div className="p-3 bg-[#f9fbff]">
      <Header />
      <div className="bg-primary">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
