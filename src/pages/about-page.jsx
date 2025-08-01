import { Header } from "../components/header"
import { PageLayout } from "./page-layout"

export function AboutPage() {
    return (
        <PageLayout header={<Header/>}>
            I'm human (probably)
        </PageLayout>
    )
}