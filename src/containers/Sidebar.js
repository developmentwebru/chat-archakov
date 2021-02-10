import React from "react";
import { Sidebar  } from "../components";
import { connect } from "react-redux";

const SidebarContainer = ({ user }) => {
    return(
        <Sidebar />
    )
}
export default connect(
    ({ user }) => user.data)(SidebarContainer);