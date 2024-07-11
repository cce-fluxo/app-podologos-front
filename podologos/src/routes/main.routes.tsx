import useAuth from "../context/AuthContext";
import PodologosRoutes from "./podologo.routes";
import SocialRoutes from "./social.routes";

export default function MainRoutes() {
  const { token, user } = useAuth;

  if (token && user) {
    if (user.type === "patient") {
      return <PodologosRoutes />;
    } else return <PodologosRoutes />;
  } else return <SocialRoutes></SocialRoutes>;
}
