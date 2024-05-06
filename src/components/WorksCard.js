import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";

const handleLearnMoreClick = (link) => {
  window.open(link);
};

export default function WorksCard({ data }) {
  return (
    <Card
      sx={{ maxWidth: 345, height: 360, maxHeight: 400, position: "relative" }}
    >
      <CardMedia
        sx={{ height: 160 }}
        image={process.env.PUBLIC_URL + data.image}
        title={data.title}
      />
      <CardContent>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
              {data.wip && (
                <Chip
                  label="WIP"
                  color="warning"
                  size="small"
                  sx={{ marginLeft: "6px" }}
                />
              )}
            </Typography>
            {data.github_link != "" && (
              <Link href={data.github_link != "" ? data.github_link : ""}>
                <Tooltip title="Github repository">
                  <IconButton>
                    <GitHubIcon sx={{ color: "#24292e" }} />
                  </IconButton>
                </Tooltip>
              </Link>
            )}{" "}
          </Box>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </Box>
        <Box sx={{ margin: "8px" }}>
          {data.technologies.map((tech) => (
            <Chip key={tech} label={tech} sx={{ margin: "3px" }} />
          ))}
        </Box>
      </CardContent>

      <Box sx={{ position: "absolute", bottom: 0 }}>
        <CardActions>
          <Link target="_blank" href={data.link} rel="noreferrer">
            <Button size="small" disabled={!data.linked}>
              Visit Site
            </Button>
          </Link>
        </CardActions>
      </Box>
    </Card>
  );
}
