
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const spots = [
  {
    id: 1,
    name: "Downtown Secure Parking",
    location: "123 Main St, Downtown",
    price: 25,
    rating: 4.8,
    features: ["CCTV", "24/7 Access"],
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Central Station Parking",
    location: "456 Station Ave",
    price: 15,
    rating: 4.5,
    features: ["Security Guard", "Covered"],
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Premium Mall Parking",
    location: "789 Shopping Blvd",
    price: 30,
    rating: 4.9,
    features: ["CCTV", "Valet"],
    image: "/placeholder.svg"
  }
];

export const ParkingSpots = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Featured Parking Spots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spots.map((spot) => (
            <Card key={spot.id} className="hover-scale">
              <CardHeader className="p-0">
                <div className="relative h-48 rounded-t-lg overflow-hidden">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">
                      ⭐️ {spot.rating}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>{spot.name}</CardTitle>
                <CardDescription className="mt-2">{spot.location}</CardDescription>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {spot.features.map((feature) => (
                      <Badge key={feature} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <span className="text-lg font-semibold">${spot.price}/hr</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
