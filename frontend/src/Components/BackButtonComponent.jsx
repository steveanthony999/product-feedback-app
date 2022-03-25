import { Link } from 'react-router-dom';

const BackButtonComponent = ({ url }) => {
  return <Link to={url}>Back</Link>;
};
export default BackButtonComponent;
