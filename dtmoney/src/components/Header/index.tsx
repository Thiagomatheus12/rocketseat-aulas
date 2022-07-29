import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void; //a função () não irá receber nenhum paramêtro e não vai devolver nenhum retorno
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
                </button>

           
            </Content>
        </Container>
    )
}