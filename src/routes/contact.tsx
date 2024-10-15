import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: () => <ContactScreen />,
});

const ContactScreen = () => {
  return (
    <div>
      <h1>Contact Screen ❤❤❤</h1>
    </div>
  );
};
