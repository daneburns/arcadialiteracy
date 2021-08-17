import Head from "next/head";
import Nav from "../components/common/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Section from "../components/common/Section";
import { Waypoint } from "react-waypoint";
import Fade from "../components/animations/Fade/Fade";
import { useState } from "react";
import Button from "../components/common/Button/Button";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [visibleTwo, setVisibleTwo] = useState(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-xl mx-auto">
        <Hero />

        <Section>
          <Fade visible={visible} spring={"molasses"}>
            <Waypoint
              onEnter={() => setVisible(true)}
              onLeave={() => setVisible(false)}
              topOffset={"380px"}
              bottomOffset={"380px"}
            >
              <div className="flex flex-col space-y-10">
                <div>
                  <h1 className="text-7xl font-serif">
                    Your child needs a plan. <br /> We have one.
                  </h1>
                </div>
                <p className="text-xl">
                  Using scientifically proven programs, research-based
                  behavioral management, and individualized learning plans,
                  students learn to overcome their learning differences. With a
                  communal approach, students feel supported and encouraged to
                  succeed. Our programs are designed to tackle a student's
                  specific challenge so each student can continue to grow and
                  develop in and out of the classroom. Through regular updates,
                  careful tracking, and progress testing, Arcadia Literacy &
                  Learning will help your child reach his or her learning goals.
                </p>

                <Button href="/programs">Read about our programs</Button>
              </div>
            </Waypoint>
          </Fade>
        </Section>
        <Section>
          <Fade visible={visibleTwo} spring={"molasses"}>
            <Waypoint
              onEnter={() => setVisibleTwo(true)}
              onLeave={() => setVisibleTwo(false)}
              topOffset={"380px"}
              bottomOffset={"380px"}
            >
              <div className="flex flex-col space-y-10 text-right">
                <div>
                  <h1 className="text-7xl font-serif">Tutors, not pooters.</h1>
                </div>
                <p className="text-xl">
                  Using scientifically proven programs, research-based
                  behavioral management, and individualized learning plans,
                  students learn to overcome their learning differences. With a
                  communal approach, students feel supported and encouraged to
                  succeed. Our programs are designed to tackle a student's
                  specific challenge so each student can continue to grow and
                  develop in and out of the classroom. Through regular updates,
                  careful tracking, and progress testing, Arcadia Literacy &
                  Learning will help your child reach his or her learning goals.
                </p>

                <Button href="/meettheteam">
                  See what makes our staff so special
                </Button>
              </div>
            </Waypoint>
          </Fade>
        </Section>
      </div>
    </>
  );
}
