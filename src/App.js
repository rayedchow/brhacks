import logo from './iqbin.svg';
import undraw from './undraw.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="flex pt-5 pl-5">
          <img src={logo} className="w-44" alt="IQBin" />
      </div>
      <div className="mt-16 flex w-full h-full justify-center">
        <div className="text-5xl text-[#52525b] w-[50%] leading-relaxed">
          <i>Redefining the Process of Waste Management:</i> At the <span className="text-[#059669] font-medium">Recyclable</span>, <span className="text-[#059669] font-medium">Trash</span>, and <span className="text-[#059669] font-medium">Biodegradable</span> Level
        </div>
        <img src={undraw} className="w-[30rem]" alt="landing" />
      </div>
      <div className="mt-32 mb-16 w-full flex flex-col justify-center items-center">
        <div className="text-6xl text-[#52525b] font-medium text-center">Waste Categories</div>
        <div className="mt-10 flex justify-around w-[70%]">
          <div className="bg-[#CCB494] w-60 h-44 rounded-xl flex justify-center items-center">
            <div className="text-[#6B3E2E] text-2xl font-medium">Recycling</div>
          </div>
          <div className="bg-[#D6B78D] w-60 h-44 rounded-xl flex justify-center items-center">
            <div className="text-[#6B3E2E] text-2xl font-medium">Trash</div>
          </div>
          <div className="bg-[#CCB494] w-60 h-44 rounded-xl flex justify-center items-center">
            <div className="text-[#6B3E2E] text-2xl font-medium">Biodegradable</div>
          </div>
        </div>
        <div className="text-[#52525b] text-lg w-[70%] text-center mt-5">Our system splits waste into three categories: <b>Recyclable</b>, <b>Trash</b>, and <b>Biodegradable</b> waste. We detect the waste items via camera and open the waste compartment specific to the category. Using this system, the process of dispensing waste is much more efficient for maintaining environmental health, while still keeping the process relatively quick and seemless.</div>
      </div>
    </>
  );
}

export default App;