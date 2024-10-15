import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { AuthState } from "./state/feature2/auth-state";
import { useAuthStore } from "./state/feature2/auth-state";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  context: {
    isAuthenticate: false,
  },
});

function App() {
  const isAuthenticate = useAuthStore(
    (state: AuthState) => state.isAuthenticate
  );
  return <RouterProvider router={router} context={{ isAuthenticate }} />;
}

export default App;
