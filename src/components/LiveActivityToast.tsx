import { useEffect } from "react";
import { toast } from "sonner";

const cities = ["Ahmedabad", "Mumbai", "Bangalore", "Delhi", "Pune", "Hyderabad", "Chennai"];
const actions = [
  "Appointment booked",
  "Lead qualified",
  "Reservation confirmed",
  "Call handled",
  "Demo scheduled",
];

const LiveActivityToast = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const city = cities[Math.floor(Math.random() * cities.length)];
      const action = actions[Math.floor(Math.random() * actions.length)];
      const mins = Math.floor(Math.random() * 5) + 1;

      toast(`${action} just now in ${city}`, {
        description: `${mins} minute${mins > 1 ? "s" : ""} ago`,
        duration: 4000,
        position: "bottom-left",
      });
    }, 12000);

    // First toast after 5s
    const timeout = setTimeout(() => {
      toast("Appointment booked just now in Ahmedabad", {
        description: "1 minute ago",
        duration: 4000,
        position: "bottom-left",
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return null;
};

export default LiveActivityToast;
