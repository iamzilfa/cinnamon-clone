import Together from "../components/sections/homepage/together";
import Layout from "../components/layout/layout";
import Header from "../components/sections/homepage/header";
import Price from "../components/sections/homepage/price";
import Services from "../components/sections/homepage/services";
import AgileTeam from "../components/sections/homepage/agile";
import Position from "../components/sections/homepage/position";
import College from "../components/sections/homepage/college";
import Department from "../components/sections/homepage/department";
import Consistent from "../components/sections/homepage/consistent";
import Topic from "../components/sections/homepage/topic";

export default function Home() {
  return (
    <>
      <Layout>
        <main className="pt-20 overflow-hidden">
          <Header />

          <Price />

          <Services />

          <AgileTeam />

          <Consistent />

          <Department />

          <College />

          <Position />

          <Topic />

          <Together />
        </main>
      </Layout>
    </>
  );
}
