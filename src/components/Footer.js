const Footer = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#232f3e",
          flexWrap: "wrap",
          borderRadius: "5px",
          position: "sticky",
        }}
      >
        <div style={{ marginLeft: 200 }}>
          <ul>
            <h3>
              <li style={{ color: "white", listStyle: "none" }}>Get to know</li>
            </h3>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "white" }} href="#">
                About Us
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none", color: "white" }} href="#">
                Career
              </a>
            </li>
          </ul>
        </div>
  
        <div style={{ marginRight: 200, marginBottom: 20 }}>
          <h3>
            <li style={{ color: "white", listStyle: "none" }}>Connect with Us</li>
          </h3>
          <li style={{ listStyle: "none" }}>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              Twitter
            </a>
          </li>
          <li style={{ listStyle: "none" }}>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              Facebook
            </a>
          </li>
          <li style={{ listStyle: "none" }}>
            <a style={{ textDecoration: "none", color: "white" }} href="#">
              Instagram
            </a>
          </li>
        </div>
      </div>
    );
  };
  
  export default Footer;
  