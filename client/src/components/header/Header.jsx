import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-sm">The Blog</span>
        <span className="header-title-lg">Writings everything you want.</span>
        <p className="header-des">
          The latest industry news, technologies, and resource.
        </p>
      </div>
      <img
        className="header-img"
        src="https://www.readerdigital.com/wp-content/uploads/2018/02/blogging-services.jpg"
        alt=""
      />
    </div>
  );
}
