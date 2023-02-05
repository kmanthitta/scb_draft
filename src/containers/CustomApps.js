import { Grid } from "@mui/material";
import ItemCard from "../components/Card";

const t = [1, 2, 3, 4, 5];

const CustomApps = () => {
  return (
    <div className="overflow-auto" id="style-1">
      <Grid
        container
        spacing={4}
        columnGap={5}
        justifyContent="center"
        marginTop={2}
        marginBottom={10}
      >
        {t.map((x) => (
          <Grid item xs={6} sm={5} md={4} xl={3}>
            <ItemCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CustomApps;
