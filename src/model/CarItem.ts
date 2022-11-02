export interface CarItem {
  id: number;
  startDate: Date;
  createdAt: Date;
  attribute: {
    brand: string;
    name: string;
    segment: string;
    fuelType: string;
    imageUrl: string;
  };
  amount: number;
}
