# Enterprise AI Workspace Architecture

## High-Level Architecture

User
↓
Frontend (Next.js)
↓
Backend API (FastAPI)
├── PostgreSQL (Users, Chats, Metadata)
├── File Storage (PDFs, CSVs)
├── ChromaDB (Vector Database)
└── Gemini API (LLM)

## Responsibilities

### Frontend
- User Interface
- Dashboard
- Authentication Screens
- File Upload
- Chat Interface

### Backend
- Authentication
- Business Logic
- API Endpoints
- AI Integration
- File Processing

### PostgreSQL
- Users
- Chat History
- File Metadata

### File Storage
- Uploaded PDFs
- Uploaded CSVs

### ChromaDB
- Embeddings
- Semantic Search

### Gemini API
- Answer Generation
- Summarization
- Reasoning

