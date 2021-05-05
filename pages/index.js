import {Fragment} from "react";
import { Hero, FeaturedPosts } from "../componets"
function HomePage() {
    
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts />
        </Fragment>
    )
}

export default HomePage()