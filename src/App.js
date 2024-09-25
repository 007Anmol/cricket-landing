import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MultiStageForm from './components/MultiStageForm';
import CricketFooter from './components/CricketFooter';
import ImageGrid from './components/ImageGrid';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="App">
      <h1 className="text-center text-4xl font-bold mt-10">Cricket Registration</h1>
      <MultiStageForm />


       {/* ImageGrid Section */}
       <ImageGrid />


      {/* Footer Component */}
      <CricketFooter />
    </div>
    </div>
  );
}

export default App;
