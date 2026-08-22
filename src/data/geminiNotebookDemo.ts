export type { StepItem, StepImage } from '@/types/demoStep';
import type { StepItem, StepImage } from '@/types/demoStep';

export interface Step {
  id: string;
  number: number;
  title: string;
  body?: string;
  items?: StepItem[];
  prompt?: string;
  note?: string;
  expectedItems?: string[];
  expectedTitle?: string;
  image?: StepImage;
}

export interface FileEntry {
  name: string;
  label?: string;
}

export const geminiNotebookDemo = {
  header: {
    title: 'Gemini Notebookデモ',
    leadText: '登録した資料を根拠に質問し、回答の引用元を確認します。',
  },
  about: {
    title: 'Gemini Notebookとは',
    note: '注）Gemini Notebookは、旧NotebookLMのことです。',
    paragraphs: [
      'Gemini Notebookは、登録した資料を根拠として質問し、回答箇所の引用元を確認する用途に向いています。',
      'チャットでは使用する資料を選択でき、回答内の引用から元資料の該当箇所へ移動できます。',
    ],
    bullets: [
      'ChatGPT：プロンプトや添付資料を使ってその場の仕事を実施。',
      'Gemini Notebook：自社の資料をまとめて登録し、その資料を根拠に調べたり整理したりするのが得意。',
    ],
  },
  files: {
    title: 'デモで使用するファイル（全6ファイル）',
    description: 'ここでのデモで使用するファイル：02～06、08の「.md」ファイル',
    items: [
      { name: '02_店舗概要.md' },
      { name: '03_新商品情報_川西産いちじくのタルト.md' },
      { name: '04_SNS・販促運用ルール.md' },
      { name: '05_過去SNS投稿サンプル.md' },
      { name: '06_接客・口コミ返信ルール.md' },
      { name: '08_新人向け接客メモ.md' },
    ] as FileEntry[],
    callout: {
      items: [
        '※今回の資料はすべてテキスト形式（.md）のため、そのままアップロードできます。なお Gemini Notebook は Excel ファイルに対応していないため、Excel の資料を使う場合は PDF または Google スプレッドシートに変換してください。',
      ],
    },
    downloadLink: {
      href: 'https://github.com/ishi-hara/Download-files/releases/latest/download/kensetsu-seizo-demo-data.zip',
      text: 'デモデータをダウンロード（ZIP）',
      note: '※ZIP形式／約2.1MB',
    },
  },
  stepsTitle: 'デモ手順',
  stepsTocTitle: '手順一覧',
  steps: [
    {
      id: 'step-1',
      number: 1,
      title: '新しいノートブックを作る',
      items: [
        {
          marker: '①',
          text: 'gemini.google.com にアクセスします。または「Google Gemini」で検索します。',
          notes: [
            '※Gmailを持っていない方は、作成する必要があります。',
            '補足）「Gemini Notebook」で検索してもOKです。「Gemini Notebook | AI Research Tool & Thinking Partner」を押下します。',
          ],
        },
        {
          marker: '②',
          text: '左下の歯車ボタン（設定）をクリックし、[Gemini Notebook] をクリックします。Gemini Notebookの画面が出ます。',
        },
        {
          marker: '③',
          text: '「ノートブックを新規作成」をクリックします。ここでは、右上の「×」をクリックして全面の画面を消します。',
        },
        {
          marker: '④',
          text: '名称を変更します（「無題のノートブック」となっています）。変更後の名称：かわにし菓子工房 AI販促・接客支援',
        },
      ],
    },
    {
      id: 'step-2',
      number: 2,
      title: '資料を追加する',
      body: '今回の6つのファイルを追加します。',
      items: [
        {
          marker: '①',
          text: '画面左の「＋ソースを追加」をクリックし、6ファイルをアップロード（ドロップ）します。',
          notes: [
            '・02_店舗概要.md',
            '・03_新商品情報_川西産いちじくのタルト.md',
            '・04_SNS・販促運用ルール.md',
            '・05_過去SNS投稿サンプル.md',
            '・06_接客・口コミ返信ルール.md',
            '・08_新人向け接客メモ.md',
          ],
        },
        {
          marker: '②',
          text: '画面左にアップロードした6つのファイルが表示されます。',
        },
      ],
    },
    {
      id: 'step-3',
      number: 3,
      title: '最初に資料の理解度を確認する',
      body: 'いきなり販促文を作らせず、次の質問をします。',
    },
    {
      id: 'step-4',
      number: 4,
      title: 'デモ質問1：新人スタッフの問い合わせ',
      prompt: `川西産いちじくのタルトについて、新人スタッフがお客様へ説明してよい内容を整理してください。
根拠となるソースも確認できる形で回答してください。`,
      note: `質問に対する回答が表示されます。
この時、回答の横にある数字の1や2の上にマウスを持ってくるかクリックすると、回答元となった資料がわかります。`,
    },
    {
      id: 'step-5',
      number: 5,
      title: 'デモ質問2：複数資料を横断してルール確認',
      prompt: `新商品をInstagramで告知するとき、必ず入れる情報と、使ってはいけない表現を整理してください。`,
      note: `ここでは Notebook が、商品情報とSNS・販促運用ルールという別々の資料を横断して回答しています。`,
    },
    {
      id: 'step-6',
      number: 6,
      title: 'デモ質問3：新人教育へ展開',
      prompt: `新人向けに「川西産いちじくのタルトを案内するときの30秒接客トーク」を作るために必要な情報を、登録ソースだけから整理してください。`,
      note: `スタッフ教育の属人化対策につなげることができます。
店長：「新人によって説明が違う」
→Notebook：「商品資料・接客ルールから説明すべきポイントを整理」
この結果を基に「新人教育用マニュアルや接客トークへ展開」資料が作成できます。`,
    },
  ] as Step[],
  comparison: {
    title: 'ChatGPTとGemini Notebookの違い',
    headers: ['ChatGPT', 'Gemini Notebook'],
    rows: [
      ['AIに仕事を依頼する', '資料についてAIに聞く'],
      ['プロンプトが中心', 'ソース資料が中心'],
      ['文章作成、分析など幅広い', '資料の検索・整理・要約に強い'],
      ['添付資料も利用可能', '複数資料を継続的にまとめて参照'],
      ['「作って」が得意', '「どこに書いてある？」が得意'],
    ],
    emphasis: 'Gemini Notebook は「自社資料を根拠にした仕事」が特に得意です。',
  },
  footer: {
    prevDemo: '前のデモへ',
    prevDemoPath: '/chatgpt',
    backToHome: 'ホームへ戻る',
    nextDemo: '次のデモへ',
    nextDemoPath: '/gpts',
  },
};
