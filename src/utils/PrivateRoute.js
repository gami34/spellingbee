import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import {} from "react-router";

export default function PrivateRoute({ ...rest }) {
  const { billing } = useSelector((state) => state.user);

  if (!billing || !billing.name || !billing.email || !billing.phonenumber) {
    return <Route {...rest} />;
  }

  return <Redirect to="login" />;
}
