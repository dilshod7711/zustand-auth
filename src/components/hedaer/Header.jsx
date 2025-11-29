import { Container, Flex } from "@mantine/core";
import React from "react";
import { NavLink } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const Header = () => {
  const { user, isAuth } = useAuthStore();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <Container py="md">
        <Flex justify="space-between" align="center">
          <div className="text-2xl font-bold text-indigo-600">MyApp</div>
          <nav className="flex gap-6 text-gray-700 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-bold"
                  : "hover:text-indigo-500 transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-bold"
                  : "hover:text-indigo-500 transition"
              }
            >
              Faq
            </NavLink>
            {isAuth ? (
              <NavLink
                to="/profile"
                className="hover:text-indigo-500 transition font-semibold"
              >
                {user?.data?.firstName}
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="hover:text-indigo-500 transition font-semibold"
              >
                Login
              </NavLink>
            )}
          </nav>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
