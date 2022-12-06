// import layouts or parent component
import Authenticated from "@/Layouts/Authenticated/index";

// import library
import Flickity from "react-flickity-component";

import { Head } from "@inertiajs/inertia-react";

// import child components
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

import {useState} from 'react'
export default function Dashboard({auth, featuredMovies, movies}) {
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
        <Authenticated auth={auth}>
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
                    {featuredMovies.map((i, ind) => {
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
                    {movies.map((i,index) => {
                        return (
                            <MovieCard 
                            key={index}
                            name={i.name}
                            thumbnail={i.thumbnail}
                            slug={i.slug}
                            category={i.category}
                             />
                        );
                    })}
                </Flickity>
            </div>
        </Authenticated>
    );
}
