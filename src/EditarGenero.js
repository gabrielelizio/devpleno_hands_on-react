import React, { useEffect,useState} from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const EditarGenero = ({match}) => {
  const [name, setName] = useState()
  const [success, setSuccess] = useState(false)

  useEffect ( ( )=>{
     axios
     .get('/api/genres/'+match.params.id)
     .then(res => {
        setName(res.data.name)
     })
  },[match.params.id])
  console.log(match)

  const onChange = e => setName(e.target.value)

  const save = () => {
    axios
    .put('/api/genres/'+ match.params.id, {
      name
    })
      .then(res => setSuccess(true))
  }

  if (success) {
    return (
      <Redirect to='/generos' />
    )
  }

  return (
    <div className='container-fluid'>
      <h1>Editar Genêro</h1>
      <form>
        <div className="from-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" className="form-control" placeholder="Nome do genêro" value={name} onChange={onChange} />
        </div>
        <button className="btn btn-success mt-2" type="button" onClick={save} >Salvar</button>
      </form>
    </div>
  )
}

export default EditarGenero
