import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Login() {
  return (
    <div>
      <from>
        <Typography variant="h3" padding={3} textAlign="center">
          ระบบจัดการฟาร์มวัวบ้านๆ
        </Typography>
        <Typography variant="h5" padding={1} textAlign="center">
          จดบันทึก และแจ้งเตือนก่อนถึงกำหนดสำคัญ
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={500}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          backgroundColor={"#F6CA76"}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 10px #ccc",
            },
          }}
        >
          <Typography variant="h4" padding={3} textAlign="center">
            เข้าสู่ระบบ
          </Typography>
          <TextField
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="อีเมล์"
          />
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="รหัสผ่าน"
          />
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
            // color="#282c34"
          >
            ลงชื่อเข้าใช้
          </Button>
          <Button sx={{ marginTop: 3, borderRadius: 3 }} variant="contained">
            สมัครสมาชิก
          </Button>
          <br />
        </Box>
      </from>
      <br />
    </div>
  );
}
