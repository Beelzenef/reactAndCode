function GifItem({ title, url, id }) {
  return (
    <div className="card">
      <img src={url} />
      <p>{title}</p>
    </div>
  );
}

export default GifItem;
