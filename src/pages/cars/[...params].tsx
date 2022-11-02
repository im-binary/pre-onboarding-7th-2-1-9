import { useRouter } from 'next/router';

export default function CarsDetail() {
  const router = useRouter();
  const { fuelType, segment } = router.query;
  return (
    <div>
      {fuelType} | {segment}
    </div>
  );
}
