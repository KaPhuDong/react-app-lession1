import './App.css';
import { Header, Footer, LeftContent, RightContent } from '../main';

function App() {
  return (
    <div id="container">
      <Header></Header>
      <div id="content">
        <LeftContent></LeftContent>
        <RightContent></RightContent>
        <div style={{ clear: 'both' }} />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
