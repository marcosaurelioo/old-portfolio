import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Body, WorkBox, WorkContent, Button } from "../styles/components/works";

import Cinema from "../assets/images/cinema.jpg";
import Discord from "../assets/images/discord.png";
import Food from "../assets/images/food.jpg";
import Games from "../assets/images/games.png";

const MyWorks = () => {
  const [firstIntersecting, setFirstIntersecting] = useState<boolean>();
  const [secondIntersecting, setSecondIntersecting] = useState<boolean>();
  const [thirdIntersecting, setThirdIntersecting] = useState<boolean>();
  const [fourthIntersecting, setFourthIntersecting] = useState<boolean>();

  useEffect(() => {
    const firstEffect = document.getElementById("firstEffect") as HTMLElement;
    const secondEffect = document.getElementById("secondEffect") as HTMLElement;
    const thirdEffect = document.getElementById("thirdEffect") as HTMLElement;
    const fourthEffect = document.getElementById("fourthEffect") as HTMLElement;

    var firstObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const { isIntersecting, intersectionRatio } = entry;
        setFirstIntersecting(isIntersecting);
        if (isIntersecting === true || intersectionRatio > 0) {
          console.log(entry.target);
          firstObserver.unobserve(entry.target);
        }
      });
    });

    var secondObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const { isIntersecting, intersectionRatio } = entry;
        setSecondIntersecting(isIntersecting);
        if (isIntersecting === true || intersectionRatio > 0) {
          secondObserver.unobserve(entry.target);
        }
      });
    });

    var thirdObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const { isIntersecting, intersectionRatio } = entry;
        setThirdIntersecting(isIntersecting);
        if (isIntersecting === true || intersectionRatio > 0) {
          thirdObserver.unobserve(entry.target);
        }
      });
    });

    var fourthObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const { isIntersecting, intersectionRatio } = entry;
        setFourthIntersecting(isIntersecting);
        if (isIntersecting === true || intersectionRatio > 0) {
          fourthObserver.unobserve(entry.target);
        }
      });
    });

    firstObserver.observe(firstEffect);
    secondObserver.observe(secondEffect);
    thirdObserver.observe(thirdEffect);
    fourthObserver.observe(fourthEffect);
  }, []);

  return (
    <Body>
      <div id="works" className="content">
        <h1>Works</h1>
        <div className="works-content">
          <WorkBox image={Cinema} effect={firstIntersecting}>
            <div id="firstEffect" className="effect transition">
              <WorkContent>
                <div className="work-box">
                  <h3>CINEMA</h3>
                  <span>The Next generation movies websites.</span>
                  <Link href="https://cinema-ten.vercel.app/">
                    <Button effect={firstIntersecting}>Visit Website</Button>
                  </Link>
                </div>
              </WorkContent>
            </div>
          </WorkBox>
          <WorkBox
            image={Food}
            effect={secondIntersecting}
            className="translatedWork"
          >
            <div id="secondEffect" className="effect transition">
              <WorkContent>
                <div className="work-box">
                  <h3>Food</h3>
                  <span>Are you hungry ?</span>
                  <Link href="https://food-challenge.now.sh/">
                    <Button effect={secondIntersecting}>Visit Website</Button>
                  </Link>
                </div>
              </WorkContent>
            </div>
          </WorkBox>
          <WorkBox
            image={Discord}
            effect={thirdIntersecting}
            className="normal"
          >
            <div id="thirdEffect" className="effect transition">
              <WorkContent>
                <div className="work-box">
                  <h3>Chat</h3>
                  <span>Real Time chat.</span>
                  <Link href="https://whatsapp122.netlify.app/">
                    <Button effect={thirdIntersecting}>Visit Website</Button>
                  </Link>
                </div>
              </WorkContent>
            </div>
          </WorkBox>
          <WorkBox
            image={Games}
            effect={fourthIntersecting}
            className="translatedWork"
          >
            <div id="fourthEffect" className="effect transition">
              <WorkContent>
                <div className="work-box">
                  <h3>Hyldan</h3>
                  <span>Do you like games ? This is your place.</span>
                  <Link href="https://hyldan.netlify.app/">
                    <Button effect={fourthIntersecting}>Visit Website</Button>
                  </Link>
                </div>
              </WorkContent>
            </div>
          </WorkBox>
        </div>
      </div>
    </Body>
  );
};

export default MyWorks;
