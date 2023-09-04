import { Button } from "../../components/Button";

function AddPetButton() {
  const handeClick1 = () => {
    console.log("애완견 추가");
  };
  const handeClick2 = () => {
    console.log("애완견 삭제");
  };
  const handeClick3 = () => {
    console.log("애완견 입양");
  };

  return (
    <>
      <Button onClick={handeClick1} />
      <Button onClick={handeClick2} />
      <Button onClick={handeClick3} />
    </>
  );
}

export default AddPetButton;
