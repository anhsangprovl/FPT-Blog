import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-sm">The Blog</span>
        <span className="header-title-lg">Writings everything you want.</span>
        <p className="header-des">The latest industry news, technologies, and resource.</p>
      </div>
      <img
        className="header-img"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="header-post">
        <div className="post-content">
          <span className="post-date">20/10/2023</span>
          <span className="post-title">Trending web & landing page designs in 202Trending web & landing page designTrending web & landing page designs in 202Trending web & landing page design</span>
          <span className="post-desc">Description here Description here Description here Description here Description hereDescription hereDescription hereDescription hereDescription hereDescription hereDescription hereDescription hereDescription here</span>
        </div>
      </div>
    </div>
  );
}
