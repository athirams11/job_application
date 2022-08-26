import styled from "styled-components";
import job from "../assets/image/job-bg.jpg";

export const Article = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  place-items: center;
  background-image: url(${job});
`;

export const Content = styled.div`
  font-size: 80px;
  color: white;
  text-align: center;
`;

export const SplitScreen = styled.div`
  display: flex;
  flex-direction: row;
`;
