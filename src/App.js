import './App.css';
import ProfileComponent from './profile/ProfileComponent';
import img from './img.jpg';



 

function App() {
  return (
    <div className="App">
      
      <ProfileComponent img={img} fullName ='Trabelsi Nader' bio= 'Future Web Developer' profession='Mechanical engineering'/>
      
      
    </div>
  );

}

export default App;