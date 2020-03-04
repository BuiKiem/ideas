import React from "react";
import { Button, CssBaseline } from "@material-ui/core";
import { Inbox as InboxIcon } from "@material-ui/icons";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <div>
        <Button variant="contained" color="primary" startIcon={<InboxIcon />}>
          INBOX
        </Button>
      </div>
    </>
  );
};
