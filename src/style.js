const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  point: "font-poppins font-semibold text-black text-[25px]",
  paragraph: "font-poppins font-normal text-cream text-[20px] leading-[30.8px]",
  paragraph2: "font-poppins font-normal text-black text-[20px] leading-[30.8px]",
  paragraph3: "font-poppins font-normal text-black text-[20px] text-center leading-[30.8px]",
  paragraph4: "font-poppins font-extralight text-black text-[20px] text-center leading-[30.8px]",
  TextArea: "border-0 rounded-[5px] w-full sm:w-[480px] md:w-[640px] h-[55px] mt-5 pl-3",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
