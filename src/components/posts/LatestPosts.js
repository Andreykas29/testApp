
import LatestPostItem from "./LatestPostItem";

export default function LatestPosts() {
    return (
        <section className="latest-posts">
        <div className="container">
            <h2 className="section-title">Latest posts</h2>
            <div className="latest-post__wrapper">
                
                <LatestPostItem
                title="5 popular Rust web frameworks—which one is right for you?"
                classname="post-1"
                src="images/stars.png"
                alt="stars">
                    From the simplicity of Poem to the full-featured speed of Actix, there's a Rust web framework for most every user and need.
                </LatestPostItem>

                <LatestPostItem
                reverse
                title="JAVA VS PHP: WHICH LANGUAGE TO CHOOSE?"
                classname="post-2"
                src="images/book.png"
                alt="book">
                    Choosing a programming language can be a major hurdle due to people lacking the necessary information to make the right decision..
                </LatestPostItem>
    
                <LatestPostItem
                title="Dive into the world of an iOS Developer – career, salary, and skills"
                classname="post-3"
                src="images/phone.png"
                alt="phone">
                    When it comes to developing iOS applications, there <br/> are two main programming languages that <br/> professionals use: Objective-C and Swift.
                    Objective-C <br/> is a C language that has additional object-oriented design.
                </LatestPostItem>
            </div>
        </div>
    </section>
    )
}