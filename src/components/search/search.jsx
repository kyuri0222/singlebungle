import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { useSetRecoilState } from "recoil";
import { boardState } from "../state/boardState";

const Search = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();
  // material UI CODE

  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") handleSearch();
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input
        ref={inputRef}
        onKeyPress={onKeyPress}
        inputProps={{ "aria-label": "description" }}
      />
      <Button
        onClick={onClick}
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={
          <Icon>
            <span className={classes.span}>send</span>
          </Icon>
        }
      ></Button>
    </form>
  );
};

export default Search;
