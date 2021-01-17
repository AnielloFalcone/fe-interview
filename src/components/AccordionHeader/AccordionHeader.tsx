import React, {FC, useState} from "react";
import styled from "styled-components";
import coin from '../../assets/cleo_coin.jpg';

type AccordionHeaderProps = {
    imageUrl: string,
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
    justify-content: space-evenly;
`

const AccordionAvatar = styled.img`
    border-radius: 100%;
    margin: auto;
    width: 50px
`

const AccordionHeader: FC<AccordionHeaderProps> = (
    {imageUrl, label, onHeaderClick, transactionsCount}
) => {
    const [url, setUrl] = useState(imageUrl || coin);

    /**
     * Will fallback to cleo coin if img src doesn't work
     */
    const onImageError = () => setUrl(coin);

    return (
        <Header id="ah-root" onClick={() => onHeaderClick()}>
            <AccordionAvatar src={url}  alt="logo" onError={onImageError}/>
            <LabelContainer>
                <b>{label}</b>
                <div>Total transactions: {transactionsCount}</div>
            </LabelContainer>
        </Header>
    )
}

export default AccordionHeader;
