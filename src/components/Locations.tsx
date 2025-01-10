import { useState, useEffect } from "react";
import styles from "../style";
import { client } from "../client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Locations = () => {
  const [data, setData] = useState<Address[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
		const query = '*[_type == "addresses"]'
		setIsLoading(true);

		client.fetch(query).then((result) => {
			setData(result);
			setIsLoading(false);
		});
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={`${styles.flexCenter} flex-col relative`}>
      <div className="center">
        <h1 className="text-center text-[50px] font-extrabold text-black leading-relaxed py-3">Locate Us</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full feedback-container-whyus relative z-[1] gap-4">
        {data.map((address, index) => (
          <Card key={index} className="w-full text-black">
            <CardHeader>
              <CardTitle>{address.name}</CardTitle>
              <p>{address.branch}</p>
              <CardDescription>{address.address}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contact Number: {address.contactNum}</p>
              <p>Email: {address.email}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

interface Address {
  name: string;
  address: string;
  contactNum: string;
  email: string;
	branch: string;
}

export default Locations;
