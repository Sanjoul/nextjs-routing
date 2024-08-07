async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}
export default async function About() {
  // throw new Error("THis is manual error");
  await takeTime();
  return (
    <>
      <h1>This is about page </h1>
    </>
  );
}
