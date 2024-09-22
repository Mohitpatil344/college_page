// src/pages/CampusLifePage.jsx
import CampusLife from '../components/CampusLife';

const CampusLifePage = ({ events, handleEventClick }) => (
  <>
    <h2 className="text-2xl font-bold my-4">Campus Life</h2>
    <CampusLife events={events} onEventClick={handleEventClick} />
  </>
);

export default CampusLifePage;
