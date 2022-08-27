import { Article, Content } from "./style";

const Layout = () => {
  const icon = {
    color: "white",
    paddingRight: "20px",
    textDecoration: "none",
  };
  return (
    <Article>
      <Content>
        <h1> Let's Join With Us!</h1>
        <br />
        <h6>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h6>
      </Content>
      <div
        style={{
          position: "absolute",
          bottom: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            color: "white",
            float: "right",
            marginLeft: "30px",
            marginRight: "400px",
          }}
        >
          Copyright © 2022 Octilus Technologies
        </span>
        <span
          style={{
            textAlign: "right",
            color: "white",
            float: "right",
            marginRight: "30px",
          }}
        >
          <span class="fa fa-facebook" title="Facebook" style={icon}></span>
          <span class="fa fa-twitter" title="Twitter" style={icon}></span>
          <span class="fa fa-linkedin" title="Linkedin" style={icon}></span>
          <span class="fa fa-instagram" title="Instagram" style={icon}></span>
        </span>
      </div>
    </Article>
  );
};

export default Layout;
