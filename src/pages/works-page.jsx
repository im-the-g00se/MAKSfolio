import { Header } from "../components/header"
import { Works } from "../components/works"
import { PageLayout } from "./page-layout"

export function WorksPage() {
    return (
        <PageLayout header={<Header/>}>
            <Works/>
        </PageLayout>
    )
}