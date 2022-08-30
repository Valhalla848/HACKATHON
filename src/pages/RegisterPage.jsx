import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import { Alert } from "@mui/material";
import "../styles/RegisterPage.css";

const theme = createTheme();

export default function Register() {
  const { register, error, setError } = useAuth();
const navigate=useNavigate()
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
const [first_name,setFirst_name]=React.useState("")
const [last_name,setLast_name]=React.useState("")
const [username,setUsername]=React.useState("")
const [phone_number,setPhone_number]=React.useState("")
  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim() || !first_name.trim() || !last_name.trim()) {
      alert("Заполните поля!");
      return;
    }

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("phone_number", phone_number);
    formData.append("username", username);
    register(formData);

  }

  console.log(email, password,passwordConfirm,first_name,last_name,username,phone_number);
  React.useEffect(() => {
    setError(false);
  }, []);

  return (
    <div className="Register">
      <div className="Overlay">
        <ThemeProvider sx={{mt:5}} theme={theme}>
          <Container  component="main" maxWidth="xs">
            {error ? <Alert sx={{mt:3}} severity="error">{error}</Alert> : null}
            <CssBaseline />
            <Box
              sx={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                // onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password_confirm"
                  label="Confirm Password"
                  type="password"
                  id="password-confirm"

                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="first_name"
                    label="first_name"
                    type="text"
                    id="first_name"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="last_name"
                    label="last_name"
                    type="text"
                    id="last_name"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="username"
                    label="username"
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone_number"
                    label="phone_number"
                    type="text"
                    id="phone_number"
                    value={last_name}
                    onChange={(e) => setPhone_number(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  //   type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSave}
                >
                  Register
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    {/* <Link href="#" variant="body2"> */}
                    <RouterLink to="/login">
                      <Typography>
                        {"Do you have an account? Sign in"}
                      </Typography>
                    </RouterLink>
                    {/* </Link> */}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
