import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { createAtendimento } from "../../api/atendimentos";

export default function CreateAtendimento() {
    const navigate = useNavigate()
    const [atendimento, setAtendimento] = useState({
        dia: '',
        hora: '',
        valor: '',
        concluido: false
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAtendimento({
            ...atendimento,
            [id]: value
        })
    }

    const handleSave = async (e) => {
        e.preventDefault()
        const response = await createAtendimento(atendimento)

        if (response.status === 201) {
            navigate('/self/atendimentos')
        }
    }


    return (
        <main>
            <form>
                <div>
                    <label>Dia:</label>
                    <input type="text" name="dia" id="dia" value={atendimento.dia} onChange={handleChange} />
                </div>
                <div>
                    <label>Hora:</label>
                    <input type="text" name="hora" id="hora" value={atendimento.hora} onChange={handleChange} />
                </div>
                <div>
                    <label>valor:</label>
                    <input type="nunber" name="valor" id="valor" value={atendimento.valor} onChange={handleChange} />
                </div>
                <div>
                    <label>Concluído:</label>
                    <select
                        name="concluido"
                        value={atendimento.concluido ? "true" : "false"}
                        onChange={(e) =>
                            setAtendimento({ ...atendimento, concluido: e.target.value === "true" })
                        }
                    >
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                    </select>
                </div>
                <button type="reset">Limpar</button>
                <button
                    type="submit"
                    onClick={handleSave}
                >Enviar</button>
            </form>

        </main>
    )

}