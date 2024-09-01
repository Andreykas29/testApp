export default function Banner() {
    return (
        <section className="banner">
        <div className="container">
            <div className="banner__wrapper">
                <div className="banner__description">
                    <p className="banner_name">Xceed Blog</p>
                    <h2 className="banner__title">10 Web Design <br/> Mistakes and How to Avoid Them</h2>
                    <p className="banner__promotion">Looking for more daily inspiration? Download Muzli extension — your go-to source for discovering design ideas from world’s top creators!</p>
                    <p className="banner__details">13.06, 2024 · 2:15 PM · <a href="https://medium.muz.li/10-web-design-mistakes-and-how-to-avoid-them-ab3c694d8bf4">medium.muz.li</a></p>
                </div>
                <div className="banner__image">
                    <img src="images/banner_image.png" alt="hand"/>
                </div>
            </div>
        </div>
    </section>
    )
}