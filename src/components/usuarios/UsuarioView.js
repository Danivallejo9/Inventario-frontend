import React, { useState, useEffect } from 'react';
import { getUsuarios, crearUsuario,} from '../../services/usuarioService';

export const UsuarioView = () => {

    const [ ValoresForm, setValoresForm ] = useState ({});
    const [Usuarios, setUsuarios ] = useState ([]);
    const { nombre= '', email= '',  estado= '', fechaCreacion= '' } = ValoresForm;

    const listarUsuarios = async () => {
      try{
        const resp = await getUsuarios();
        setUsuarios(resp.data);
      }catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      listarUsuarios();
    },[]);

    const handleOnChange = (e) => {
      setValoresForm({...ValoresForm, [e.target.name]: e.target.value});
    }

    const handleCrearUsuario = async (e) => {
      e.preventDefault();
      console.log(ValoresForm);
      try {
        const resp = await crearUsuario(ValoresForm);
        console.log(resp.data);
        setValoresForm({nombre: '' , email: '' , estado: '' , fechaCreacion: ''});

      }catch (error) {
        console.log(error);
      }
    }

  return (
    <div className="container-fluid">
      <form onSubmit={ (e) => handleCrearUsuario(e) } >
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input required name= 'nombre' value = {nombre} type="text" className="form-control" 
                onChange={ (e) => handleOnChange(e) }/>
            </div>
            <div className="mb-3">
            <label className="form-label">Email</label>
            <input required name= 'email' value = {email} type="text" className="form-control" 
                onChange={ (e) => handleOnChange(e) }/>
            </div>
            <div className="mb-3">
            <label className="form-label">Estado</label>
                  <select required name= 'estado' value= {estado} className="form-select" 
                      onChange={ (e) => handleOnChange(e) }>
                    <option selected>--Seleccione--</option>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
              <div className="mb-3">
                    <label className="form-label">Fecha Creación</label>
                    <input required name= 'fechaCreacion' value = {fechaCreacion} type="date" className="form-control" 
                        onChange={ (e) => handleOnChange(e) }/>
              </div>  
            </div>
            
            <button className="btn btn-primary">Guardar</button>
          </form>

          <table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Estado</th>
      <th scope="col">fecha De Creación</th>
    </tr>
  </thead>
  <tbody>

      {
        Usuarios.map( Usuarios => {
          return <tr>
            <td>{Usuarios.nombre}</td>
            <td>{Usuarios.estado}</td>
            <td>{Usuarios.fechaCreacion}</td>
            </tr>
        })
      }
  </tbody>
</table>
      </div>
  )
}
