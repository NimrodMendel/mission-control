import { Alert, Button, Snackbar, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const App = (): JSX.Element => {
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const sayHello = (): void => {
    alert(message);
  };

  const fetchMessage = async (): Promise<void> => {
    setMessage("Hello world");
  };

  const handleClose = (): void => {
    setOpenSnackbar(false);
  };

  const showSnackbar = (): void => {
    setOpenSnackbar(true);
  };

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <>
      <Typography variant="body1">Hello World</Typography>
      <Button onClick={showSnackbar} variant="contained">
        <span>
          <Typography variant="caption">Click me!</Typography>
        </span>
      </Button>

      <Snackbar open={openSnackbar} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info">
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default App;
