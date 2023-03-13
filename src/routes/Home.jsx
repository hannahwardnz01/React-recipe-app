import Favorite from "../components/Favorite";
import All from "../components/All";
import Header from "../components/Header"

function Home() {
  return (
    <div>
      <Header />
      <Favorite />
      <All />
    </div>
  );
}
export default Home;