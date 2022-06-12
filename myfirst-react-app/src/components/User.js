import React, {useState} from 'react'


function User() {
    const [user, setUser] = useState({name: "Emre", surname: "Keskiner"})

    return (
        <div>
            <h2>User</h2>
            {user.name} {user.surname}
            <br/>
            <br/>
            <div>
                <button onClick={()=> setUser((prev) => ({...prev,name: "Hicran"}))}>İsmi Değiştir</button>
                <button onClick={()=> setUser({...user,surname: "Durmuş"})}>Soyismi Değiştir</button>
            </div>
        </div>
    );

}


/* import PropTypes from 'prop-types';

function User({title, data, friends}) {
   //console.log(friends);
  return (
   <div>
    <strong>{title}</strong>
     <div>İsim: {data.name}</div>
    <div>Yaş : {data.age}</div>
    <div>Şehir: {data.city}</div>
    <h3>Ailesi</h3>
    {
        friends.map((friend, i)=>(
            <div key={i}>{friend}</div>
        ))
    }
    <hr/>
   </div>
  );
}

User.propTypes= {
    title: PropTypes.string.is,
    data: PropTypes.exact({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        city: PropTypes.string,
    }),
    friends: PropTypes.array,
};

User.defaultProps = {
    title: "Kişi",
} */
export default User