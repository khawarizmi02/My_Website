import { useState, useEffect } from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"

import { client } from "@/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const AreaCover = () => {
	const [data, setData] = useState<AreaCover[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const query = '*[_type == "areaCover"]'
		setIsLoading(true)

		client.fetch(query).then((result) => {
			setData(result)
			setIsLoading(false)
		})
	}, [])

	if (isLoading) {
		return <div>Loading...</div>
	}
	  return (
    <section className="w-full py-12 space-y-8">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-2">
            <FaMapMarkerAlt className="text-mainBlue w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-mainBlue">
              Area Cover
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our pest control services are available across multiple regions in Malaysia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {data.map((areaCover, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
                <CardTitle className="flex items-center gap-2 text-mainBlue">
                  {areaCover.region}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {areaCover.areas.map((area, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 p-3 rounded-md hover:bg-blue-50 transition-colors duration-200"
                    >
                      <MdLocationOn className="text-mainBlue w-4 h-4" />
                      <span className="text-gray-700">{area.areaName}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

interface AreaCover {
	region: string;
  areas: {
    areaName: string;
  }[];
}

export default AreaCover