/**
 * Info module displays information for each entry
 * props used: title, date
 */

export default function Info({ title, date }) {
  let postDate = new Date(date);

  console.log(postDate);
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>{postDate.toDateString()}</div>
    </div>
  );
}
