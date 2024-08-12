import React, { useState } from "react";
import emailjs from "emailjs-com";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const useStyles = styled((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    maxWidth: 400,
    margin: "0 auto",
  },
  formField: {
    margin: theme.spacing(2, 0),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const Sendemail = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0q5h31f",
        "template_xudj36i",
        e.target,
        "11AhxizCv1mJ1vtm1"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container sx={{ marginY: "104px" }}>
      <Box className={classes.formContainer}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.formField}
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            className={classes.formField}
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            type="email"
          />
          <TextField
            className={classes.formField}
            label="Message"
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
          />
          <Button
            className={classes.submitButton}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Send
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Sendemail;
