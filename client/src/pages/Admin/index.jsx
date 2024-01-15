import "./index.scss";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import BicycleAddForm from "../../components/BicycleAddForm";
import BicycleTable from "../../components/BicycleTable";
import axios from "axios";

const Admin = () => {
  const [value, setValue] = useState("1");
  const [bicycles, setBicycles] = useState(null)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getAllBicycles = async ()=>{
    const resp = await axios("http://localhost:5234/bicycle")
    setBicycles(resp.data)
}
  return (
    <section id="admin">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Bicycles" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
          <BicycleAddForm getAllBicycles={getAllBicycles} />
          <BicycleTable bicycles={bicycles} getAllBicycles={getAllBicycles}/>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </section>
  );
};

export default Admin;
