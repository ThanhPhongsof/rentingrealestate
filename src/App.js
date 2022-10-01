import { Layout } from "components/layout";
import {
  Banner,
  CTA,
  Features,
  Portfolio,
  Services,
  Testimonial,
  Tools,
} from "modules/main";

import "./modules/main/styles/index.scss";

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
          <CTA />
          <Testimonial />
        </main>
      </Layout>
    </div>
  );
}

export default App;
