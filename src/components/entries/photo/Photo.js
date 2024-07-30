import Info from "../info/Info";

export default function Photo({ title, date, source, alt, caption = "" }) {
  return (
    <article>
      <div>
        <figure>
          <img src={source} alt={alt} />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
      <div>
        <Info title={title} date={date} />
      </div>
    </article>
  );
}
