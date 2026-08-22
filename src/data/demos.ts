import { MessageSquare, BookOpen, Bot, Terminal } from 'lucide-react';
import type { Demo } from '@/types/demo';

export const demos: Demo[] = [
  {
    id: 'chatgpt',
    label: 'ChatGPT',
    fullLabel: 'ChatGPTデモ用',
    path: '/chatgpt',
    description:
      'ChatGPTを活用した文書作成・情報検索・アイデア出しのデモです。小売業・サービス業の店舗で即役立つ活用パターンを体験できます。',
    icon: MessageSquare,
  },
  {
    id: 'gemini-notebook',
    label: 'Gemini Notebook',
    fullLabel: 'Gemini Notebookデモ用',
    path: '/gemini-notebook',
    description:
      'Gemini Notebookを使った資料の要約・比較分析・ナレッジ管理のデモです。複数ドキュメントを横断して読み解くワークフローを体験できます。',
    icon: BookOpen,
  },
  {
    id: 'gpts',
    label: 'GPTs',
    fullLabel: 'GPTsデモ用',
    path: '/gpts',
    description:
      '業務特化型GPTsのカスタムデモです。小売業・サービス業の専門知識を組み込んだGPTsがどのように活用できるかをご覧いただけます。',
    icon: Bot,
  },
  {
    id: 'ai-agent',
    label: 'AIエージェント',
    fullLabel: 'AIエージェント（Claude Code）デモ用',
    path: '/ai-agent',
    description:
      'Claude Codeを活用したAIエージェントのデモです。コード生成・分析・自動化タスクを通じて、エージェント型AIの可能性を体験できます。',
    icon: Terminal,
  },
];
