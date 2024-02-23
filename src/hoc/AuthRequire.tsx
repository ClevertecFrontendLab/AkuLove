import { useLocation, Navigate } from 'react-router-dom';
import { paths } from '../routes/paths';

const AuthRequire = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    const auth = false;

    if (!auth) {
        return <Navigate to={paths.AUTH} state={{ from: location }} />;
    }

    return children;
};

export default AuthRequire;
