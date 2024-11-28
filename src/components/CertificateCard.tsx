import { urlFor } from "@/client";
import styles from "@/style";

const CertificateCard = ({ item }: { item: CertificateCardProps["item"] }) => (
  <div className="flex flex-col py-3 px-6 w-full">
    <div className="relative w-full max-w-md mx-auto h-40">
      <img
        src={urlFor(item.certificateImage).url()}
        className="w-full h-full object-contain"
        alt={item.certificateName}
      />
    </div>
    <h1
      className={`${styles.point} whitespace-normal text-center sm:text-left`}
    >
      {item.certificateName}
    </h1>
    <p
      className={`${styles.paragraph2} whitespace-normal text-center sm:text-left`}
    >
      {item.certificateDescription}
    </p>
  </div>
);

type CertificateCardProps = {
  item: {
    certificateImage: {
      asset: {
        _ref: string;
      };
    };
    certificateName: string;
    certificateDescription: string;
  };
};

export default CertificateCard;
