import { Header } from "../components/header"
import { Home } from "../components/home"
import { PageLayout } from "./page-layout"
export function HomePage() {
    return (
        <PageLayout disableMarginBottom disableMarginTop header={<Header/>}>
            <Home/>
        </PageLayout>
    )
}