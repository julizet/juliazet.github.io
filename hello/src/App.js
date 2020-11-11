import { Component } from "react";
import logo from "./favicon.ico";
import { ThemeProvider } from "theme-ui";
import theme from "./style/theme";
import { Card, Image, Text, Box } from "theme-ui";

import Table from "./components/Table";

class App extends Component {
  render() {
    const characters = [
      {
        name: "bambus",
        water: "**",
        sunlight: "*",
      },
      {
        name: "sunflower",
        water: "*",
        sunlight: "***",
      },
      {
        name: "cinnamon",
        water: "**",
        sunlight: "**",
      },
    ];

    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className="wrapper">
            <h1>Hej, my name is </h1>
            <Box p={4} color="white" bg="primary">
              Here comes a very long text:
            </Box>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              sagittis purus sit amet magna fermentum pharetra. Vivamus volutpat
              ante in felis dapibus semper. Aenean suscipit metus tristique odio
              sagittis, at pulvinar augue ultricies. Donec aliquet enim id
              molestie cursus. Sed justo quam, rutrum eu egestas eget, hendrerit
              convallis enim. Pellentesque vel nisi sit amet lorem aliquet
              ultrices eget non quam. Suspendisse rutrum leo non sem ultrices,
              vitae volutpat ante molestie. Nunc viverra tellus ex, id gravida
              massa efficitur elementum. Proin non sem vel sem ultricies
              eleifend sed a massa. Vivamus sed consectetur velit. Aliquam eu
              sollicitudin metus, sit amet mollis tellus. Aliquam mattis gravida
              felis eget tincidunt. Ut faucibus tortor eget fringilla rutrum.
              Fusce dictum nisl eget dolor mollis tristique. Suspendisse
              potenti. Nullam ex arcu, interdum id bibendum id, fringilla sit
              amet turpis. In hac habitasse platea dictumst. Vivamus augue
              neque, tincidunt sit amet lacinia accumsan, pulvinar nec nisl. Ut
              ac euismod ligula. Duis sed nisi porttitor, cursus est vel, congue
              dolor. Nam porta, nibh ac elementum aliquet, leo eros ultricies
              nisi, vitae ultricies lectus ipsum id nunc. Sed in felis ac nibh
              accumsan congue vitae eu dolor. Vestibulum faucibus nisi ut
              pharetra aliquam. Etiam eu odio id risus dignissim dignissim. Duis
              vitae massa sapien. Donec vulputate commodo lacus, vitae porta
              magna pretium vitae. Nullam vehicula pharetra nisi in venenatis.
              Donec quis massa id arcu dictum sagittis. Morbi at sapien dapibus,
              ornare tortor in, scelerisque lacus. Nam ligula enim, bibendum
              quis posuere sit amet, egestas eu erat.{" "}
            </p>
            <h1>Hej, Jude!</h1>
            <Box p={3} color="white" bg="#000">
              Wanna play cards?
            </Box>
            <div className="cardWrapper">
              <Card
                sx={{
                  margin: 4,
                  maxWidth: 220,
                }}
              >
                <Image src={logo} />
                <Text sx={{ textAlign: "center" }}> Beep</Text>
              </Card>
              <Card
                sx={{
                  margin: 4,
                  maxWidth: 220,
                }}
              >
                <Image src={logo} />
                <Text sx={{ textAlign: "center" }}> Meep</Text>
              </Card>
              <Card
                sx={{
                  margin: 4,
                  maxWidth: 220,
                }}
              >
                <Image src={logo} />
                <Text sx={{ textAlign: "center" }}> Clunk</Text>
              </Card>
            </div>
            <h1>Hej, Jude!</h1>
            <Box p={4} color="white" bg="secondary">
              Why not looking at my table?
            </Box>
            <Table characterData={characters} />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
