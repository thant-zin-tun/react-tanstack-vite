import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <HomeScreen />,
});

const HomeScreen = () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
    </div>
  );
};
