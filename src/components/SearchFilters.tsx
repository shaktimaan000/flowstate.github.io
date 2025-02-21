
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SlidersHorizontal } from "lucide-react";
import { useToast } from "./ui/use-toast";

export const SearchFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [isOpen, setIsOpen] = useState(false);
  const [vehicleType, setVehicleType] = useState("");
  const [features, setFeatures] = useState("");
  const [rating, setRating] = useState("");
  const [sortBy, setSortBy] = useState("");
  const { toast } = useToast();

  const handleApplyFilters = () => {
    // Here you would typically pass these filters to a parent component
    // or trigger a data fetch with the selected filters
    const filters = {
      priceRange,
      vehicleType,
      features,
      rating,
      sortBy,
    };
    
    console.log("Applied filters:", filters);
    setIsOpen(false);
    
    toast({
      title: "Filters applied",
      description: "The parking spots have been filtered according to your preferences.",
    });
  };

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-[180px]">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Sort & Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80 p-4">
            <DropdownMenuLabel>Sort By</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => setSortBy("price-asc")}>
                Price: Low to High
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("price-desc")}>
                Price: High to Low
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("rating")}>
                Rating: Highest First
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortBy("distance")}>
                Distance: Nearest First
              </DropdownMenuItem>
            </DropdownMenuGroup>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuLabel>Vehicle Type</DropdownMenuLabel>
            <Select value={vehicleType} onValueChange={setVehicleType}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Car</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="motorcycle">Motorcycle</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
              </SelectContent>
            </Select>

            <DropdownMenuLabel className="mt-4">Price Range</DropdownMenuLabel>
            <div className="px-2 py-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={100}
                step={1}
                className="my-4"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <DropdownMenuLabel className="mt-2">Features</DropdownMenuLabel>
            <Select value={features} onValueChange={setFeatures}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select features" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cctv">CCTV</SelectItem>
                <SelectItem value="24/7">24/7 Access</SelectItem>
                <SelectItem value="covered">Covered Parking</SelectItem>
                <SelectItem value="security">Security Guard</SelectItem>
              </SelectContent>
            </Select>

            <DropdownMenuLabel className="mt-4">Rating</DropdownMenuLabel>
            <Select value={rating} onValueChange={setRating}>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Select minimum rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4+ Stars</SelectItem>
                <SelectItem value="3">3+ Stars</SelectItem>
                <SelectItem value="2">2+ Stars</SelectItem>
              </SelectContent>
            </Select>

            <div className="mt-6 flex justify-end">
              <Button onClick={handleApplyFilters}>Apply Filters</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
