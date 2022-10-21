import './Colaborador.css'

const Colaborador = ({nome ,idade, imagem, peso, altura, corDeFundo}) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>    
                    <ul>
                        Idade: {idade} anos 
                    </ul>
                    <ul>
                        Peso: {peso} (Kg)
                    </ul>
                    <ul>
                       Altura: {altura} (m)
                    </ul>
            </h5>
        </div>
    </div>)
}

export default Colaborador