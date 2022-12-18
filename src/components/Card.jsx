import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteData, getData } from "../Redux/action";
import { Link } from "react-router-dom";
import { setSnackbar } from "../Redux/snackbar";
const MyCard = ({
  vendorname,
  accountno,
  addressline1,
  addressline2,
  b_name,
  city,
  zipCode,
  _id,
  country,
}) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteData(_id)).then(() => dispatch(getData()));
    dispatch(setSnackbar(true, "success", "Data deleted successfully"));
  };

  return (
    <Card sx={{ minWidth: 210, margin: "10px" }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Name: {vendorname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {accountno}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {b_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {addressline1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {addressline2}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {zipCode}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {country}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Link to={`/editvendor/${_id}`}>
            <EditIcon />
          </Link>
        </IconButton>
        <IconButton aria-label="share">
          <DeleteIcon onClick={() => deleteHandler()} />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default MyCard;
