import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            idade,
            peso,
            altura,
            imagem,
            time
        })
        setNome('')
        setIdade('')
        setPeso('')
        setAltura('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha o card com os dados do Lutador :</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do lutador"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                  <CampoTexto
                    obrigatorio={true}
                    label="Idade"
                    placeholder="Digite a idade do lutador"
                    valor={idade}
                    aoAlterado={valor => setIdade(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Peso"
                    placeholder="Digite o peso do lutador"
                    valor={peso}
                    aoAlterado={valor => setPeso(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Altura"
                    placeholder="Digite a altura do lutador"
                    valor={altura}
                    aoAlterado={valor => setAltura(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Estilo de luta"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario