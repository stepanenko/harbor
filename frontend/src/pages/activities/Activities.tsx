import { useMemo, useState } from "react";
import { Box, Typography } from "@mui/material";

import { sxActiveTab, sxTab } from "./Activities.styles";

interface Streak {
  [year: number]: { [month: number]: { [day: number]: number }};
}

interface Activity {
  _id: string;
  name: string;
  priority: number;
  streak?: Streak;
}

const activities: Activity[] = [
  { _id: "a1", name: "Books", priority: 4 },
  { _id: "a2", name: "English", priority: 5 },
  { _id: "a3", name: "Gym", priority: 3, streak: { 2024: { 6: { 9: 2, 10: 4 }}} },
];

export const Activities = () => {
  const [activeTab, setActiveTab] = useState("");

  const [name, priority] = useMemo(() => {
    const selected = activities.find(a => a._id === activeTab);
    return [selected?.name, selected?.priority];
  }, [activeTab]);

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ padding: "0 30px" }}>
        <h2>Activities</h2>
        {activities.map(a => (
          <Typography
            key={a._id}
            sx={activeTab === a._id ? sxActiveTab : sxTab}
            onClick={() => setActiveTab(a._id)}>
              {a.name}
          </Typography>
        ))}
      </Box>

      <Box sx={{ width: 1, textAlign: "center" }}>
        <h2>Calendar</h2>
        {name} {priority}
      </Box>
    </Box>
  );
};
