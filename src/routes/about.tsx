import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutScreen,
});

function AboutScreen() {
  return (
    <div>
      <h1>About Screen</h1>
    </div>
  );
}

// this params type
// http://localhost:3000/about?name=Thant%20Zin%20Tun&age=27&address=Yangon

// const { name, address, age } = useSearch({ strict: false });
// validateSearch: (search: Record<string, unknown>) => {
//   return {
//     name: search.name as string,
//     age: search.age as number,
//     address: search.address as string,
//   };
// },
