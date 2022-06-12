import React, {useState} from 'react';

function Form() {
  const [form, setForm] = useState({name:"", surname: "", gender: "0"});

  const handleChange = (e) => {
      setForm((prev) => ({...prev,[e.target.name] : e.target.value }) );
  };


  return (
    <div>
        <div>
            <div>
                İsim
            </div>
            <input placeholder='isim' name="name" value={form.name} 
            onChange={handleChange} />
            <input placeholder='soyisim' name="surname" value={form.surname} 
             onChange={handleChange} />
            <br/>
            
            
        </div>
        <div>
          <br/>
          <div>
            <strong>Cinsiyet</strong>
          </div>
          <select value={form.gender} name="gender" onChange={handleChange}>
            
            <option value="0">Erkek</option>
            <option value="1">Kadın</option>
          </select>

        </div>

        <div>
          İsim:
            <strong>{form.name} {form.surname}</strong>
            </div>
            <div>
              Cinsiyet
              <br/>
            <strong>{form.gender === '0' ? "Erkek": "Kadın"}</strong>
            </div>
    </div>
  );
}

export default Form