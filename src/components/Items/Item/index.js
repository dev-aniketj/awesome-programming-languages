export default function Item({ title, desc, enable = false }) {
  if (enable) {
    return (
      <details className="item_container" open>
        <summary className="item_title">hello {title}</summary>
        <p className="item_desc">{desc}</p>
      </details>
    );
  } else {
    return (
      <details className="item_container">
        <summary className="item_title">{title}</summary>
        <p className="item_desc">{desc}</p>
      </details>
    );
  }
}
