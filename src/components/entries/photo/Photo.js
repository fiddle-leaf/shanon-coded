export default function Photo({title, source, alt, caption=""}) {
    return (<article>
        <h2>{title}</h2>
        <figure>
            <img src={source} alt={alt}/>
            <figcaption>{caption}</figcaption>
        </figure>
    </article> );
}

