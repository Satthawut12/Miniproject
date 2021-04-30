import { Container } from "./styles";
const Totalcal = (props) => {
  const { totalCal } = props
  return (
    <Container>
    <div className="box-container">
        <div>จำนวนแคลอรี่ทั้งหมด</div>
      <div className="cal">{totalCal} cal</div>
    </div>
      
    </Container>
  );
};
export default Totalcal;
