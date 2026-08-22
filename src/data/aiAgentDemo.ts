import type { StepItem } from '@/types/demoStep';

export interface NotePart {
  text: string;
  mono?: boolean;
}

export interface FileEntry {
  path: string;
  description: string;
}

export interface FileContentBlock {
  title: string;
  description?: string;
  entries?: FileEntry[];
  paragraphs?: string[];
  bullets?: string[];
}

export interface AiAgentStep {
  id: string;
  number: number;
  title: string;
  body?: string;
  items?: StepItem[];
  prompt?: string;
  note?: string;
  noteParts?: NotePart[];
  callout?: { items: string[] };
  fileTree?: { tree: string; caption?: string };
  referenceTitle?: string;
  referenceItems?: string[];
  table?: { headers: string[]; rows: string[][] };
  explanation?: {
    intro?: string;
    bullets?: string[];
    closing?: string;
  };
}

export const aiAgentDemo = {
  header: {
    title: 'AIエージェント（Claude Code）デモ',
    leadText:
      'ゴールを伝えると、AIが作業を分解して実行し、成果物のファイル作成まで行う流れを確認します。',
  },

  about: {
    title: 'AIエージェントとは',
    paragraphs: [
      'AIエージェントは、単に質問に答えるAIではなく、目的を伝えると、必要な作業を考え、複数の資料やツールを使いながら、仕事を進めてくれるAIです。',
      'これまでのChatGPTやGPTsは、人が一つずつ仕事を頼んでいました。',
      'AIエージェントでは、目的と手順を与えておくことで、複数の資料を確認しながら、一連の仕事を順番に進めさせることができます。',
      'イメージとしては、',
    ],
    bullets: [],
    emphasis:
      'ChatGPTが「相談できるAI」なら、AIエージェントは「仕事を任せられるAI担当者」です。',
  },

  comparison: {
    title: 'ChatGPTとAIエージェントの違い',
    headers: ['ChatGPT', 'AIエージェント'],
    rows: [
      ['質問に答える', 'ゴールに向かって作業する'],
      ['1回の依頼が中心', '複数工程を実行する'],
      ['人が次の指示を出す', 'AIが次の作業を考える'],
      ['回答を返す', 'ファイル作成・保存まで行う'],
    ],
    note: '今回は、販促担当のAI社員に仕事を任せるイメージです。',
  },

  fileStructure: {
    title: 'デモのファイル構成',
    tree: `20_ClaudeCode_デモフォルダ
├─.claude
│  └─agents
│          sns-marketer-agent.md
├─01_Input
│      01_店舗概要.md
│      02_新商品情報.md
│      03_SNS・販促運用ルール.md
│      04_過去SNS投稿.md
│      05_接客・口コミ返信ルール.md
│      06_口コミ・クレーム.md
│      07_売上データ.xlsx
├─02_Instructions
│      01_AI_Agent_Instructions.md
└─03_Output
       .gitkeep`,
    notes: [
      '01_Input：入力資料格納フォルダ',
      '02_Instructions：仕事の指示書格納フォルダ',
      '03_Output：成果物出力フォルダ',
    ],
  },

  fileContents: {
    title: '各ファイルの内容',
    blocks: [
      {
        title: 'CLAUDE.md',
        paragraphs: [
          'プロジェクト全体で常に守るルールを書きます。',
          'Claude Codeはプロジェクトルートの CLAUDE.md を各セッション開始時に読み込みます。プロジェクト共通のルール、作業方針、禁止事項を設定する用途です。',
          '今回は、使用しません。',
        ],
      },
      {
        title: 'エージェントファイル',
        description:
          'エージェントファイルとは、AIエージェントの役割・専門分野・使えるツール・守るルールなどを定義した「AI担当者の設定ファイル」です。今回は、SNS販促を担当する専用エージェントを事前に作っています。',
        entries: [
          {
            path: '.claude/agents/sns-marketer-agent.md',
            description:
              '新商品販促支援。売上分析、媒体別SNS投稿、接客支援、口コミ返信案、品質チェックを一連で行うための手順を記載しています。',
          },
        ],
        paragraphs: [
          'AIエージェントは、役割と手順を決めた業務担当者です。主な役割は以下の通りです。',
        ],
        bullets: [
          '販促方針',
          'Instagram',
          'LINE',
          'Googleビジネス',
          '接客支援',
          '口コミ返信',
          '品質チェック',
        ],
      },
      {
        title: 'スキルファイル',
        paragraphs: [
          'スキルは、繰り返し使う作業手順をまとめるものです。',
          '今回は使用していません。',
        ],
      },
    ] as FileContentBlock[],
  },

  stepsTitle: 'デモ手順',
  stepsTocTitle: '手順一覧',
  steps: [
    {
      id: 'step-1',
      number: 1,
      title: 'ClaudeCodeの使用',
      body: 'ClaudeCodeのデスクトップ版を使います。',
      items: [
        { marker: '①', text: '画面左：新規' },
        {
          marker: '②',
          text: '画面下：ローカル、フォルダは「20_ClaudeCode_デモフォルダ」',
          notes: ['「このフォルダでワークスペースを信頼する」をクリック'],
        },
      ],
    },
    {
      id: 'step-2',
      number: 2,
      title: '最初の指示（約3分要します）',
      body: 'Claude Codeへの指示：以下を入力します。',
      prompt: `sns-marketer-agentを使って、9月新商品「川西産いちじくのタルト」の販促支援処理を開始してください。
02_Instructions/01_AI_Agent_Instructions.mdを読み、記載された手順に従ってください。
最初に入力ファイル一覧と処理計画を表示し、まだ成果物は作成せず、私の承認を待ってください。`,
      explanation: {
        intro: '※まず計画します。承認してから動作させます。',
        bullets: [
          'AIに全部任せるのではなく、途中に人の確認ポイントを入れています。',
          'これをHuman-in-the-loopといいます。',
        ],
        closing: '表示された計画の内容を確認します。',
      },
    },
    {
      id: 'step-3',
      number: 3,
      title: '処理計画を確認する',
      body: '通常のチャットでは、人が作業を一つずつ依頼します。AIエージェントでは、達成したいゴールを渡すと、必要な作業を分解して計画します。表示された計画結果でOKかどうかを確認します。もし、計画がずれていれば、「InstagramだけでなくLINEも含めてください」などと指示して修正します。',
    },
    {
      id: 'step-4',
      number: 4,
      title: '承認して一連の処理を実行する（約7分要します）',
      body: '以下を入力します。',
      prompt: `処理計画を承認します。成果物を作成してください。`,
      explanation: {
        intro:
          'ここからAIエージェントが一連の処理を進めます。以下のような処理を実施してくれます。',
        bullets: [
          '売上データの確認',
          '商品情報とSNSルールの確認',
          'その結果を使って各媒体向けの文章の作成',
        ],
      },
    },
    {
      id: 'step-5',
      number: 5,
      title: '出力結果',
      body: 'Claude Codeは、フォルダ内の複数ファイルを読み取り、指示された作業を分解して、必要なファイルを作成・保存します。Excelやテキスト資料を読み取り、複数資料を比較し、結果をファイルとして保存しています。',
      table: {
        headers: ['ファイル', '内容'],
        rows: [
          [
            '01_売上分析.md',
            '売れ筋、売れ残り、販売率、曜日差、いちじくタルトの試験販売傾向などが整理されている。',
          ],
          ['02_9月販促方針.md', '販売促進方針が記載されます。'],
          [
            '03_SNS投稿案.md',
            'Instagram投稿案、LINE投稿案、Googleビジネス投稿案が記載されます。',
          ],
          [
            '04_接客支援.md',
            '30秒商品説明案やよくある質問案が記載されます。',
          ],
          [
            '05_口コミ返信案.md',
            '口コミやクレームに対する返信案が記載されます。',
          ],
          [
            '06_品質チェック.md',
            '価格・期間・数量の整合性などが記載されます。',
          ],
        ],
      },
      callout: {
        items: [
          '補足）実際に出力されたファイル名とClaude Codeが表示するファイル名が異なる可能性があります。',
        ],
      },
    },
  ] as AiAgentStep[],

  furtherDevelopment: {
    title: 'AIエージェントをさらに発展させると',
    leadText:
      'AIエージェントを組み合わせたり、外部ツールと繋げると以下のようなこともできます。',
    items: [
      {
        name: 'CLAUDE.md',
        description:
          'AIが共通して守るプロジェクトや会社のルールを設定できる',
      },
      {
        name: 'Skills（スキル）',
        description:
          '売上分析、SNS投稿、口コミ返信など、繰り返し使う業務手順を再利用できる',
      },
      {
        name: '複数エージェント',
        description:
          'SNS担当、メール担当、チェック担当など、専門スタッフのように役割分担できる',
      },
      {
        name: '外部サービス連携',
        description:
          'APIやMCPを使うことで、メール取得、SNS投稿、各種システムへの登録などへ処理を広げられる',
      },
      {
        name: '人の確認を組み込む',
        description:
          'AIが作成 → AIがチェック → 人が承認 → 投稿・送信、という運用にできる',
      },
    ],
    emphasis:
      'AIエージェントは、AIに全部任せる仕組みではなく、人とAIで仕事の流れを設計する仕組みです。',
  },

  footer: {
    prevDemo: '前のデモへ',
    prevDemoPath: '/gpts',
    backToHome: 'ホームへ戻る',
  },
};
