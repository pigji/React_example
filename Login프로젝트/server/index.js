//터미널 -> express모듈 설치
//npm i -D nodemon = 코드를 수정하면 자동으로 서버를 껏다켜주는 라이브러리

//예전 문법 commonjs 모듈
//요즘 문법 es모듈(성능차이), express가 아직 es모듈로 작성했을때는 올바르게 동작하지 않는 경우가 있음

//import express from 'express';
const express = require("express");
const app = express(); //app에 express모듈을 연결
//.env파일에 있는 환경변수를 실행중인 프로그램의 env객체 안에 넣는 방법으로 dotenv라이브러리를 활용합니다.
const dotenv = require("dotenv");
//dotenv.config()함수를 사용하면 기본적으로 .env안에 있는 변수들을 process.env안에 만들어 줍니다.
dotenv.config({ path: ".env" });

const port = 80; //사용할 포트 번호(같은 컴퓨터안에서 실행되고 있는 서버(프로그램)들을 구분하기 위한 번호)

//mysql라이브러리를 연결, 비동기 처리를 위해 promise를 명시해 줘야 한다
const mysql = require("mysql2/promise");
//bcrypt 연결
const bcrypt = require("bcrypt");
//jwt 연결
const jwt = require("jsonwebtoken");
//jwt.sign({payload{데이터가 들어가야하는 부분},'tokenkey',{언제까지 유효한지 설정가능})

//mysql설정
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

//bodyParser는 express모듈에 내장되어있으니 바로 사용가능
app.use(express.json());

//api/login경로로 post요청이 들어오면 콜백함수가 실행
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body; //클라이언트가 보낸 요청의 body에서 email과 password를 추출합니다.
  try {
    //주어진 이메일에 해당하는 사용자의 이메일과 비밀번호를 데이터베이스에서 선택합니다.
    let sql = `SELECT email, pw FROM tbl_users WHERE email = ?`;
    //rows에는 결과 행(실제 데이터)이 담기고, fields는 메타데이터 입니다.
    const [rows, fields] = await pool.query(sql, [email]);
    //console.log(rows)

    //사용자가 로그인할때 입력한 일반비밀번호랑 암호화되어 저장된 비밀번호랑 서로 같은지 .compareSync()를 사용하여 비교합니다.
    if (!bcrypt.compareSync(password, rows[0].pw)) {
      //비밀번호가 일치하는 확인
      //이메일은 맞지만 비밀번호가 틀렸을때 실행
      res.status(404).json("로그인 실패");
      return;
    }
    //코드가 여기까지 실행됬다면 로그인이 성공
    //jwt 토큰 만들기
    //payload에는 {email:'로그인한 사용자의 이메일'}
    //비밀키 = 'secret'
    //1시간짜리 유효한 토큰으로 만들기
    const accessToken = jwt.sign({ email: rows[0].email }, "secret", {
      expiresIn: "1h",
    });
    console.log(accessToken);
    res.json({ accessToken }); //만든 토큰을 객체에 담아서 리액트로 전달(login.js로)
  } catch (err) {
    res.status(500).json("mysql에서 오류 발생");
  }
});

//회원 추가(비동기로 변경)
app.post('/api/users', async (req, res) => {
  console.log(req.body);//req에 body안에 요청정보가 들어있음

  //sql쿼리문 분리
  const sql = `INSERT INTO tbl_users
    (email, pw, question, answer) 
    VALUES (?, ?, ?, ?)`;

  //비구조화 할당으로 요청 body로 전달된 데이터를 변수에 할당
  let { email, password, question, answer } = req.body;

  //비밀번호 암호화
  let enpw = bcrypt.hashSync(password, 10);//10번에 걸쳐서 암호화한다. 10보다 많이 할수 있지만 느려질수있다(10이면 충분하다)

  try{
    let [result, fields] = await pool.query(sql, [email, enpw, question, answer]);
    console.log(result)//데이터베이스에 삽입된 행에 대한 정보
    console.log(fields);//결과와 관련된 필드 정보
    res.json('성공이야~!!');//클라이언트에 성공 메시지를 json형식으로 반환한다
  } catch (err) {
    //아이디가 컬럼의 최대 허용 용량을 벗어났다 (1406)
    if(err.errno === 1406){
      //객체에 담어서 에러메시지를 보내줌
      res.status(400).json({errCode: 1, errMsg:"아이디가 너무 길어요"});
    }else if(err.errno === 1062){//중복된 아이디가 존재한다(1062)
      res.status(400).json({errCode: 2, errMsg:"중복된 아이디가 존재합니다"});
    }else{// 그외 에러
      res.status(400).json({errCode: 3, errMsg:"알수없는 에러가 발생했습니다"});
    }
  }
})


//모든 사원 조회
app.get("/emp", (req, res) => {
  //mysql에서 emp테이블의 모든 데이터(행,컬럼)를 조회
  pool.query("SELECT * FROM emp", (err, rows, fields) => {
    console.log(rows); //우리가 필요한 데이터
    console.log(fields); //메타 정보(거의 쓸일 없음)
    res.json(rows); //응답할래, json형태로 rows(데이터)를 넣어서
  });
});

// /는 경로를 의미
// 앞에 있는 req는 요청객체, res는 응답객체
// 함수안에 res는 응답객체, send는 응답객체의 메소드
app.get("/api", (req, res) => {
  //데이터베이스 가서 조회해줘
  //데이터베이스에서 가져온 데이터를 클라이언트에게 보내줌(이때 사용하는것이 res객체)
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`서버가 구동 되었습니다 http://localhost:${port}`);
});
//listen함수 실행
//1.인자(두개) = 앞에는 숫자타입, 뒤에는 함수타입
//2. 동작 = 해당 프로그램이 앞쪽에 전달받은 숫자 포트에서 동작하게 만드는 함수.
//뒤쪽에 인자로 전달한 함수는 프로그램이 실행되었을때 최초 한번 실행되는 함수
//3. 결과값
