import {ReactElement} from "react";

export type TabType = {
    label: string,
    component: ReactElement
}

export type ReduxState = {
    merchants: any
}

export type Transaction = {
    amount: number,
    date: string,
    id: number
}

export type Merchant = {
    categoryId: number,
    iconUrl: string,
    id: string
    isBill: boolean
    name: string
    transactions: Array<Transaction>
}
