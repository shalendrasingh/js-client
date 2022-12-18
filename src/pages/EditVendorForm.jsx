import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData, getSingleData, updateData } from "../Redux/action";
import { setSnackbar } from "../Redux/snackbar";
export const EditVendorForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, singleData } = useSelector((store) => store?.reducer);
  const { user } = singleData;

  const [productName, setProductName] = useState(singleData?.user);

  const handleSubmit = (e) => {
    const {
      vendorname,
      accountno,
      addressline1,
      addressline2,
      b_name,
      city,
      zipCode,
      country,
    } = productName;
    e.preventDefault();
    if (productName) {
      const payload = {
        vendorname,
        accountno,
        addressline1,
        addressline2,
        b_name,
        city,
        zipCode,
        country,
      };
      dispatch(setSnackbar(true, "success", "Data updated successfully"));

      dispatch(updateData(id, payload)).then(() => {
        navigate("/");
      });
      dispatch(getData());
    }
  };

  useEffect(() => {
    setProductName(user);
  }, [user]);

  useEffect(() => {
    dispatch(getSingleData(id));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductName({
      ...productName,
      [name]: value,
    });
  };

  return (
    <>
      {!isLoading ? (
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

          <Box component={"form"} onSubmit={(e) => handleSubmit(e)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  label="Vendor Name"
                  fullWidth
                  name="vendorname"
                  id="vendorname"
                  value={productName?.vendorname}
                  autoComplete="name"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="standard"
                  required
                  name="accountno"
                  value={productName?.accountno}
                  id="accountno"
                  label="Account Number"
                  fullWidth
                  autoComplete="number"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="standard"
                  required
                  name="b_name"
                  value={productName?.b_name}
                  id="b_name"
                  label="Bank Name"
                  fullWidth
                  autoComplete="name"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="addressline1"
                  name="addressline1"
                  value={productName?.addressline1}
                  label={"Address Line 1"}
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="addressline2"
                  name="addressline2"
                  value={productName?.addressline2}
                  label={"Address Line 2"}
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="city"
                  name="city"
                  value={productName?.city}
                  label={"City"}
                  fullWidth
                  autoComplete="shipping address-line3"
                  variant="standard"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="country"
                  name="country"
                  value={productName?.country}
                  label={"Country"}
                  fullWidth
                  autoComplete="country"
                  variant="standard"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="zipCode"
                  name="zipCode"
                  value={productName?.zipCode}
                  label={"Zip Code"}
                  fullWidth
                  autoComplete="pincode"
                  variant="standard"
                  onChange={(e) => handleChange(e)}
                />
              </Grid>
            </Grid>
            <Button variant="outlined" type="submit">
              Update Vendor
            </Button>
          </Box>
        </Container>
      ) : (
        <p>..loading...</p>
      )}
    </>
  );
};
