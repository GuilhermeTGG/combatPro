import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        // A redenderização condicional no React acontece assim:
        //  => (props.colaboradores.length) > 0 && // OUU Utilizando '?' e ':' como foi feito.
       (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    corDeFundo={props.corPrimaria}
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    idade={colaborador.idade}
                    peso={colaborador.peso}
                    altura={colaborador.altura}
                    imagem={colaborador.imagem}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Time