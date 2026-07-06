// js/quiz-data.js

const mockTestBank = {
    nat: {
        set1: {
            title: "NAT-Test N5 - Set 1",
            questions: [
                { id: 1, type: "kanji-reading", question: "あそこに**犬**がいます。", options: ["いぬ", "ねこ", "とり", "さかな"], answer: "いぬ", exp: "犬 (いぬ) means dog." },
                { id: 2, type: "orthography", question: "きのうは**てんき**がよかったです。", options: ["天気", "電気", "天汽", "電汽"], answer: "天気", exp: "てんき is written as 天気 (weather)." },
                { id: 3, type: "context-rules", question: "おなかがすいたから、ご飯を＿＿＿。", options: ["食べます", "飲みます", "買います", "見ます"], answer: "食べます", exp: "ご飯を食べます means 'to eat rice/a meal'." },
                { id: 4, type: "grammar", question: "わたしは毎日日本語＿＿＿勉強します。", options: ["を", "が", "に", "で"], answer: "を", exp: "The particle 'を' marks the direct object '日本語'." }
                // Add remaining ~31 questions for NAT Set 1 here...
            ]
        },
        set2: { title: "NAT-Test N5 - Set 2", questions: [] },
        set3: { title: "NAT-Test N5 - Set 3", questions: [] },
        set4: { title: "NAT-Test N5 - Set 4", questions: [] },
        set5: { title: "NAT-Test N5 - Set 5", questions: [] },
        set6: { title: "NAT-Test N5 - Set 6", questions: [] },
        set7: { title: "NAT-Test N5 - Set 7", questions: [] },
        set8: { title: "NAT-Test N5 - Set 8", questions: [] },
        set9: { title: "NAT-Test N5 - Set 9", questions: [] },
        set10: { title: "NAT-Test N5 - Set 10", questions: [] }
    },
    jlpt: {
        set1: {
            title: "JLPT N5 - Set 1",
            questions: [
                { id: 1, type: "kanji-reading", question: "これは**本**です。", options: ["ほん", "ばん", "はん", "ぽん"], answer: "ほん", exp: "本 (ほん) means book." },
                { id: 2, type: "grammar", question: "日曜日＿＿＿どこへも行きませんでした。", options: ["に", "は", "を", "へ"], answer: "は", exp: "The compound topic marker 'には' or 'は' is used here to emphasize the day." }
                // Add remaining ~33 questions for JLPT Set 1 here...
            ]
        },
        set2: { title: "JLPT N5 - Set 2", questions: [] },
        set3: { title: "JLPT N5 - Set 3", questions: [] },
        set4: { title: "JLPT N5 - Set 4", questions: [] },
        set5: { title: "JLPT N5 - Set 5", questions: [] },
        set6: { title: "JLPT N5 - Set 6", questions: [] },
        set7: { title: "JLPT N5 - Set 7", questions: [] },
        set8: { title: "JLPT N5 - Set 8", questions: [] },
        set9: { title: "JLPT N5 - Set 9", questions: [] },
        set10: { title: "JLPT N5 - Set 10", questions: [] }
    }
};
