import Authenticated from "@/Layouts/Authenticated/index";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/inertia-react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
export default function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity
                    className="gap-[30px] __scroll-selector"
                    options={flickityOptions}
                >
                    {[1, 2, 3, 4].map((i, ind) => {
                        return (
                            <FeaturedMovie
                                key={ind}
                                name={`The Batman in Love ${i}`}
                                slug={"the-batman-in-love"}
                                rating={4}
                                category={`Comedy`}
                                thumbnail={`https://source.unsplash.com/640x480?film`}
                            />
                        );
                    })}

                    {/* Movie Thumbnail  */}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity
                    className="__scroll-selector gap-[30px]"
                    options={flickityOptions}
                >
                    {[1, 2, 3, 4, 5, 6].map((i) => {
                        return (
                            <MovieCard 
                            key={i}
                            name={`Meong Golden ${i}`}
                            thumbnail={`/images/browse-1.png`}
                            slug={`meong-golden-${i}`}
                            category={"Comedy"}
                             />
                        );
                    })}
                </Flickity>
            </div>
        </Authenticated>
    );
}
