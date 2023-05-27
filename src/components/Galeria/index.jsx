
import { nanoid } from "nanoid";
import { Gallery, Item } from 'react-photoswipe-gallery'
import '../../../node_modules/photoswipe/dist/photoswipe.css'


// images/galery
const photos = [
    {
        original: "mockup-atlas-gym/src/assets/images/galery/crossfit-orig.jpg",
        thumbnail: "mockup-atlas-gym/src/assets/images/galery/crossfit-thumb.jpg",
        height: "1280",
        width: "1920"
    },
    {
        original: "mockup-atlas-gym/src/assets/images/galery/crossfit2-orig.jpg",
        thumbnail: "mockup-atlas-gym/src/assets/images/galery/crossfit2-thumb.jpg",
        height: "1920",
        width: "1280"
    },
    {
        original: "mockup-atlas-gym/src/assets/images/galery/fitness-orig.jpg",
        thumbnail: "mockup-atlas-gym/src/assets/images/galery/fitness-thumb.jpg",
        height: "1280",
        width: "1920"
    },
    {
        original: "mockup-atlas-gym/src/assets/images/galery/gym_girl1-orig.jpg",
        thumbnail: "mockup-atlas-gym/src/assets/images/galery/gym_girl1-thumb.jpg",
        height: "1280",
        width: "1920"
    },
    {
        original: "mockup-atlas-gym/src/assets/images/galery/lifting-orig.jpg",
        thumbnail: "mockup-atlas-gym/src/assets/images/galery/lifting-thumb.jpg",
        height: "1920",
        width: "1280"
    },
    {
        original: "mockup-atlas-gym/src/assets/images/galery/maquina-orig.jpg",
        thumbnail: "mockup-atlas-gym/src/assets/images/galery/maquina-thumb.jpg",
        height: "1280",
        width: "1920"
    },
    {
        original: "mockup-atlas-gym/src/assets/images/galery/equipment-orig.jpg",
        thumbnail: "mockup-atlas-gym/src/assets/images/galery/equipment-thumb.jpg",
        height: "1280",
        width: "1920"
    },
    {
        original: "mockup-atlas-gym/src/assets/images/galery/squat-orig.jpg",
        thumbnail: "mockup-atlas-gym/src/assets/images/galery/squat-thumb.jpg",
        height: "1280",
        width: "1920"
    },
    {
        original: "mockup-atlas-gym/src/assets/images/galery/room_maquinas-orig.jpg",
        thumbnail: "mockup-atlas-gym/src/assets/images/galery/room_maquinas-thumb.jpg",
        height: "1280",
        width: "1920"
    },
    {
        original: "mockup-atlas-gym/src/assets/images/galery/trainner-orig.jpg",
        thumbnail: "mockup-atlas-gym/src/assets/images/galery/trainner-thumb.jpg",
        height: "1280",
        width: "1920"
    },
    {
        original: "mockup-atlas-gym/src/assets/images/galery/gym_girl2-orig.jpg",
        thumbnail: "mockup-atlas-gym/src/assets/images/galery/gym_girl2-thumb.jpg",
        height: "1080",
        width: "1920"
    },
    {
        original: "mockup-atlas-gym/src/assets/images/galery/room_maquinas2-orig.jpg",
        thumbnail: "mockup-atlas-gym/src/assets/images/galery/room_maquinas2-thumb.jpg",
        height: "1280",
        width: "1920"
    },
];

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
