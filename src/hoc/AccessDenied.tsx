import { useLocation, Navigate } from 'react-router-dom';
import { paths } from '../routes/paths';

const AccessDenied = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    const auth = true;

    if (!auth) {
        return <Navigate to={paths.AUTH} state={{ from: location }} />;
    }

    return children;
};

export default AccessDenied;
