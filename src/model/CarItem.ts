export interface CarItem {
  id: number;
  startDate: string;
  createdAt: Date;
  attribute: {
    brand: string;
    name: string;
    segment: string;
    fuelType: string;
    imageUrl: string;
  };
  insurance: { name: string; description: string }[];
  amount: number;
  additionalProducts: {
    name: string;
    amount: number;
  }[];
}
