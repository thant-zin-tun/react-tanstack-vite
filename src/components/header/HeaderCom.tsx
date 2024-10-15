import { Link } from "@tanstack/react-router";
import { AuthState, useAuthStore } from "../../state/feature2/auth-state";

const activeProps = {
  style: {
    color: "blue",
  },
};

const HeaderCom = () => {
  const { isAuthenticate } = useAuthStore((state: AuthState) => state);
  return (
    <div>
      <Link to="/" activeProps={activeProps}>
        Home
      </Link>
      <Link to="/about" activeProps={activeProps}>
        About Us
      </Link>
      <Link to="/contact" activeProps={activeProps}>
        Contact
      </Link>
      <Link to="/pricing" activeProps={activeProps}>
        Pricing
      </Link>
      {isAuthenticate ? (
        <Link to="/dashboard" activeProps={activeProps}>
          Dashboard
        </Link>
      ) : null}
    </div>
  );
};

export default HeaderCom;

{
  /* <Link
  to="/about"
  activeProps={activeProps}
  search={{
    name: "Thant Zin Tun",
    age: 27,
    address: "Yangon",
  }}
>
  About
</Link>; */
}
