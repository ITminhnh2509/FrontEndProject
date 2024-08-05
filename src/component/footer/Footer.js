import React from "react";
import { Container, Divider, Grid, Typography } from "@mui/material";
export default function Footer() {
  return (
    <>
      <Divider />
      <Container maxWidth={false} sx={{ background: "#606060", height: 300 }}>
        <Container>
          <Grid
            container
            spacing={2}
            sx={{ marginTop: 5, justifyContent: "center" }}
          >
            <Grid xs={6} sx={{ mx: "auto" }}>
              <Typography>abc</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography>abc</Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Divider />
    </>
  );
}
