import './App.css';
import PictureSelector from '../components/PictureSelector';
import MainContainer from '../components/MainContainer';

export default function App() {
  return (
    <div className="App flex-row">
      <PictureSelector side={"left"} />
      <MainContainer />
      <PictureSelector side={"right"} />
    </div>
  );
}



