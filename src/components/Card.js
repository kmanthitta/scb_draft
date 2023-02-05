import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import logo2 from "../assets/scb.png";
import { motion } from "framer-motion";

const ItemCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          maxHeight: "300px",
          background:
            "rgb(168,237,234) linear-gradient(90deg, rgba(168,237,234,1) 0%, rgba(254,214,227,1) 60%)",
        }}
        className="justify-center items-center"
      >
        <CardHeader title="Risk View" style={{ paddingBottom: "0" }} />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <img
            src={logo2}
            alt="logo"
            style={{ height: "100px", width: "100px" }}
          />
          <Typography variant="body2">
            <p className="text-center">
              here is a description for this card. this could be very very long
              asd asdashdajsdhaj ashdjahsj hjshasd asd asda sdas dasd asd
              asdasdas dasdasda sd
            </p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Explore</Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default ItemCard;
