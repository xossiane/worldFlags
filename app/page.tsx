import Filter from "./components/organisms/Filter";
import Header from "./components/organisms/Header";
import Select from "./components/organisms/Select";


export default function Home() {
  return (
    <>
      <Header propertyTypeKey={""} />
      <Filter />
      <Select />
    
    </>
  );
}
