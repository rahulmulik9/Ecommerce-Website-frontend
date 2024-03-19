import { Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      className="bg-black text-white mt-10 text-center"
      container
      color={"white"}
      sx={{ bgcolor: "black", color: "white", py: 3 }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Company
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          About
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Jobs
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Press
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Partners
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Solutions
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Marketing
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Analytics
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Commerce
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Insights
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Support
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Documentation
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Guides
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          API Status
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6" gutterBottom>
          Legal
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Claim
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Privacy
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Terms
        </Typography>
      </Grid>
      <Grid className="pt-20" item xs={12}>
        <Typography variant="body2" component="p" align="center">
          Raul Mulik
        </Typography>
        <Typography variant="body2" component="p" align="center">
          <Link href="rahulmulik9@gmail.com" color="inherit" underline="always">
            Gmail
          </Link>
        </Typography>
        <Typography variant="body2" component="p" align="center">
          <Link
            href="https://github.com/rahulmulik9"
            color="inherit"
            underline="always"
          >
            GitHub
          </Link>
        </Typography>
        <Typography variant="body2" component="p" align="center">
          <Link
            href="https://www.linkedin.com/in/rahulmulik9"
            color="inherit"
            underline="always"
          >
            LinkedIn
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
