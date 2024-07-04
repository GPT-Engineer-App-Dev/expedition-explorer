import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchResults = () => {
  const [filters, setFilters] = useState({
    priceRange: "",
    starRating: "",
    amenities: "",
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    // Handle search logic here
  };

  return (
    <div className="flex">
      <aside className="w-1/4 p-4">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="space-y-4">
          <Input
            placeholder="Price Range"
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
          />
          <Input
            placeholder="Star Rating"
            name="starRating"
            value={filters.starRating}
            onChange={handleFilterChange}
          />
          <Input
            placeholder="Amenities"
            name="amenities"
            value={filters.amenities}
            onChange={handleFilterChange}
          />
          <Button onClick={handleSearch}>Apply Filters</Button>
        </div>
      </aside>
      <main className="w-3/4 p-4">
        <h2 className="text-xl font-bold mb-4">Search Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add search results here */}
          <Card>
            <CardHeader>
              <CardTitle>Result 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details of Result 1.</p>
              <Button>Book Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Result 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details of Result 2.</p>
              <Button>Book Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Result 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details of Result 3.</p>
              <Button>Book Now</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SearchResults;