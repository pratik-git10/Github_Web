import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <div className="flex justify-center mt-10 mb-10">{children}</div>;
};

export default AuthLayout;
