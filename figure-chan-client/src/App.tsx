import BaseLayout from "./layout/BaseLayout";
import ProfileLayout from "./layout/ProfileLayout";

function App(props: { page: string }) {
  switch (props.page) {
    case "base":
      return <BaseLayout />;
    case "profile":
      return <ProfileLayout />;
    default: {
      return <BaseLayout />;
    }
  }
}
export default App;
