import { Layout } from "components/layout";
import {
  Banner,
  Features,
  Portfolio,
  Services,
  Testimonial,
  Tools,
} from "modules/main";

function App() {
  return (
    <div className="app">
      <Layout>
        <main>
          <Banner />
          <Services />
          <Features />
          <Portfolio />
          <Tools />
          <Testimonial />
        </main>
      </Layout>
    </div>
  );
}

export default App;
