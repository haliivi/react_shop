import {Footer} from './layouts/Footer'
import {Header} from './layouts/Header'
import {Shop} from './layouts/Shop'
import {ContextProvaider} from './context'

function App() {
  return (
    <>
        <Header />
            <ContextProvaider>
                <Shop />
            </ContextProvaider>
        <Footer />
    </>
  );
}

export default App;
