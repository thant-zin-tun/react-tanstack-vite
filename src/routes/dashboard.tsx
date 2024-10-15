import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: () => <DashBoard />,
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticate) {
      throw redirect({
        to: "/login",
      });
    }
  },
});

const DashBoard = () => {
  return (
    <div>
      <h1>Welcome to PHI Dashboard</h1>
    </div>
  );
};
