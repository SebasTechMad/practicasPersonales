import '../../index.css';

function Formulario({titulo, datos}){

    let title = titulo;

    let saludar = () =>{
        alert('hola');
    }

    return (
        <>
            <form className='d-flex flex-column align-items-center col-5 shadow-lg rounded-4 formulario' method='POST'>
                <h1>{titulo}</h1>
                {datosFormulario(datos)}
                <div className='d-flex gap-3'>
                    <input type='button' onClick={saludar} name='accion' className='btn btn-outline-primary mt-5' value={'Iniciar sesion'}/>
                    <input type='button' name='accion' className='btn btn-outline-success mt-5' value={'Registrarse'}/>
                </div>
            </form>
        </> 
    );
};

let datosFormulario = (datos) =>{
    return datos.map((elemento) =>
        <div className='d-flex flex-column align-items-start gap-2 form-floating mt-3 mb-3'>
            <input type="text" id={elemento} className='form-control' placeholder={elemento}/>
            <label htmlFor={elemento}>{elemento}</label>
        </div>
    );
}



export default Formulario;
