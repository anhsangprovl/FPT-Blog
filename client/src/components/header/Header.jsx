import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="boxes">
        <div class="cta-box">
          <a
            href="https://cheerup.theme-sphere.com/miranda/blog/category/lifestyle/"
            className=""
          >
            <img
              src="https://cheerup.theme-sphere.com/miranda/wp-content/uploads/sites/4/2016/08/Untitled-2.jpg"
              alt="Lifestyle"
            />

            <span className="label">Lifestyle</span>
          </a>
        </div>

        <div className="cta-box">
          <a
            href="https://cheerup.theme-sphere.com/miranda/about-shane/"
            className=""
          >
            <img
              src="https://cheerup.theme-sphere.com/miranda/wp-content/uploads/sites/4/2016/08/2.jpg"
              alt="About Me"
            />

            <span className="label">About Me</span>
          </a>
        </div>

        <div className="cta-box">
          <a href="http://instagram.com/cheerup_mir/" className="">
            <img
              src="https://cheerup.theme-sphere.com/miranda/wp-content/uploads/sites/4/2016/08/3.jpg"
              alt="Instagram"
            />

            <span className="label">Instagram</span>
          </a>
        </div>
        <div className="cta-box">
          <a
            href="https://www.pexels.com/vi-vn/anh/nha-g-ph-n-chi-u-h-mirror-gi-a-h-nhin-ra-day-nui-147411/"
            className=""
          >
            <img
              src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={500}
              alt="Google"
            />

            <span className="label">Google</span>
          </a>
        </div>
      </div>
    </div>
  );
}
