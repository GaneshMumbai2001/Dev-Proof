import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar";
import HomePage from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { ProtectedRoute, ProtectedRouteSession } from "./Providers/Protected";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stake from "../pages/Stake";
import NotFound from "../pages/NotFound";
import { TermsAndConditions } from "../pages/GithubPermission";
import LeaderBoard from "../pages/LeaderBoard";
import IssuesPage from "../pages/Rewards";
import TaskSubmission from "../pages/Rewards";

const App = () => {
  useEffect(() => {
    onAuthStateChanged(auth, () => {});
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/staketoken"
          element={
            <ProtectedRoute>
              <Stake />
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <LeaderBoard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bounty"
          element={
            <ProtectedRoute>
              <TaskSubmission />
            </ProtectedRoute>
          }
        />

        <Route path="/desc" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  );
};

export default App;
