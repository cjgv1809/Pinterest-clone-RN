import pins from "../../assets/data/pins";
import MasonryList from "../../components/MasonryList";

function HomeScreen() {
  return <MasonryList pins={pins} />;
}

export default HomeScreen;
