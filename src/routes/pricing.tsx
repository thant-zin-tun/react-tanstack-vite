import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  component: () => <Pricing />,
});

const Pricing = () => {
  return (
    <div>
      <h1>Pricing Plans</h1>
    </div>
  );
};
