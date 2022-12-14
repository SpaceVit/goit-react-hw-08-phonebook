import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar';
import { Box } from './Box';
import { Container } from './App.styled';
import { authOperations } from 'redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <Box as="main" py={3} width="100%">
      <Container>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/ContactsPage"
              element={
                <PrivateRoute redirectPath={'/LoginPage'}>
                  <ContactsPage />
                </PrivateRoute>
              }
            />

            <Route
              element={
                <PublicRoute redirectPath={'/ContactsPage'} restricted />
              }
            >
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route path="/SignUpPage" element={<SignUpPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </Box>
  );
}
