
import { nanoid } from "nanoid";
import { Gallery, Item } from 'react-photoswipe-gallery'
import '../../../node_modules/photoswipe/dist/photoswipe.css'
import photos from "./photos.js";


// images/galery


export default function Galeria() {

    const options = {
        bgOpacity: 0.5,
        padding: { top: 50, bottom: 50, left: 100, right: 100 },
        escKey: true,
        arrowKeys: true,
        showHideAnimationType: 'zoom',
    }

    const galeryImages = photos.map(img => {
        return (
            <div className="cursor-pointer " key={nanoid()}>
                <Item
                    original={img.original}
                    thumbnail={img.original}
                    width={img.width}
                    height={img.height}
                >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={img.thumbnail} className="w-full hover:scale-110 ease-in-out duration-200" />
                    )}
                </Item>
            </div>
        )
    })

    return (
        <section className="bg-neutro ">

            <div className="max-w-screen-2xl mx-auto pt-16  flex flex-col gap-3 justify-center self-center items-center " >
                <h2 className="titulo mb-8">Galeria</h2>
                <Gallery
                    options={options}
                >
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
                        {galeryImages}
                    </div>
                </Gallery>
            </div>
        </section>
    )
}
