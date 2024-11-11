import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "../style";
import { Navbar, Footer, Whatsapp } from "../components";
import { urlFor, client, RenderBlockContent } from "../client";

import { Library } from "./PestInfo";

const PestList = () => {
  const [pests, setPests] = useState<Library[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "library"]';
    setIsLoading(true);

    client.fetch(query).then((data) => {
      setPests(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div
        className="flex flex-col justify-center center 
    font-poppins font-[20px] text-black text-center"
      >
        Loading...
      </div>
    ); // Render a loading message while data is being fetched
  }

  return (
    <section
      className={`${styles.flexStart} ${styles.paddingX} ${styles.paddingY}`}
    >
      <div className="flex flex-col justify-center items-center">
        <div className={`${styles.heading3} text-center`}> Pest Library </div>
        <div className="font-poppins font-light text-[20px]">
          {" "}
          Dive deep into the world of pests and discover what's lurking in the
          shadows.{" "}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-6">
          {pests.map((item) => (
            <div className="flex flex-col w-full">
              <div>
                <img
                  src={urlFor(item.pestImage).url()}
                  className="px-none sm:px-3 py-3 w-full h-[300px] object-cover rounded-[30px]"
                />
              </div>
              <div className="font-poppins font-bold text-black text-center text-[20px]">
                <Link to={`/pests/${item.slug.current}`}>{item.pestName}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Intro = () => {
  const [intro, setIntro] = useState<LibraryIntro[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "libraryIntro"]';
    setIsLoading(true);

    client.fetch(query).then((data) => {
      setIntro(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div
        className="flex flex-col justify-center center
			font-poppins font-[20px] text-black text-center"
      >
        Loading...
      </div>
    ); // Render a loading message while data is being fetched
  }

  return (
    <section className={`${styles.paddingX} pb-3`}>
      <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-6">
        <div className="text-center px-6 py-3 w-full">
          <img
            src={urlFor(intro[0].image).url()}
            className="w-full h-[300px] xs:h-[500px] sm:h-[800px] 
						md:h-full object-cover object-top rounded-[10px]"
          />
        </div>
        <div className="flex flex-col w-full justify-center">
          <div className={`${styles.heading1} capitalize`}>
            {intro[0].title}
          </div>
          <div className={`${styles.paragraph2} pt-3`}>
            <RenderBlockContent blocks={intro[0].introduction} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Pests = () => {
  return (
    <div className="bg-cream w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} border-b-[1px] border-b-primary`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-cream ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Intro />
          <PestList />
          <Footer />
        </div>
      </div>

      <Whatsapp />
    </div>
  );
};

interface LibraryIntro {
  title: string;
  introduction: {
    _type: string;
    children: {
      _type: string;
      text: string;
    }[];
  }[];
  image: {
    asset: {
      _ref: string;
    };
  };
}

export default Pests;
