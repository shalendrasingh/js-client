import {
  Box,
  Button,
  Grid,
  TextField,
  Container,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addData } from "../Redux/action";
import { setSnackbar } from "../Redux/snackbar";
const initialState = {
  vendorname: "",
  accountno: "",
  addressline1: "",
  addressline2: "",
  b_name: "",
  city: "",
  zipCode: "",
  country: "",
};
export const AddVendorForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const addHandler = async () => {
    if (JSON.stringify(data) !== JSON.stringify(initialState)) {
      await dispatch(addData(data)).then((res) => {
        dispatch(setSnackbar(true, "success", "Data added successfully"));
        setData({
          vendorname: "",
          accountno: "",
          addressline1: "",
          addressline2: "",
          b_name: "",
          city: "",
          zipCode: "",
          country: "",
        });
        navigate("/");
      });
    }
  };

  return (
    <>
      <Container
        component={"section"}
        maxWidth="md"
        sx={{
          mt: 4,
          mb: 4,
        }}
      >
        <Typography align="center" variant="h6" gutterBottom>
          Add new vendor
        </Typography>

        <Box component={"form"} onChange={handleChange}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                label="Vendor Name"
                fullWidth
                name="vendorname"
                id="vendorname"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant="standard"
                required
                name="accountno"
                id="accountno"
                label="Account Number"
                fullWidth
                autoComplete="number"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant="standard"
                required
                name="b_name"
                id="b_name"
                label="Bank Name"
                fullWidth
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="addressline1"
                name="addressline1"
                label={"Address Line 1"}
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="addressline2"
                name="addressline2"
                label={"Address Line 2"}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="city"
                name="city"
                label={"City"}
                fullWidth
                autoComplete="shipping address-line3"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="country"
                name="country"
                label={"Country"}
                fullWidth
                autoComplete="country"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="zipCode"
                name="zipCode"
                label={"Zip Code"}
                fullWidth
                autoComplete="pincode"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Button onClick={addHandler}>Add Vendor</Button>
        </Box>
      </Container>
    </>
  );
};
