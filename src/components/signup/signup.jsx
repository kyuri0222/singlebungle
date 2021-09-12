import React, { useRef, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

const Signup = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
      divide: {
        margin: "20px",
      },
    },
  }));
  const classes = useStyles();

  // Material UI CODE

  const [file, setFile] = useState();
  const emailRef = useRef();
  const pwRef = useRef();
  const pw2Ref = useRef();
  const nameRef = useRef();
  const phRef = useRef();
  const authRef = useRef();
  const addRef = useRef();
  const kakaoAddRef = useRef();

  // Define

  const onFile = (e) => {
    const image = e.target.files[0];
    setFile(image);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    const email = emailRef.current.value;
    const pw = pwRef.current.value;
    const pw2 = pwRef.current.value;
    const name = nameRef.current.value;
    const ph = phRef.current.value;
    const auth = authRef.current.value;
    const add = addRef.current.value;
    const kakaoAdd = kakaoAddRef.current.value;

    //input 형식 check
    const emailCheck =
      /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    const pwCheck =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    const phCheck = /[0-9]/;

    if (!emailCheck.test(email)) {
      return alert("이메일 형식을 확인해주세요");
    } else if (!pwCheck.test(pw)) {
      return alert(
        "비밀번호의 조건을 확인해주세요 (최소 8 자, 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자)"
      );
    } else if (pw2 != pw) {
      return alert("비밀번호가 일치하지 않습니다");
    } else if (!phCheck.test(ph)) {
      return alert("숫자로만 입력해주세요 ex) 01000000000");
    }

    formdata.append("image", file);
    formdata.append("id", email);
    formdata.append("pw", pw);
    formdata.append("name", name);
    formdata.append("phonenumber", ph);
    formdata.append("auth", auth);
    formdata.append("address", add);
    formdata.append("openKakaoAddress", kakaoAdd);
    for (let key of formdata.entries()) {
      console.log(`${key}`);
    }

    axios //
      .post("./signup", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <section>
      <h1>회원가입</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="stretch"
          padding={1}
        >
          <TextField
            inputRef={emailRef}
            id="standard-basic"
            label="email"
            type="email"
          />
          <TextField
            inputRef={pwRef}
            id="standard-basic"
            label="password"
            type="password"
            minLength="8"
          />
          <TextField
            inputRef={pw2Ref}
            id="standard-basic"
            label="password"
            type="password"
            minLength="8"
          />
          <TextField
            inputRef={nameRef}
            id="standard-basic"
            label="name"
            type="text"
          />
          <TextField
            inputRef={emailRef}
            id="standard-basic"
            label="email"
            type="NickName"
          />
          <TextField
            inputRef={phRef}
            id="standard-basic"
            label="phoneNumber"
            type="tel"
          />
          <TextField
            inputRef={authRef}
            id="standard-basic"
            label="auth"
            type="text"
          />
          <TextField
            inputRef={addRef}
            id="standard-basic"
            label="address"
            type="text"
          />
          <TextField
            inputRef={kakaoAddRef}
            id="standard-basic"
            label="openKakaoTalkAddress"
            type="url"
          />
          <Divider className={classes.divide} variant="middle" />
          <TextField
            id="standard-basic"
            accept=".jpg,.jpeg"
            type="file"
            onChange={onFile}
          />
          <Button onClick={onSubmit}>Sign</Button>
        </Box>
      </form>
    </section>
  );
};

export default Signup;
