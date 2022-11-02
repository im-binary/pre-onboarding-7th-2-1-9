export default function Insurance({
  insurance,
}: {
  insurance: { name: string; description: string }[];
}) {
  return (
    <ul>
      <li>보험</li>
      {insurance.map(({ name, description }, index) => (
        <li key={`${name}-${index}`}>
          <span>{name}</span>
          <span>{description}</span>
        </li>
      ))}
    </ul>
  );
}
