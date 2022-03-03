import CardList from "../../components/CardList";
import Header from "../../components/Header";

export default function PrivateList() {
  return (
    <>
      <Header />
      <CardList kind="private" title="사설 동아리" />
    </>
  );
}
