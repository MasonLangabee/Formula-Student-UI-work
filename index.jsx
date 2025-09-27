import React, { useState } from "react";
import "./LeftNavBarStyleSheet.css";
import { useSelector } from "react-redux";
import { selectColorMode } from "../../../store/slices/userSettings";
import icon1 from "/repos/plm_lts/src/assets/images/DesignIcon.png";
import icon2 from "/repos/plm_lts/src/assets/images/CalcBook.png";
import collapseIcon from "/repos/plm_lts/src/assets/images/RightArrow.png";

const makeClassName = (...classes) => {
    return classes.filter(Boolean).join(' ');
}

export default function LeftNavBar() {
    const colorMode = useSelector(selectColorMode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selectedTab, setSelectedTab] = useState("part-scheme");

    const handleButtonClick = (tabName) => {
        setSelectedTab(tabName);
    }

    return (
        <div className={makeClassName('leftNavBar', colorMode, isCollapsed ? "collapsed" : "")}>
            <button
                className={makeClassName('nav-button', colorMode, selectedTab === "part-scheme" ? "selected" : "")}
                onClick={() => handleButtonClick("part-scheme")}>
                <img src={icon1} alt="Icon 1" className="nav-icon" /> {/* Part Scheme Management Button */}
                {!isCollapsed && "Part Scheme Management"}
            </button>
            <button
                className={makeClassName('nav-button', colorMode, selectedTab === "bom-management" ? "selected" : "")}
                onClick={() => handleButtonClick("bom-management")}>
                <img src={icon2} alt="Icon 2" className="nav-icon" /> {/* BoM Management Button */}
                {!isCollapsed && "BoM Management"}
            </button>
            <button className={makeClassName('collapse-btn', colorMode)} onClick={() => setIsCollapsed(!isCollapsed)}>
                <img src={collapseIcon} alt="Collapse Icon" className="collapse-icon" />
            </button>
        </div>
    );
}
