import Info from "../info/Info";
import Grid from "../grid/Grid";

export default function Photo({ title, date, source, alt, caption = "" }) {
  return (
    <Grid isRows={true}>
      <div>
        <figure>
          <img src={source} alt={alt} />
          <figcaption>{caption}</figcaption>
        </figure>
      </div>
      <div>
        <Info title={title} date={date} />
      </div>
    </Grid>
  );
}
