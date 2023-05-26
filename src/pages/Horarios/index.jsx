import Header from "../../components/Header"
import NewsLetter from "../../components/NewsLetter"
import Footer from "../../components/Footer"
import Horarios from "../../components/Horarios"

export default function Grilla() {
    return (
        <div>
            <Header />

            <main>
                <Horarios />
            </main>

            <NewsLetter />
            <Footer />

        </div>
    )
}
