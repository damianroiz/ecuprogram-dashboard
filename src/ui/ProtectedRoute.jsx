import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from '../ui/Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FullPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-50);
  align-items: center;
  justify-content: center;
  flex-basis: 100vh;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1 - Load authenticated user
  const { isLoading, isAuthenticated } = useUser();

  //1 - Redirect to login page if user cannot be authenticated
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate('/login');
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  //3 - While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4 - If authenticated, show the children
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
