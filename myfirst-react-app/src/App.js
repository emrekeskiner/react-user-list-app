
import Users from "./components/Users";


function App() {

  return (

    <div>
      <Users />
    </div>
  
  
    );




}






/* function App() {
const [isVisible, setIsvisible] = useState(true);
return (

  <div>
    {
    isVisible && <Counter />
  }
  <button onClick={()=> setIsvisible(!isVisible)} >Göster/Gizle</button>
  </div>
  
); */



/* const user = {
  name: 'Emre Keskiner',
  city: 'Salihli',
  age: 37,
}


 return (
  <div>
    <User 
    title="Kişi" 
    data={user} 
    friends={['Hicran', 'Duru', 'Smirna']} 
    />
    
    </div>
 ); }*/


export default App;
