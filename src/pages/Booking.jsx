import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Booking = () => {
  const [travelDetails, setTravelDetails] = useState({
    destination: "Destination 1",
    dates: "2023-12-01 to 2023-12-10",
    price: "$1000",
  });

  const [travelerInfo, setTravelerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    payment: "",
  });

  const handleInputChange = (e) => {
    setTravelerInfo({ ...travelerInfo, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    // Handle booking logic here
  };

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Travel Details</h2>
        <Card>
          <CardHeader>
            <CardTitle>{travelDetails.destination}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Dates: {travelDetails.dates}</p>
            <p>Price: {travelDetails.price}</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Traveler Information</h2>
        <div className="space-y-4">
          <Input
            placeholder="Name"
            name="name"
            value={travelerInfo.name}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Email"
            name="email"
            value={travelerInfo.email}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Phone"
            name="phone"
            value={travelerInfo.phone}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Payment Information"
            name="payment"
            value={travelerInfo.payment}
            onChange={handleInputChange}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Summary and Confirmation</h2>
        <Card>
          <CardContent>
            <p>Destination: {travelDetails.destination}</p>
            <p>Dates: {travelDetails.dates}</p>
            <p>Price: {travelDetails.price}</p>
            <p>Name: {travelerInfo.name}</p>
            <p>Email: {travelerInfo.email}</p>
            <p>Phone: {travelerInfo.phone}</p>
            <Button onClick={handleBooking}>Confirm Booking</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Booking;