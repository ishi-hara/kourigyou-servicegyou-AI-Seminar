import type { StepItem, StepImage } from '@/types/demoStep';

export interface GptsTable {
  headers: string[];
  rows: string[][];
}

export interface GptsSetting {
  title: string;
  description: string;
  bullets?: string[];
}

export type GptsBlock =
  | { type: 'prompt'; text: string }
  | { type: 'note'; text: string }
  | { type: 'reference'; text: string };

export interface GptsStep {
  id: string;
  number: number;
  title: string;
  body?: string;
  bodyEmphasis?: boolean;
  items?: StepItem[];
  prompt?: string;
  promptScrollable?: boolean;
  note?: string;
  fileItems?: { name: string; label?: string }[];
  table?: GptsTable;
  callout?: { items: string[] };
  settings?: GptsSetting[];
  blocks?: GptsBlock[];
  image?: StepImage;
}

export const gptsDemo = {
  header: {
    title: 'GPTs（GPT）デモ',
    leadText:
      '作業手順と回答形式をGPTに事前設定し、毎回同じ品質で回答させる流れを確認します。',
  },
  about: {
    title: 'GPTとは',
    paragraphs: [
      'GPTは、資料だけでなく、毎回守らせる作業手順や回答形式も事前設定する用途に向いています。',
      'GPTには、振る舞いを決める「指示」、参考資料を登録する「Knowledge」、利用機能などを設定できます。GPTの知識には最大20ファイルを添付できます。',
      'Gemini Notebookは資料を読んで答えてくれました。毎回同じ店舗ルールでSNS投稿まで作ってくれる"専用AI"にしたい場合は、GPTを使ってみます。',
    ],
    callout: {
      items: ['注）ChatGPTにログインできる状態にあること。有料版を使っていること。'],
    },
  },
  configure: {
    title: '「構成」と「作成する」の違い',
    paragraphs: [
      'GPTの作成では「構成」と「作成する」を選択できます。',
      '今回のGPTは、単なる質問回答ではなく、GPTの各項目の設定を明示的に作り込むため、「構成」を使って設定しています。',
      '「作成する」を選択すると、AIと会話しながら作成することができます。AIが「構成」の各要素を埋め込んでくれます。',
    ],
  },
  stepsTitle: 'デモ手順',
  stepsTocTitle: '手順一覧',
  steps: [
    {
      id: 'step-1',
      number: 1,
      title: 'GPTを新規作成する',
      items: [
        {
          marker: '①',
          text: 'ChatGPTのGPT画面を開きます。画面左の「さらに表示」の「GPT」をクリックします。',
        },
        {
          marker: '②',
          text: '画面右上の「＋作成する」を選択します。',
        },
        {
          marker: '③',
          text: '左側が「構成」画面になります。',
        },
        {
          marker: '④',
          text: '名前を入力します。',
          notes: ['名称例：かわにし菓子工房 販促アシスタント'],
        },
      ],
    },
    {
      id: 'step-2',
      number: 2,
      title: 'GPTの説明文を入力する',
      prompt: `店舗資料と販促ルールを参照して、SNS投稿・商品説明・口コミ返信案を作成する社内向けGPT。`,
    },
    {
      id: 'step-3',
      number: 3,
      title: '指示を設定する',
      body: '指示は『このAI社員に渡す業務ルール』です。この指示が重要なので、詳しく記載します。',
      prompt: `あなたは「かわにし菓子工房」の販促・接客支援アシスタントです。

### 基本方針

1. Knowledgeに登録された店舗資料・商品資料・運用ルールを優先して参照する。
2. 日付、価格、数量、商品特徴は資料と一致させる。
3. 不明な事実を推測して追加しない。
4. 禁止表現を使わない。
5. 媒体ごとのルールに合わせて文章量・ハッシュタグ・表現を調整する。
6. クレーム返信は返信案までとし、健康被害・異物混入・金銭トラブルは店長確認が必要と明記する。
7. 情報不足が成果物の正確性に影響する場合のみ、作成前に質問する。

### SNS投稿

Instagram、LINE公式、Googleビジネスプロフィールの3媒体に対応する。
利用者が媒体を指定しない場合は確認する。

### 出力後チェック

- 使用した主要情報
- 禁止表現チェック：問題なし / 要確認
- 人による確認が必要な点`,
    },
    {
      id: 'step-4',
      number: 4,
      title: '知識へ社内資料を登録する',
      body: '知識には、主に繰り返し参照する資料を登録します。02～06、08の6つの「.md」ファイルです。「ファイルをアップロードする」をクリックします。',
      fileItems: [
        { name: '02_店舗概要.md' },
        { name: '03_新商品情報_川西産いちじくのタルト.md' },
        { name: '04_SNS・販促運用ルール.md' },
        { name: '05_過去SNS投稿サンプル.md' },
        { name: '06_接客・口コミ返信ルール.md' },
        { name: '08_新人向け接客メモ.md' },
      ],
      table: {
        headers: ['設定', '役割', '今回の例'],
        rows: [
          ['Instructions', 'AIの働き方・ルール', '推測しない、禁止表現を使わない'],
          ['Knowledge', 'AIが参照する資料', '店舗情報、商品情報、接客マニュアル'],
        ],
      },
    },
    {
      id: 'step-5',
      number: 5,
      title: '会話のきっかけを設定する（ここでは4パターン）',
      prompt: `川西産いちじくのタルトのInstagram投稿を作って
新人向けに新商品の接客トークを作って
この口コミへの返信案を作って
3媒体向けに同じ商品の文章を作り分けて`,
      settings: [
        {
          title: '推奨モデル：今回はそのまま（推奨モデルを使用しない）',
          description:
            '推奨モデルは固定していません。利用者が使用できるモデルの中から選べる設定です。今回のデモでは、複数資料の比較に向くThinking系モデルを使用します。',
        },
        {
          title: '機能：コードインタープリター／データ分析のみチェック',
          description: '理由は、今後次の処理に発展できるためです。',
          bullets: [
            'ExcelやCSV形式の過去売上を分析する',
            '金額を集計する',
          ],
        },
        {
          title: 'アクション：なし',
          description:
            'アクションは、外部APIへ接続して社内システムや外部サービスの情報を取得・登録する場合に使用します。今回のGPTは、Knowledgeとチャット添付資料だけで完結するため不要です。',
        },
      ],
    },
    {
      id: 'step-6',
      number: 6,
      title: 'プレビューでテストする',
      prompt: `川西産いちじくのタルトのInstagram投稿を作って`,
      note: `通常のChatGPTでは、この依頼だけでは出力が不安定になりやすいですが、GPTsには作業手順を事前設定しているため、決められた順番で回答します。
通常のChatGPTでは、毎回、詳しい指示を書く必要があります。GPTsでは、会社や店舗のルールや処理手順をあらかじめ設定しているため、利用者は短く依頼できます。`,
    },
    {
      id: 'step-7',
      number: 7,
      title: '媒体をLINEに変えてみる',
      blocks: [
        { type: 'prompt', text: '同じ商品をLINE公式向けに作って' },
        {
          type: 'note',
          text: '知識に格納したファイルの中からLINE運用ルールを使って、Instagramより短め、ハッシュタグなし、販売期間・価格・数量を優先、という文章になります。\n\n補足）GPTに文章のトーンも設定しておけば、担当者ごとのばらつきを減らせます。',
        },
        { type: 'prompt', text: 'Googleビジネスプロフィール向けにも作って' },
        {
          type: 'reference',
          text: '参考）Google ビジネス プロフィールは、Google 検索や Google マップに表示される店舗や企業の情報を無料で管理できるツールです。',
        },
      ],
    },
    {
      id: 'step-8',
      number: 8,
      title: '接客マニュアルにも展開',
      prompt: `川西産いちじくのタルトについて、新人スタッフ向けの30秒接客トークを作って`,
    },
    {
      id: 'step-9',
      number: 9,
      title: 'クレーム対応',
      prompt: `購入した商品を食べた後に体調が悪くなりました。原因は分かりませんが、原材料を確認したいです。
この口コミへの返信案を作ってください。`,
    },
    {
      id: 'step-10',
      number: 10,
      title: 'GPTのプレビュー結果がOKなら、正式に作成する',
      body: '画面右上の「作成する」をクリックします。',
    },
  ] as GptsStep[],
  comparison: {
    title: 'Gemini Notebookとの違い',
    headers: ['Gemini Notebook', 'GPTs'],
    rows: [
      ['資料を調べる・整理する', '決められた仕事をする'],
      ['ソースが主役', 'Instructions＋Knowledgeが主役'],
      ['「資料には何と書いてある？」', '「このルールで投稿を作って」'],
      ['社内資料の検索・理解', '定型業務の専用AI化'],
    ],
    emphasis:
      'Gemini Notebook：「SNSルールには何と書いてありますか？」／ GPTs：「そのSNSルールに従って投稿を作ってください」',
  },
  footer: {
    prevDemo: '前のデモへ',
    prevDemoPath: '/gemini-notebook',
    backToHome: 'ホームへ戻る',
    nextDemo: '次のデモへ',
    nextDemoPath: '/ai-agent',
  },
};
