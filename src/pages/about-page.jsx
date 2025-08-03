import { About } from "../components/about"
import { Header } from "../components/header"
import { PageLayout } from "./page-layout"

export function AboutPage() {
    return (
        <PageLayout header={<Header/>}>
            <About/>
        </PageLayout>
    )
}