import React from "react";
import { useState } from "react";
import { useContextGlobal } from "../Components/utils/global.context";


const Form = () => {
  const {state, dispatch} = useContextGlobal();
  //Aqui deberan implementar el form completo con sus validaciones
  const [dataForm, setDataForm] = useState({ nombre: "", email: ""});
  const [errorForm, setErrorForm] = useState({valNombre: false, valEmail: false});
  const [validForm, setValidForm] = useState(false);
  const [validSubmit, setValidSubmit] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });

    if (name === "nombre") {
      if (value.trim().length < 5 && value.trim() !== "") {
        setErrorForm({ ...errorForm, valNombre: false });
      } else {
        setErrorForm({ ...errorForm, valNombre: true });
      }
    }
    if (name === "email") {
      const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      if (!regexEmail.test(value)) {
        setErrorForm({ ...errorForm, valEmail: false });
      } else {
        setErrorForm({ ...errorForm, valEmail: true });
      }
      console.log(errorForm);
    }

    
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (errorForm.valEmail === true && errorForm.valNombre === true) {
      setValidForm(true)
    } else {
      setValidForm(false)
      setValidSubmit(true)
    }
    console.log(validForm);

  }


  return (
    <div>
    {validForm ? <h1>Gracias {dataForm.nombre}, te contactaremos cuando antes vía mail</h1> :
       <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"                  
                    onChange={handleChange}
                    />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    />
                <button className= {state.theme + " boton"} type="submit">Enviar</button>
                {validSubmit && <p>Por favor verifique su información nuevamente</p>}
      </form>}
    </div>
  );
};

export default Form;
