import Header from "../../components/Header"
import NewsLetter from "../../components/NewsLetter"
import Footer from "../../components/Footer"
import Planes from "../../components/Planes"

export default function Grilla() {
    return (
        <div>
            <Header />

            <main>
                <Planes />
            </main>

            <NewsLetter />
            <Footer />

        </div>
    )
}

