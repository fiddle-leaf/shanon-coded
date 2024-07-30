import Info from "../info/Info";
import Grid from "../grid/Grid";

export default function Photo({ title, date, source, alt, caption = "" }) {
  return (
    <Grid isRows={false}>
      <div className="photo">
        <figure>
          <img src={source} alt={alt} />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
      <div className="info">
        <Info title={title} date={date} />
      </div>
    </Grid>
  );
}
