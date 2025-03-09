import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";
import mongoose from "mongoose";

dotenv.config(); // .env 로드

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000; // 기존 5000포트와 통합

// API 키 로드 확인
console.log("Loaded API Key:", process.env.GROQ_API_KEY);

// MongoDB 연결 설정
mongoose.connect("mongodb://localhost:27017/web_project", {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
});

const groqSchema = new mongoose.Schema({
  title: String,
  content: String,
  timestamp: String,
});

const GroqPost = mongoose.model("GroqPost", groqSchema);

// CORS 활성화
app.use(cors());

// JSON 요청 파싱
app.use(express.json());

// 정적 파일 제공 (HTML, CSS, JS 파일)
app.use(express.static(__dirname));

// Groq API 설정
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// AI API 엔드포인트
app.post("/api", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  try {
    // Groq API 호출
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // GPT 모델 선정
      messages: [{ role: "user", content: question }],
    });

    const answer = response.choices[0].message.content.trim();
    res.json({ answer });
  } catch (error) {
    console.error("Groq API Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// 게시글 저장 엔드포인트
app.post("/api/groqposts", async (req, res) => {
  const { title, content, timestamp } = req.body;

  const newGroqPost = new GroqPost({ title, content, timestamp });
  await newGroqPost.save();

  res.status(201).json(newGroqPost);
});

// 게시글 불러오기 엔드포인트
app.get("/api/groqposts", async (req, res) => {
  const groqPosts = await GroqPost.find();
  res.json(groqPosts);
});

// 게시글 삭제 엔드포인트
app.delete("/api/groqposts/:id", async (req, res) => {
  const { id } = req.params;
  await GroqPost.findByIdAndDelete(id);
  res.status(204).send();
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});