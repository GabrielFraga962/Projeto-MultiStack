import { useState, useMemo} from 'react';
import { UserShortInterface } from 'data/@types/useInterface';
import { VadilationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function useIndex(){
    const [cep, setCep] = useState(''),
        cepValido = useMemo(() => {
            return VadilationService.cep(cep);
        }, [cep]),
        [erro, setErro] = useState(''),
        [buscaFeita, setBuscaFeita] = useState(false),
        [carregando, setCarregando] = useState(false),
        [diaristas, setDiaristas] = useState([] as UserShortInterface[]),
        [diaristasRestantes, setDiaristasRestantes] = useState(0);

        async function buscarProfissionais(cep: string){ //operação assíncrona
            setBuscaFeita(false);
            setCarregando(true);
            setErro('');

            try { //tratamento de error
                const {data} = await ApiService.get<{
                    diaristas: UserShortInterface[],
                    quantidade_diaristas: number,
                }>('/api/diaristas-cidade?cep='+cep.replace(/\D/g, ''));
                setDiaristas(data.diaristas);
                setDiaristasRestantes(data.quantidade_diaristas);
                setBuscaFeita(true);
                setCarregando(false);
            }catch(error) {
                setErro('CEP não encontrato');
                setCarregando(false);
            }


            setBuscaFeita(true);
        }

    return {
        cep, setCep, cepValido, buscarProfissionais, erro, diaristas, buscaFeita, carregando, diaristasRestantes
    };
}