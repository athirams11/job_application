import styled from "styled-components";
import job from "../../assets/image/job-bg.jpg";

export const Article = styled.div`
  height: ${window.innerHeight}px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  place-items: center;
  background-image: url(${job});
  overflow: hidden;
  position: relative;
`;

export const Content = styled.div`
  color: white;
  text-align: left;
  margin-left: 200px;
  margin-top: 200px;
  position: relative;
`;
