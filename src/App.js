import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import FormRow from './FormRow';

function App() {
  const [fields,setFields] = useState([{"name":"","type":""}]);
  const [formSubmitted,setFormSubmitted] = useState(true);

const handleFieldAdd = (e) => {
    e.preventDefault();
    let linkHolder =[...fields];
    linkHolder.push({"name":"","type":""});
    setFields(linkHolder);
}

const handleNameChange= (e,index) => {
  let linkHolder = [...fields];
  linkHolder[index].name = e.target.value;
  setFields(linkHolder);
}

const handleTypeChange = (e,index) => {
  let linkHolder = [...fields];
  linkHolder[index].type = e.target.value;
  setFields(linkHolder);
}

const handleOptionsChange =(e,index) => {
  let linkHolder = [...fields];
  linkHolder[index].options = e.target.value;
  setFields(linkHolder);
}

// const handleSubmit = (e) => {
//   e.preventDefault();
//   setFormSubmitted(true);
// }
  return (
    <div className="w-100 d-flex bg-dark">
      <div 
      className="w-50 justify-content-center text-center"
      style={{height:'100vh'}}
      > 

      <div style={{color:'#FFF',fontFamily: 'Roboto', fontSize: '30px'}}>
        FORM GENERATOR  
      </div>  

      <div className="w-75 justify-content-center align-items-center mx-auto">
      <Card className="m-3">

           <Card.Body>
            <form 
            // onSubmit={(e)=>handleSubmit(e)}
            >
           
            <div>
                {fields.map((field,index)=>
                <div key={index} className="row mb-2">

                  <div className="col-md-6">
                  
                    <label className="form-label"> Name </label>
                    <input className="form-control" type="text" value={field.name} onChange={(e)=>handleNameChange(e,index)}></input>

                  </div>
                  
                  <div className="col-md-6">

                    <label className="form-label"> Type </label>
                    <select className="form-control" value={field.type} onChange={(e)=>handleTypeChange(e,index)}>
                        <option> </option>
                        {fieldTypes.map((fieldType,index)=>
                              <option key={index} value={fieldType.value}> {fieldType.label} </option>
                        )}
                    </select>

                  </div>


                  {field.type=="select" && <div className="col-md-12">
                    <label className="form-label text-muted fw-10"> Select Options separated by comma </label>
                    <input className="form-control" type="text" value={field.options} onChange={(e)=>handleOptionsChange(e,index)}></input>

                  </div> 
                  }

                </div>
                )}
            </div>

            <Button variant="outline-secondary" className="me-2" onClick={(e)=>handleFieldAdd(e)}>Add new field</Button>

            {/* <Button variant="outline-success" type="submit"> Create Form </Button> */}

            </form>

            </Card.Body>

        </Card>

        </div>

      </div>

      <div 
      className="w-50 bg-secondary"
      style={{color:'#000',height:'100vh'}}
      >

      <div style={{color:'#FFF',fontFamily: 'Roboto', fontSize: '30px'}}>
        FORM PREVIEW  
      </div>  

        <div className="w-75 m-4">

            <Card>  

            <Card.Body>

            <form>

            {formSubmitted && fields.map((field,index)=> 
              <FormRow fieldObj={field} key={index} />)}
        
            </form>

            </Card.Body>

            </Card>

         </div>

         

      </div>
      
    </div>
  );
}

export default App;

const fieldTypes = [
  {"label":"Text","value":"text"},
  {"label":"Number","value":"number"},
  {"label":"Text Area","value":"textarea"},
  {"label":"Select","value":"select"}
]