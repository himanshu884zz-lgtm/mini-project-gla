import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ForcastChart from './ForcastChart.js';

const UserDashboard = () => {

  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true)
  const logout = () => {
    localStorage.removeItem("token");
localStorage.removeItem("type");
    navigate("/");
  };

  const type=localStorage.getItem("type")
