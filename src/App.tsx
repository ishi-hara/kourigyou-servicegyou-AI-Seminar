import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import ChatGptPage from '@/pages/ChatGptPage';
import GeminiNotebookPage from '@/pages/GeminiNotebookPage';
import GptsPage from '@/pages/GptsPage';
import AiAgentPage from '@/pages/AiAgentPage';
import NotFoundPage from '@/components/common/NotFoundPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatgpt" element={<ChatGptPage />} />
        <Route path="/gemini-notebook" element={<GeminiNotebookPage />} />
        <Route path="/gpts" element={<GptsPage />} />
        <Route path="/ai-agent" element={<AiAgentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
