export default function Foods({ params }) {
  return (
    <>
      <h1>Meals / {params.slug}</h1>
      <p>{params.slug}</p>
    </>
  );
}
