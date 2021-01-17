import React, {FC} from "react";
import styled from "styled-components";
import coin from '../../assets/cleo_coin.jpg';

type AccordionHeaderProps = {
    label: string,
    onHeaderClick: Function,
    transactionsCount: number
}

const Header = styled.div`
    display: grid;
    grid-template-columns: 70px 1fr;
    min-height: 80px;
    width: 100%;
`

const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const AccordionAvatar = styled.img`
    border-radius: 100%;
    margin: auto;
    width: 50px
`

const AccordionHeader: FC<AccordionHeaderProps> = ({label, onHeaderClick, transactionsCount}) => {
    return (
        <Header id="ah-root" onClick={() => onHeaderClick()}>
            <AccordionAvatar src={coin}  alt="coin"/>
            <LabelContainer>
                <div>{label}</div>
                <div>{transactionsCount}</div>
            </LabelContainer>
        </Header>
    )
}

export default AccordionHeader;
