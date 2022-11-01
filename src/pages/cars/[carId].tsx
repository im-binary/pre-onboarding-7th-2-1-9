import { useRouter } from "next/router";

export default function CarsDetail() {
  const router = useRouter();
  const { carId } = router.query;
  return <div>{carId}</div>;
}
