import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [travelers, setTravelers] = useState("");

  const handleSearch = () => {
    // Handle search logic here
  };

  return (
    <div className="space-y-8">
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl font-bold">Find Your Perfect Trip</h1>
            <div className="flex space-x-2">
              <Input
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <Input
                placeholder="Dates"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
              />
              <Input
                placeholder="Travelers"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
              />
              <Button onClick={handleSearch}>Search</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add popular destinations here */}
          <Card>
            <CardHeader>
              <CardTitle>Destination 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of Destination 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Destination 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of Destination 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Destination 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Brief description of Destination 3.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add special offers here */}
          <Card>
            <CardHeader>
              <CardTitle>Offer 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details of Offer 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Offer 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details of Offer 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Offer 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details of Offer 3.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add customer testimonials here */}
          <Card>
            <CardHeader>
              <CardTitle>Customer 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Review from Customer 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Review from Customer 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customer 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Review from Customer 3.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
