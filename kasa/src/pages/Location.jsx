import Header from "../components/Header";
import Footer from "../components/Footer";
import LocPresentation from "../components/LocPresentation";
import Error404 from "../components/Error404";
import { ErrorBoundary } from "../components/ErrorBoundary";

function Location() {
  return (
    <div>
      <Header />
      <ErrorBoundary errorRedirection={<Error404 />}>
        <LocPresentation />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default Location;
