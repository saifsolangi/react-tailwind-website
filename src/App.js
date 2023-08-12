import Banner from "./components/Banner";
import Expert from "./components/Expert";
import Header from "./components/Header";
import NewsLetter from "./components/NewsLetter";
import Plans from "./components/Plans";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Expert></Expert>
      <NewsLetter></NewsLetter>
      <Plans course1="Web Development" course2="Digital Marketing" course3="Designing"></Plans>
    </>
  );
}

export default App;
