import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTableOps from "../features/bookings/BookingTableOps";

function Bookings() {
  return (
    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
      <BookingTableOps />
    </Row>
  );
}

export default Bookings;
