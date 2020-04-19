import React from 'react';
import './App.css';
import fyre from "./components/fyre";
import CoolPerson from "./components/CoolPerson";
import TextField from "@material-ui/core/TextField";
import Buttons from "./components/Buttons";
import Button from "@material-ui/core/Button";



function App() {


  const [objects, updateObjects] = React.useState([]);

  const [values, setValues] = React.useState({
    coolness: '',
    name:'',
    number: ''
  });

  let db = fyre.firestore();

  React.useEffect(()=>{

    let newObjects = [];


    function handleStatusChange(status) {
      updateObjects(status)
    }


    const unsubscribe = db.collection("objects").get().then(function (snapshot) {
      snapshot.forEach(function (doc) {
        let item = {
          coolness: doc.data().coolness,
          name: doc.data().name,
          number: doc.data().number,
          id: doc.id
        };
        newObjects.push(item);

      });

      handleStatusChange(newObjects);
    });

    return () => unsubscribe;


  }, []);

  const deleteObj =(id)=>{
    db.collection("objects").doc(id).delete()
  };

  const editObj =(id, name)=>{
    db.collection("objects").doc(id).update({
      name: name
    })
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const submitForm =()=>{
    db.collection("objects").add(values);
    setValues({coolness: '',
      name:'',
      number: ''})
  };


  let CoolPeople = objects.map((obj, idx)=>
      <CoolPerson key={idx}
                  coolness={obj.coolness}
                  name={obj.name}
                  number={obj.number}
                  id={obj.id}
                  deleteObj={deleteObj}
                  editObj={editObj}/>
  );


  return (
      <div className="App">
        <TextField
            label="Name"
            onChange={handleChange('name')}
            margin="normal"
            fullWidth
            variant="outlined"
        />
        <TextField
            label="Number"
            onChange={handleChange('number')}
            margin="normal"
            fullWidth
            variant="outlined"
        />
        <TextField
            label="Coolness"
            onChange={handleChange('coolness')}
            margin="normal"
            fullWidth
            variant="outlined"
        />

        <Button color="primary" onClick={submitForm}>
          Submit
        </Button>

        <Buttons variant="contained" color="primary" onClick={submitForm}>
          Submit
        </Buttons>
        {CoolPeople}
      </div>
  );
}

export default App;
