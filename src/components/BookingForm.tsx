
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Input } from "./ui/input";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

export const BookingForm = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="glass p-6 rounded-lg space-y-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight">Find Your Perfect Spot</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Input placeholder="Enter parking location" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Vehicle Model</label>
              <Input placeholder="Enter your vehicle model" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Check-in Date & Time</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Duration</label>
              <Input type="number" placeholder="Number of hours" min="1" />
            </div>
          </div>

          <Button className="w-full" size="lg">
            Search Available Spots
          </Button>
        </div>
      </div>
    </div>
  );
};
