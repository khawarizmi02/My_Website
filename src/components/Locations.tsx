import { useState, useEffect } from "react";
import styles from "../style";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Locations = () => {
  const [data, setData] = useState<Address[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your API or data source
    fetch("/api/locations")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="center">
        <h1 className="text-center text-[50px] font-extrabold text-black leading-relaxed">Locate Us</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full feedback-container-whyus relative z-[1] gap-4">
        {data.map((address, index) => (
          <Card key={index} className="w-full text-black">
            <CardHeader>
              <CardTitle>{address.name}</CardTitle>
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
}

export default Locations;
