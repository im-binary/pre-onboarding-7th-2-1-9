export default function Summary({
  attribute,
  amount,
}: {
  attribute: {
    brand: string;
    name: string;
    segment: string;
    fuelType: string;
    imageUrl: string;
  };
  amount: number;
}) {
  return (
    <>
      <img src={`${attribute.imageUrl}`} alt="" />
      <ul>
        <li>{attribute.brand}</li>
        <li>{attribute.name}</li>
        <li>월 {amount}</li>
      </ul>
    </>
  );
}
