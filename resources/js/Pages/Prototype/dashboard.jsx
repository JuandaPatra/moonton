// import layouts or parent component
import Authenticated from "@/Layouts/Authenticated/index";

// import library
import Flickity from "react-flickity-component";

import { Head } from "@inertiajs/inertia-react";

// import child components
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

import {useState} from 'react'
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

    const [thumbnailFilm, setThumbnailFilm] = useState([
        {
            "name"      : "La la land",
            "slug"      : 'la-la-land',
            "rating"    : 4.5,
            "category"  : 'Comedy',
            "thumbnail" : `https://source.unsplash.com/640x480?musical`
        },
        {
            "name"      : "Batman In Love",
            "slug"      : 'batman-in-love',
            "rating"    : 4.3,
            "category"  : 'Comedy',
            "thumbnail" : `https://source.unsplash.com/640x480?film`
        },
        {
            "name"      : "Coach Carter",
            "slug"      : 'coach-carter',
            "rating"    : 4.0,
            "category"  : 'Comedy',
            "thumbnail" : `https://source.unsplash.com/640x480?sport`
        },
        {
            "name"      : "Train to Busan",
            "slug"      : 'train-to-busan',
            "rating"    : 4.5,
            "category"  : 'Comedy',
            "thumbnail" : `https://source.unsplash.com/640x480?korean`
        },

    ])
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
                    {thumbnailFilm.map((i, ind) => {
                        return (
                            <FeaturedMovie
                                key={ind}
                                name={`${i.name}`}
                                slug={`${i.slug}`}
                                rating={i.rating}
                                category={`${i.category}`}
                                thumbnail={`${i.thumbnail}`}
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
