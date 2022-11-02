export default function CarInfo({
  attribute,
  startDate,
}: {
  attribute: { brand: string; name: string; segment: string; fuelType: string };
  startDate: string;
}) {
  return (
    <ul>
      <li>차량 정보</li>
      <li>{attribute.segment}</li>
      <li>{attribute.fuelType}</li>
      <li>{startDate}</li>
    </ul>
  );
}
