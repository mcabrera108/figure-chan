import AuthLayout from "./layout/AuthLayout";
import BaseLayout from "./layout/BaseLayout";
import ProfileLayout from "./layout/ProfileLayout";

function App(props: { page: string }) {
  switch (props.page) {
    case "base":
      return <BaseLayout />;
    case "profile":
      return <ProfileLayout />;
    case "auth":
      return <AuthLayout />;
    default: {
      return <BaseLayout />;
    }
  }
}
export default App;
