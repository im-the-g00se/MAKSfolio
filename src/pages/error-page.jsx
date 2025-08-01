import { Header } from "../components/header"
import { PageLayout } from "./page-layout"

export function ErrorPage() {
    return (
        <PageLayout header={<Header/>}>
            you missed smth
        </PageLayout>
    )
}