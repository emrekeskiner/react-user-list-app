import React, {useState} from 'react';

function Form() {
const [name, setName] = useState("Emre"); 
const [surname, setSurname] = useState("Keskiner"); 
const [gender, setGender] = useState("1");

  return (
    <div>
        <div>
            <div>
                İsim
            </div>
            <input placeholder='isim' value={name} 
            onChange={(event)=> setName(event.target.value)} />
            <input placeholder='soyisim' value={surname} 
             onChange={(event)=> setSurname(event.target.value)} />
            <br/>
            
            
        </div>
        <div>
          <br/>
          <div>
            <strong>Cinsiyet</strong>
          </div>
          <select value={gender} onChange={
            (event)=> setGender(event.target.value)}>
            <option value="0">Kadın</option>
            <option value="1">Erkek</option>
          </select>

        </div>

        <div>
          İsim:
            <strong>{name} {surname}</strong>
            </div>
            <div>
              Cinsiyet
              <br/>
            <strong>{gender === '1' ? "Erkek": "Kadın"}</strong>
            </div>
    </div>
  );
}

export default Form