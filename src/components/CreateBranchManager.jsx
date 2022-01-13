import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function CreateBranchManager() {
    return (
        <div style={{marginTop: 150, marginLeft: 250}}>
            <h1 style={{textAlign: 'center'}}> CREATE BRANCH MANAGER</h1>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <TextField
          id="outlined-required"
          label="BranchManager Username"          
          style={{width: "30%", marginBottom: 20}}
        />
            <TextField
          type="password"
          id="outlined-required"
          label="Password"
          style={{width: "30%"}}
        />

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
                  Create Branch Manager
              </Button>
        </div>
        </div>
    )
}

export default CreateBranchManager
