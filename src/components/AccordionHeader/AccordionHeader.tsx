import React, {FC, useState} from "react";
import styled from "styled-components";
import coin from '../../assets/cleo_coin.jpg';
import {connect} from "react-redux";
import {patchMerchant} from "../../redux/merchants";
import {Merchant} from "../../shared/types";
import {StyleConstants} from "../../shared/constants";

type AccordionHeaderProps = {
    data: Merchant,
    onHeaderClick: Function,
    patchMerchant: Function
};

const Header = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr 200px;
    min-height: 80px;
    width: 100%;
`;

const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const AccordionAvatar = styled.img`
    border-radius: 100%;
    margin: auto;
    width: 50px
`;

const ActionButton = styled.div`
    align-items: center;
    background-color: ${StyleConstants.colors.yellow};
    border-radius: 4px;
    color: ${StyleConstants.colors.darkGrey};
    display: flex;
    height: 40px;
    justify-content: center;
    margin: auto;
    padding: 0 16px;
    &:hover {
        background: red;
        background-color: ${StyleConstants.colors.darkGrey};
        border: 1px solid ${StyleConstants.colors.yellow};
        color: ${StyleConstants.colors.yellow};
    }
`;

const AccordionHeader: FC<AccordionHeaderProps> = (
    {data, onHeaderClick, patchMerchant}
) => {
    const [url, setUrl] = useState(data.iconUrl || coin);

    /**
     * Will fallback to cleo coin if img src doesn't work
     */
    const onImageError = () => setUrl(coin);

    const handleOnClick = (event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        patchMerchant(data.id, data.isBill)
    };

    return (
        <Header id="ah-root" onClick={() => onHeaderClick()}>
            <AccordionAvatar src={url}  alt="logo" onError={onImageError}/>

            <LabelContainer>
                <b>{data.name}</b>
                <div>Total transactions: {data.transactions.length}</div>
            </LabelContainer>

            <ActionButton onClick={handleOnClick}>
                Mark as {data.isBill ? 'transaction' : 'bill'}
            </ActionButton>
        </Header>
    )
}

const mapDispatchToProps = {patchMerchant};

export default connect(null, mapDispatchToProps)(AccordionHeader);
