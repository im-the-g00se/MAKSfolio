import { Header } from "../components/header"
import { PageLayout } from "./page-layout"
import { Test } from "../components/test"

export function TestPage() {
    return (
        <PageLayout disableMarginBottom header={<Header/>}>
            <Test/>
        </PageLayout>
    )
}