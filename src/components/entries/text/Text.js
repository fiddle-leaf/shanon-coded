import Info from "../info/Info";

export default function Text({ title, date, body }) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <Info date={date} />
      </div>
    </article>
  );
}
