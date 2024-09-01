export default function LatestPostItem({title, classname, children, alt, src, reverse}) {
    return (
        <div className={`post ${classname}`}>
            {reverse ? (
                <>
                <div className="post__image">
                    <img src={src} alt={alt}/>
                </div>
                <div className="post__description">
                    <h3>{title}</h3>
                    <p>{children}</p>
                </div>
                </>
            ) : (
                <>
                    <div className="post__description">
                        <h3>{title}</h3>
                        <p>{children}</p>
                    </div>
                    <div className="post__image">
                        <img src={src} alt={alt}/>
                    </div>
                </>
            )}
        </div>
    )

    
}